"use client";

import { useEffect, useMemo, useState } from "react";
import type { CasosFilters } from "./CasosToolbar";

type Caso = {
  numero_prestamo: string;
  nombre_cliente: string;
  telefono_cliente: string;
  valor_deuda: number;
  valor_recaudado: number | null;
  producto: string;
  segmento: string | null;
  fecha_cobro: string;
  estado_pago: "pendiente" | "pagado";
  collection_account: number | null;
  liga_pago: string | null;
  token: string;
};

type User = { id: number; username: string };

function money(n: number | null | undefined) {
  if (n === null || typeof n === "undefined") return "—";
  return `$${Number(n).toLocaleString()}`;
}

export default function CasosTable({
  role,
  filters,
}: {
  role: "admin" | "user";
  filters: CasosFilters;
}) {
  const [data, setData] = useState<Caso[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState<Record<string, boolean>>({});
  const [resegLoading, setResegLoading] = useState(false);
  const [changingPago, setChangingPago] = useState<Record<string, boolean>>({});
  const [openingLiga, setOpeningLiga] = useState<Record<string, boolean>>({});

  async function load() {
    setLoading(true);
    try {
      const r = await fetch("/api/collection/casos", { cache: "no-store" });
      const j = await r.json();

      if (j?.ok && Array.isArray(j.data)) {
        setData(j.data);
      }

      if (role === "admin") {
        const ru = await fetch("/api/collection/assignable-users", {
          cache: "no-store",
        });
        const ju = await ru.json();

        if (ju?.ok && Array.isArray(ju.users)) {
          setUsers(
            ju.users
              .map((u: any) => ({
                id: Number(u.id),
                username: String(u.username ?? ""),
              }))
              .filter((u: any) => Number.isFinite(u.id) && u.username)
          );
        }
      } else {
        setUsers([]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    const handler = () => load();
    window.addEventListener("casos:reload", handler);
    return () => window.removeEventListener("casos:reload", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role]);

  async function patchCaso(numero_prestamo: string, body: any) {
    const res = await fetch(`/api/collection/casos/${numero_prestamo}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const j = await res.json();
    if (!j.ok) throw new Error(j.error || "Error guardando");

    setData((prev) =>
      prev.map((x) => (x.numero_prestamo === numero_prestamo ? j.data : x))
    );

    return j.data;
  }

  async function obtenerUltimaLiga(numero_prestamo: string) {
    const res = await fetch(
      `/api/collection/casos/${encodeURIComponent(numero_prestamo)}`,
      {
        cache: "no-store",
      }
    );

    const j = await res.json().catch(() => null);

    if (!res.ok || !j?.ok) {
      throw new Error(j?.error || "No se pudo obtener el caso");
    }

    const liga = j?.data?.liga_pago || j?.liga_pago || null;

    if (!liga) {
      throw new Error("Este cliente no tiene una liga de pago generada");
    }

    return liga as string;
  }

  async function cambiarEstadoPago(row: Caso) {
    if (role !== "admin") return;

    const key = row.numero_prestamo;
    const nuevoEstado = row.estado_pago === "pagado" ? "pendiente" : "pagado";

    try {
      setChangingPago((p) => ({ ...p, [key]: true }));

      await patchCaso(row.numero_prestamo, {
        estado_pago: nuevoEstado,
      });

      await load();
    } catch (e: any) {
      alert(e?.message || "Error actualizando estado de pago");
      await load();
    } finally {
      setChangingPago((p) => ({ ...p, [key]: false }));
    }
  }

  async function entrarUltimaLiga(row: Caso) {
    const key = row.numero_prestamo;

    try {
      setOpeningLiga((p) => ({ ...p, [key]: true }));

      const liga = await obtenerUltimaLiga(row.numero_prestamo);

      window.open(liga, "_blank", "noopener,noreferrer");
    } catch (e: any) {
      alert(e?.message || "Error obteniendo la última liga");
    } finally {
      setOpeningLiga((p) => ({ ...p, [key]: false }));
    }
  }

  async function resegmentar() {
    try {
      setResegLoading(true);

      const res = await fetch("/api/collection/casos/resegment", {
        method: "POST",
      });

      const contentType = res.headers.get("content-type") || "";

      if (!contentType.includes("application/json")) {
        const text = await res.text();
        console.error("Respuesta no JSON:", text);
        throw new Error("La ruta de resegmentar no devolvió JSON");
      }

      const j = await res.json();

      if (!res.ok || !j?.ok) {
        throw new Error(j?.error || "Error al resegmentar");
      }

      alert(`✅ Actualizados: ${j.updated} | Escaneados: ${j.scanned}`);
      window.dispatchEvent(new Event("casos:reload"));
    } catch (e: any) {
      alert(e?.message || "Error");
    } finally {
      setResegLoading(false);
    }
  }

  async function generarLiga(row: Caso) {
    const key = row.numero_prestamo;

    try {
      setGenerating((p) => ({ ...p, [key]: true }));

      const res = await fetch(
        `/api/collection/casos/${encodeURIComponent(key)}/generar-liga`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            overwrite: true,
          }),
        }
      );

      const j = await res.json();

      if (!res.ok || !j?.ok) {
        throw new Error(j?.error || "Error generando liga");
      }

      await load();

      const finalLink = j.link || j.liga_pago || j.data?.liga_pago || null;

      if (finalLink) {
        window.open(finalLink, "_blank", "noopener,noreferrer");
      }
    } catch (e: any) {
      alert(e?.message || "Error");
    } finally {
      setGenerating((p) => ({ ...p, [key]: false }));
    }
  }

  const filtered = useMemo(() => {
    const s = (v: any) => String(v ?? "").toLowerCase().trim();
    const onlyDigits = (v: any) => String(v ?? "").replace(/\D/g, "");

    return data.filter((r) => {
      if (
        filters.numero_prestamo &&
        !s(r.numero_prestamo).includes(s(filters.numero_prestamo))
      ) {
        return false;
      }

      if (
        filters.nombre_cliente &&
        !s(r.nombre_cliente).includes(s(filters.nombre_cliente))
      ) {
        return false;
      }

      if (filters.telefono_cliente) {
        if (
          !onlyDigits(r.telefono_cliente).includes(
            onlyDigits(filters.telefono_cliente)
          )
        ) {
          return false;
        }
      }

      if (filters.producto && !s(r.producto).includes(s(filters.producto))) {
        return false;
      }

      if (filters.estado_pago && r.estado_pago !== filters.estado_pago) {
        return false;
      }

      if (filters.collection_account) {
        if (!s(r.collection_account).includes(s(filters.collection_account))) {
          return false;
        }
      }

      return true;
    });
  }, [data, filters]);

  if (loading) {
    return <div className="p-4 sm:p-6 text-sm text-slate-500">Cargando casos…</div>;
  }

  return (
    <div className="space-y-3 w-full">
      <div className="flex justify-stretch sm:justify-end px-1 sm:px-2">
        <button
          onClick={resegmentar}
          disabled={resegLoading}
          className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow"
        >
          {resegLoading ? "Procesando..." : "Resegmentar casos"}
        </button>
      </div>

      <div className="rounded-3xl bg-white/55 backdrop-blur-xl border border-slate-200/60 shadow overflow-hidden">
        <div className="px-4 pt-4 text-xs text-slate-500 break-words">
          Mostrando <b>{filtered.length}</b> de <b>{data.length}</b>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-[1200px] w-full text-sm">
            <thead className="bg-slate-100/70 text-slate-700">
              <tr>
                <th className="th whitespace-nowrap">N° Préstamo</th>
                <th className="th whitespace-nowrap">Cliente</th>
                <th className="th whitespace-nowrap">Teléfono</th>
                <th className="th whitespace-nowrap">Importe Adeudado</th>
                <th className="th whitespace-nowrap">Valor Recaudado</th>
                <th className="th whitespace-nowrap">Producto</th>
                <th className="th whitespace-nowrap">Segmento</th>
                <th className="th whitespace-nowrap">Fecha de Cobro</th>
                <th className="th whitespace-nowrap">Estado de Pago</th>
                <th className="th whitespace-nowrap">Collection Account</th>
                <th className="th text-center whitespace-nowrap">Operar</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((row) => (
                <tr
                  key={row.numero_prestamo}
                  className="border-t border-slate-200/60"
                >
                  <td className="td whitespace-nowrap">{row.numero_prestamo}</td>
                  <td className="td min-w-[180px]">{row.nombre_cliente}</td>
                  <td className="td whitespace-nowrap">{row.telefono_cliente}</td>
                  <td className="td whitespace-nowrap">{money(row.valor_deuda)}</td>

                  <td className="td">
                    {role === "admin" ? (
                      <InputEnterSave
                        initial={row.valor_recaudado ?? 0}
                        onEnter={async (val) =>
                          patchCaso(row.numero_prestamo, {
                            valor_recaudado: val,
                          })
                        }
                      />
                    ) : (
                      <span className="whitespace-nowrap">
                        {money(row.valor_recaudado)}
                      </span>
                    )}
                  </td>

                  <td className="td whitespace-nowrap">{row.producto}</td>
                  <td className="td whitespace-nowrap">{row.segmento ?? "-"}</td>
                  <td className="td whitespace-nowrap">
                    {new Date(row.fecha_cobro).toLocaleDateString()}
                  </td>

                  <td className="td whitespace-nowrap">
                    <button
                      disabled={
                        role !== "admin" || changingPago[row.numero_prestamo]
                      }
                      onClick={() => cambiarEstadoPago(row)}
                      className={[
                        "px-2 py-1 rounded-full text-xs font-medium disabled:opacity-50 whitespace-nowrap",
                        row.estado_pago === "pagado"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700",
                      ].join(" ")}
                    >
                      {changingPago[row.numero_prestamo]
                        ? "guardando..."
                        : row.estado_pago}
                    </button>
                  </td>

                  <td className="td min-w-[220px]">
                    {role === "admin" ? (
                      <select
                        className="w-full rounded-xl border border-slate-200/70 bg-white/70 px-3 py-2 text-sm"
                        value={row.collection_account ?? ""}
                        onChange={(e) =>
                          patchCaso(row.numero_prestamo, {
                            collection_account: e.target.value
                              ? Number(e.target.value)
                              : null,
                          })
                        }
                      >
                        <option value="">— Sin asignar —</option>
                        {users.map((u) => (
                          <option key={u.id} value={u.id}>
                            {u.username}
                          </option>
                        ))}
                      </select>
                    ) : (
                      row.collection_account ?? "—"
                    )}
                  </td>

                  <td className="td text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                      <button
                        className="text-sky-700 hover:underline disabled:opacity-50 whitespace-nowrap"
                        disabled={generating[row.numero_prestamo]}
                        onClick={() => generarLiga(row)}
                      >
                        {generating[row.numero_prestamo]
                          ? "Generando…"
                          : "Generar"}
                      </button>

                      <button
                        className="text-emerald-700 hover:underline disabled:opacity-50 whitespace-nowrap"
                        disabled={openingLiga[row.numero_prestamo]}
                        onClick={() => entrarUltimaLiga(row)}
                      >
                        {openingLiga[row.numero_prestamo]
                          ? "Abriendo..."
                          : "Entrar"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={11}
                    className="px-4 py-10 text-center text-sm text-slate-500"
                  >
                    No se encontraron casos con los filtros actuales.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function InputEnterSave({
  initial,
  onEnter,
}: {
  initial: number;
  onEnter: (value: number) => Promise<void>;
}) {
  const [val, setVal] = useState(String(initial));
  const [saving, setSaving] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 min-w-[140px]">
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={async (e) => {
          if (e.key !== "Enter") return;

          const num = Number(String(val).replace(/[^\d.-]/g, ""));
          if (!Number.isFinite(num)) return;

          setSaving(true);
          try {
            await onEnter(num);
          } finally {
            setSaving(false);
          }
        }}
        className="w-full sm:w-32 rounded-xl border border-slate-200/70 bg-white/70 px-3 py-2 text-sm"
      />
      <span className="text-xs text-slate-400 whitespace-nowrap">
        {saving ? "guardando…" : "ENTER"}
      </span>
    </div>
  );
}