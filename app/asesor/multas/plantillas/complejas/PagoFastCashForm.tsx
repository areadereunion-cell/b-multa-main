"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

type AnyRecord = Record<string, unknown>;

type Caso = {
  numero_prestamo: string;
  nombre_cliente: string | null;
  telefono_cliente: string | null;
  valor_deuda: number | null;
  producto: string | null;
  segmento: string | null;
  liga_pago: string | null;
};

type OptionItem = {
  id: string;
  label: string; // label visible
  value: string; // value real (cuenta o valor)
  raw: AnyRecord;
};

function norm(s: unknown) {
  return String(s ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function PagoFastCashForm() {
  // =========================
  // Params
  // =========================
  const params = useParams();
  const numeroPrestamo = String((params as any)?.id ?? "").trim();

  // =========================
  // Helpers
  // =========================
  const isHex = (s: unknown): boolean => /^#([0-9A-Fa-f]{6})$/.test(String(s ?? ""));
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  const normalizeUrl = (u: unknown): string | null => {
    if (!u) return null;
    let s = String(u).trim().replaceAll("\\", "/");

    if (/^https?:\/\//i.test(s)) return s;
    if (s.startsWith("public/uploads/")) s = s.replace("public/", "");
    if (s.startsWith("uploads/")) s = `/${s}`;
    if (s.startsWith("/")) return origin ? `${origin}${s}` : s;
    return origin ? `${origin}/${s}` : s;
  };

  // =========================
  // 1) Cargar CASO desde BD (cliente)
  // =========================
  const [caso, setCaso] = useState<Caso | null>(null);
  const [loadingCaso, setLoadingCaso] = useState(true);
  const [errorCaso, setErrorCaso] = useState("");

  useEffect(() => {
    let cancel = false;

    async function fetchCaso() {
      if (!numeroPrestamo) {
        setLoadingCaso(false);
        setErrorCaso("Falta el número de préstamo en la URL.");
        return;
      }

      setLoadingCaso(true);
      setErrorCaso("");

      try {
        const res = await fetch(`/api/collection/casos/${encodeURIComponent(numeroPrestamo)}`, {
          cache: "no-store",
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error((json as any)?.error || "No se pudo cargar el caso");

        const row = ((json as any)?.data ?? json) as Caso;
        if (!cancel) setCaso(row);
      } catch (e: any) {
        if (!cancel) setErrorCaso(e?.message || "Error cargando caso");
      } finally {
        if (!cancel) setLoadingCaso(false);
      }
    }

    fetchCaso();
    return () => {
      cancel = true;
    };
  }, [numeroPrestamo]);

  // =========================
  // 2) País según segmento
  // =========================
  const isCo = useMemo(() => {
    const seg = norm(caso?.segmento);
    return seg.includes("col"); // "colombia"
  }, [caso?.segmento]);

  // ✅ AHORA son 2 listas:
  // - cuenta_bancaria_(pais)
  // - metodo_de_pago_(pais)
  const listCuentaKey = isCo ? "cuenta_bancaria_colombia" : "cuenta_bancaria_mexico";
  const listMetodoKey = isCo ? "metodo_pago_colombia" : "metodo_pago_mexico";


  // (para el logo automático por producto sigue igual, si ya lo tienes ok)
  const listProdKey = isCo ? "producto_colombia" : "producto_mexico";

  // =========================
  // 3) Cargar listas (Método + Cuenta)
  // =========================
  const [optionsCuenta, setOptionsCuenta] = useState<OptionItem[]>([]);
  const [optionsMetodo, setOptionsMetodo] = useState<OptionItem[]>([]);
  const [loadingListas, setLoadingListas] = useState(false);

    const normalizeItem = (o: unknown): OptionItem => {
    const obj = (o ?? {}) as AnyRecord;

    // cuenta/metodo => { id, value }
    // producto => { id, name, url }
    const value = String(obj?.["value"] ?? obj?.["name"] ?? "").trim();
    const label = String(obj?.["label"] ?? obj?.["value"] ?? obj?.["name"] ?? value).trim();

    return {
        id: String(obj?.["id"] ?? ""),
        label,
        value,
        raw: obj,
    };
    };


  async function loadLista(listKey: string, setter: (arr: OptionItem[]) => void) {
    const res = await fetch(`/api/collection/aplicaciones/${encodeURIComponent(listKey)}`, {
      cache: "no-store",
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      setter([]);
      return;
    }
    const arr = ((json as any)?.items ?? (json as any)?.data ?? []) as any[];
    const items = Array.isArray(arr) ? arr.map(normalizeItem) : [];
    setter(items);
  }

  useEffect(() => {
    if (!caso) return;
    let cancel = false;

    async function run() {
      setLoadingListas(true);
      try {
        await Promise.all([
          loadLista(listMetodoKey, (v) => !cancel && setOptionsMetodo(v)),
          loadLista(listCuentaKey, (v) => !cancel && setOptionsCuenta(v)),
        ]);
      } finally {
        if (!cancel) setLoadingListas(false);
      }
    }

    run();
    return () => {
      cancel = true;
    };
  }, [caso, listMetodoKey, listCuentaKey]);

  // =========================
  // 4) Logo por producto (auto) - se queda igual
  // =========================
  const [logoFromCatalog, setLogoFromCatalog] = useState<string | null>(null);

  useEffect(() => {
    let cancel = false;

    async function findLogo() {
      setLogoFromCatalog(null);
      if (!caso?.producto) return;

      try {
        const res = await fetch(`/api/collection/aplicaciones/${encodeURIComponent(listProdKey)}`, {
          cache: "no-store",
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok) return;

        const arr = ((json as any)?.items ?? (json as any)?.data ?? []) as any[];
        const items = Array.isArray(arr) ? arr : [];

        const target = norm(caso.producto);
        const found = items.find((it: any) => norm(it?.name) === target);

        const img = (found?.url as string | null | undefined) ?? null;
        if (!cancel) setLogoFromCatalog(img);

      } catch {
        if (!cancel) setLogoFromCatalog(null);
      }
    }

    if (caso) findLogo();
    return () => {
      cancel = true;
    };
  }, [caso, listProdKey]);

  // =========================
  // 5) Selecciones (IDs)
  // =========================
  const [metodoPagoId, setMetodoPagoId] = useState<string>("");
  const [cuentaId, setCuentaId] = useState<string>("");

  // defaults (primera opción)
  useEffect(() => {
    if (!metodoPagoId && optionsMetodo.length > 0) setMetodoPagoId(optionsMetodo[0].id);
  }, [optionsMetodo, metodoPagoId]);

  useEffect(() => {
    if (!cuentaId && optionsCuenta.length > 0) setCuentaId(optionsCuenta[0].id);
  }, [optionsCuenta, cuentaId]);

  const selectedMetodo = useMemo<OptionItem | null>(
    () => optionsMetodo.find((o) => o.id === metodoPagoId) || null,
    [optionsMetodo, metodoPagoId]
  );

  const selectedCuenta = useMemo<OptionItem | null>(
    () => optionsCuenta.find((o) => o.id === cuentaId) || null,
    [optionsCuenta, cuentaId]
  );

  // =========================
  // 6) Datos auto del caso
  // =========================
  const productoTitulo = String(caso?.producto ?? "");
  const metodoPagoLabel = selectedMetodo?.label ?? "";
  const cuentaBancaria = selectedCuenta?.value ?? ""; // ✅ cuenta real sale de value
  const logoUrlRaw = logoFromCatalog; // logo por producto
  const resolvedLogoUrl = useMemo(() => normalizeUrl(logoUrlRaw), [logoUrlRaw]);

  // =========================
  // 7) Campos editables
  // =========================
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mostrarExtras, setMostrarExtras] = useState(true);

  const [monto, setMonto] = useState("");
  const [importePagar, setImportePagar] = useState("");
  const [fechaVencimiento, setFechaVencimiento] = useState("");
  const [diasVencidos, setDiasVencidos] = useState(0);

  useEffect(() => {
    if (!caso) return;

    if (!nombre) setNombre(String(caso.nombre_cliente ?? ""));
    if (!telefono) setTelefono(String(caso.telefono_cliente ?? ""));

    const vd = caso.valor_deuda != null ? String(caso.valor_deuda) : "";
    if (!monto) setMonto(vd);
    if (!importePagar) setImportePagar(vd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [caso]);

  useEffect(() => {
    setImportePagar(monto);
  }, [monto]);

  useEffect(() => {
    if (!fechaVencimiento) return setDiasVencidos(0);
    const hoy = new Date();
    const venc = new Date(fechaVencimiento + "T00:00:00");
    const diff = Math.ceil((venc.getTime() - hoy.getTime()) / 86400000);
    setDiasVencidos(diff);
  }, [fechaVencimiento]);

  // =========================
  // 8) Foto habilitada
  // =========================
  const [fotoHabilitada, setFotoHabilitada] = useState(true);

  // =========================
  // 9) Colores
  // =========================
  const [cardBg, setCardBg] = useState("#ffffff");
  const [cardBgHexInput, setCardBgHexInput] = useState("#ffffff");
  const [primaryColor, setPrimaryColor] = useState("#0F56F7");
  const [primaryHexInput, setPrimaryHexInput] = useState("#0F56F7");
  const [cardBgError, setCardBgError] = useState("");
  const [primaryError, setPrimaryError] = useState("");

  const handleCardBgHexChange = (value: string) => {
    setCardBgHexInput(value);
    if (isHex(value)) {
      setCardBg(value);
      setCardBgError("");
    } else setCardBgError("Ingresa color en formato #RRGGBB");
  };

  const handlePrimaryHexChange = (value: string) => {
    setPrimaryHexInput(value);
    if (isHex(value)) {
      setPrimaryColor(value);
      setPrimaryError("");
    } else setPrimaryError("Ingresa color en formato #RRGGBB");
  };

  const cardBgOptions = [
    { label: "Blanco", value: "#FFFFFF" },
    { label: "Gris claro", value: "#F8FAFC" },
    { label: "Gris suave", value: "#EEF2F6" },
    { label: "Marfil", value: "#FFF4E6" },
    { label: "Crema", value: "#FFF7ED" },
  ];

  const primaryOptions = [
    { label: "Azul (default)", value: "#0F56F7" },
    { label: "Naranja", value: "#FF6B00" },
    { label: "Verde", value: "#10B981" },
    { label: "Rojo", value: "#EF4444" },
  ];

  // =========================
  // 10) Generar link (static) y guardar en cliente.liga_pago
  // =========================
  const [saving, setSaving] = useState(false);
  const [shareLink, setShareLink] = useState<string | null>(null);
  const disabled = saving;

  const plantillaPagoId = isCo ? "2" : "1";

  async function crearLinkEstatico(): Promise<string> {
    const payload: AnyRecord = {
      plantilla_pago_id: plantillaPagoId,

      // ✅ guardamos ambos IDs (cuenta + método) por si luego los necesitas
      metodo_pago_lista_id: metodoPagoId || null,
      liga_pago_lista_id: cuentaId || null, // ← si tu backend espera liga_pago_lista_id
      // si tu backend espera cuenta_bancaria_lista_id, cámbialo aquí:
      // cuenta_bancaria_lista_id: cuentaId || null,

      // datos finales
      subproducto: productoTitulo,
      cuenta_bancaria: cuentaBancaria,
      metodo_pago: selectedMetodo?.label ?? selectedMetodo?.value ?? "",


      url: resolvedLogoUrl,

      monto,
      importe_pagar: importePagar,
      fecha_vencimiento: fechaVencimiento || null,
      dias_vencidos: diasVencidos,

      nombre_cliente: nombre,
      telefono_cliente: telefono,

      mostrar_extras: mostrarExtras,
      card_bg_color: cardBg,
      primary_color: primaryColor,
      locked: true,
      foto_habilitada: fotoHabilitada,
    };

    const res = await fetch("/api/plantillas-temporales-3   ", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json: AnyRecord = (await res.json().catch(() => ({}))) as AnyRecord;
    if (!res.ok) {
      throw new Error((json?.["error"] as string | undefined) ?? "No se pudo generar el link");
    }
    return String(json?.["link"]);
  }

  async function guardarLigaFinalEnCaso(link: string) {
    await fetch(`/api/collection/casos/${encodeURIComponent(numeroPrestamo)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ liga_pago: link }),
    }).catch(() => null);
  }

  const handleConfirmAndLock = async () => {
    if (saving) return;

    if (!metodoPagoId) {
      alert("Selecciona el método de pago.");
      return;
    }
    if (!cuentaId || !cuentaBancaria) {
      alert("Selecciona la cuenta bancaria.");
      return;
    }

    setSaving(true);
    try {
      const link = await crearLinkEstatico();
      setShareLink(link);
      await guardarLigaFinalEnCaso(link);
      window.location.href = link;
    } catch (e: any) {
      alert(e?.message || "Error generando link");
    } finally {
      setSaving(false);
    }
  };

  // =========================
  // UI estados
  // =========================
  if (loadingCaso) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#152032] text-white p-6">
        Cargando caso #{numeroPrestamo}…
      </div>
    );
  }

  if (errorCaso || !caso) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#152032] text-white p-6">
        <div className="max-w-md">
          <div className="text-xl font-bold mb-2">No se pudo cargar el caso</div>
          <div className="text-sm opacity-90">{errorCaso || "Caso no encontrado"}</div>
        </div>
      </div>
    );
  }

  // =========================
  // Render
  // =========================
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6 relative bg-[#152032]">
      {/* Panel derecho */}
      <div className="absolute right-6 top-16 z-50 flex flex-col gap-4 w-60">
        <div className="flex items-center justify-between text-white">
          <span className="text-sm font-medium">Mostrar datos del cliente</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={mostrarExtras}
              onChange={() => setMostrarExtras(!mostrarExtras)}
              className="sr-only peer"
              disabled={disabled}
            />
            <div
              className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full relative
              after:content-[''] after:w-5 after:h-5 after:bg-white after:rounded-full
              after:absolute after:left-1 after:top-0.5 peer-checked:after:translate-x-5 transition-all"
            />
          </label>
        </div>

        <div className="bg-white/5 p-3 rounded-lg">
          <div className="text-xs text-white mb-2 font-medium">Fondo de la tarjeta</div>
          <select
            className="w-full p-2 rounded-md mb-2 text-sm"
            value={cardBg}
            onChange={(e) => {
              setCardBg(e.target.value);
              setCardBgHexInput(e.target.value);
              setCardBgError("");
            }}
            disabled={disabled}
          >
            {cardBgOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label} — {o.value}
              </option>
            ))}
          </select>

          <div className="flex gap-2">
            <input
              type="text"
              value={cardBgHexInput}
              onChange={(e) => handleCardBgHexChange(e.target.value)}
              className="flex-1 p-2 rounded-md text-sm"
              placeholder="#RRGGBB"
              disabled={disabled}
            />
            <div
              className="w-10 h-10 rounded-md border"
              style={{ backgroundColor: isHex(cardBgHexInput) ? cardBgHexInput : cardBg }}
            />
          </div>
          {cardBgError && <div className="text-xs text-rose-400 mt-1">{cardBgError}</div>}
        </div>

        <div className="bg-white/5 p-3 rounded-lg">
          <div className="text-xs text-white mb-2 font-medium">Color del botón</div>
          <select
            className="w-full p-2 rounded-md mb-2 text-sm"
            value={primaryColor}
            onChange={(e) => {
              setPrimaryColor(e.target.value);
              setPrimaryHexInput(e.target.value);
              setPrimaryError("");
            }}
            disabled={disabled}
          >
            {primaryOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label} — {o.value}
              </option>
            ))}
          </select>

          <div className="flex gap-2">
            <input
              type="text"
              value={primaryHexInput}
              onChange={(e) => handlePrimaryHexChange(e.target.value)}
              className="flex-1 p-2 rounded-md text-sm"
              placeholder="#RRGGBB"
              disabled={disabled}
            />
            <div
              className="w-10 h-10 rounded-md border"
              style={{ backgroundColor: isHex(primaryHexInput) ? primaryHexInput : primaryColor }}
            />
          </div>
          {primaryError && <div className="text-xs text-rose-400 mt-1">{primaryError}</div>}
        </div>

        {shareLink && (
          <div className="bg-white/5 p-3 rounded-lg">
            <div className="text-xs text-white mb-2 font-medium">Link generado</div>
            <input className="w-full p-2 rounded-md text-sm" value={shareLink} readOnly />
            <button
              className="mt-2 w-full p-2 rounded-md text-sm bg-white/10 hover:bg-white/20 text-white"
              onClick={() => navigator.clipboard.writeText(shareLink)}
              type="button"
            >
              Copiar link
            </button>
          </div>
        )}
      </div>

      {/* Tarjeta */}
      <div
        className="w-[420px] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
        style={{ backgroundColor: cardBg }}
      >
        <div
          className="w-full h-[160px] flex flex-col items-center pt-6"
          style={{ background: "linear-gradient(180deg,#5CB0FF 0%,#A3D4FF 100%)" }}
        >
          {fotoHabilitada ? (
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow">
              {resolvedLogoUrl ? (
                <img src={resolvedLogoUrl} className="w-full h-full object-cover" alt="logo" />
              ) : (
                <span className="text-lg font-bold text-[#142546]">IMG</span>
              )}
            </div>
          ) : null}

          <button
            type="button"
            className="mt-2 text-xs px-3 py-1 rounded-md bg-white/70 hover:bg-white text-[#142546] font-semibold disabled:opacity-60"
            onClick={() => setFotoHabilitada((v) => !v)}
            disabled={disabled}
          >
            {fotoHabilitada ? "Inhabilitar foto" : "Habilitar foto"}
          </button>

          <h2 className="text-lg font-bold text-[#142546] mt-3">{productoTitulo || "-"}</h2>
          <div className="text-xs text-[#142546]/70">Préstamo #{numeroPrestamo}</div>
        </div>

        <div className="mx-4 -mt-4 rounded-xl p-4 text-white shadow-md" style={{ backgroundColor: primaryColor }}>
          <div className="text-xs opacity-90">Monto de Préstamo</div>
          <input
            type="text"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            placeholder="$0.00"
            className="w-full bg-transparent text-3xl font-bold outline-none"
            disabled={disabled}
          />
        </div>

        <div className="px-4 py-5 flex flex-col gap-4">
          <div className="bg-transparent rounded-xl border p-3 shadow-sm" style={{ backgroundColor: cardBg }}>
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-sm font-medium text-gray-700">Importe a Pagar</span>
              <input
                type="text"
                value={importePagar}
                onChange={(e) => setImportePagar(e.target.value)}
                className="text-gray-500 text-right w-28 bg-transparent font-semibold outline-none"
                disabled={disabled}
              />
            </div>

            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-sm font-medium text-gray-700">Fecha Vencimiento</span>
              <input
                type="date"
                value={fechaVencimiento}
                onChange={(e) => setFechaVencimiento(e.target.value)}
                className="text-gray-500 text-right bg-transparent outline-none"
                disabled={disabled}
              />
            </div>

            <div className="flex justify-between items-center py-3">
              <span className="text-sm font-medium text-gray-700">Días vencimiento</span>
              <span className="text-sm text-gray-500">{diasVencidos} días</span>
            </div>
          </div>

          {/* ✅ MÉTODO + CUENTA (filtrado por país) */}
          <div className="bg-transparent rounded-xl p-3 shadow-sm" style={{ backgroundColor: cardBg }}>
            <div className="text-sm font-medium text-gray-700 mb-2">
              Pago ({isCo ? "Colombia" : "México"})
            </div>

            <div className="flex items-center justify-center bg-[#F8FAFB] p-4 rounded-md">
              <div className="text-center w-full">
                {/* Método */}
                <select
                  className="w-full text-center text-sm font-semibold text-gray-700 bg-transparent outline-none"
                  value={metodoPagoId}
                  onChange={(e) => setMetodoPagoId(e.target.value)}
                  disabled={disabled || loadingListas}
                >
                  <option value="">{loadingListas ? "Cargando…" : "Selecciona método"}</option>
                  {optionsMetodo.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.label}
                    </option>
                  ))}
                </select>

                {/* Cuenta */}
                <div className="mt-3">
                  <select
                    className="w-full text-center text-sm font-semibold text-gray-700 bg-transparent outline-none"
                    value={cuentaId}
                    onChange={(e) => setCuentaId(e.target.value)}
                    disabled={disabled || loadingListas}
                  >
                    <option value="">{loadingListas ? "Cargando…" : "Selecciona cuenta"}</option>
                    {optionsCuenta.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preview */}
                {metodoPagoLabel ? <div className="mt-2 text-xs text-gray-500">{metodoPagoLabel}</div> : null}
                {cuentaBancaria ? <div className="mt-1 text-xs text-gray-500">{cuentaBancaria}</div> : null}
              </div>
            </div>
          </div>

          {mostrarExtras && (
            <div className="bg-transparent rounded-xl p-3 shadow-sm" style={{ backgroundColor: cardBg }}>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm font-medium text-gray-700">Nombre</span>
                <input
                  className="text-sm text-right bg-transparent outline-none text-gray-700"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  disabled={disabled}
                />
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-medium text-gray-700">Teléfono</span>
                <input
                  className="text-sm text-right bg-transparent outline-none text-gray-700"
                  placeholder="Teléfono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  disabled={disabled}
                />
              </div>
            </div>
          )}

          <button
            onClick={handleConfirmAndLock}
            className="w-full text-white p-3 rounded-xl text-lg font-semibold mt-2 disabled:opacity-60"
            style={{ backgroundColor: primaryColor }}
            disabled={disabled}
            type="button"
          >
            {saving ? "Generando link..." : "Confirmar y Generar Link"}
          </button>
        </div>
      </div>
    </div>
  );
}
