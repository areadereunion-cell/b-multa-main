"use client";

import { useEffect, useMemo, useState } from "react";

import Sidebar from "../components/Sidebar";

type ReportRow = {
  date: string; // "YYYY-MM-DD"
  file_path: string; // "/reports/reporte_clientes_YYYY-MM-DD.xlsx"
};

export default function ReportesPage() {
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [items, setItems] = useState<ReportRow[]>([]);
  const [runTime, setRunTime] = useState("22:00");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string>("");

  async function loadAll() {
    setStatus("");

    const r1 = await fetch("/api/reportes/list", { cache: "no-store" });
    const j1 = await r1.json();
    if (j1.ok) setItems(j1.data || []);

    const r2 = await fetch("/api/reportes/schedule", { cache: "no-store" });
    const j2 = await r2.json();
    if (j2.run_time) setRunTime(String(j2.run_time).slice(0, 5));
  }

  useEffect(() => {
    loadAll();
  }, []);

  const selectedExists = useMemo(
    () => items.some((x) => x.date === date),
    [items, date]
  );

  const selectedUrl = useMemo(() => {
    const fromDb = items.find((x) => x.date === date)?.file_path;
    return fromDb || `/reports/reporte_clientes_${date}.xlsx`;
  }, [items, date]);

  async function onGenerateManual() {
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch(
        `/api/reportes/manual?date=${encodeURIComponent(date)}`,
        {
          method: "POST",
          headers: { "x-role": "admin" },
        }
      );
      const j = await res.json();
      if (!j.ok) throw new Error(j.error || "No se pudo generar el reporte");

      setStatus(
        `✅ Reporte generado y enviado por correo: ${j.url || j.fileName || ""}`
      );
      await loadAll();
    } catch (e: any) {
      setStatus(`❌ ${e?.message || "Error"}`);
    } finally {
      setLoading(false);
    }
  }

  async function onSaveSchedule() {
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("/api/reportes/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-role": "admin",
        },
        body: JSON.stringify({ run_time: runTime }),
      });
      const j = await res.json();
      if (!j.ok) throw new Error(j.error || "No se pudo guardar");
      setStatus(`✅ Hora guardada: ${runTime}`);
    } catch (e: any) {
      setStatus(`❌ ${e?.message || "Error"}`);
    } finally {
      setLoading(false);
    }
  }

  async function onRefresh() {
    setLoading(true);
    setStatus("");
    try {
      await loadAll();
      setStatus("✅ Lista actualizada");
    } catch {
      setStatus("❌ No se pudo actualizar");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Layout con sidebar */}
      <div className="flex min-h-screen">
        
          <Sidebar />


        {/* Contenido */}
        <main className="flex-1 bg-slate-100">
          {/* Fondo suave tipo dashboard */}
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-6xl">
              {/* Header */}
              <div className="mb-5">
                <h1 className="text-2xl font-bold text-slate-900">
                  Reportes diarios
                </h1>
                <p className="text-sm text-slate-600">
                  Generación, descarga y programación automática de reportes.
                </p>
              </div>

              {/* Panel acciones */}
              <section className="rounded-3xl bg-white/80 backdrop-blur border border-slate-200 shadow-sm p-4 sm:p-5 space-y-3">
                <div className="flex flex-col lg:flex-row lg:items-end gap-3 lg:gap-4">
                  <div className="flex flex-wrap items-end gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-slate-600">
                        Fecha
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="h-10 w-[170px] rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-900/10"
                      />
                    </div>

                    <a
                      href={selectedUrl}
                      download
                      aria-disabled={!selectedExists}
                      className={[
                        "h-10 inline-flex items-center justify-center rounded-2xl px-4 text-sm font-semibold transition select-none",
                        selectedExists
                          ? "bg-slate-900 text-white hover:bg-slate-800"
                          : "bg-slate-200 text-slate-500 pointer-events-none",
                      ].join(" ")}
                      title={
                        selectedExists ? "Descargar" : "Primero genera el reporte"
                      }
                    >
                      Descargar
                    </a>

                    <button
                      onClick={onGenerateManual}
                      disabled={loading}
                      className="h-10 rounded-2xl px-4 text-sm font-semibold bg-indigo-700 text-white hover:bg-indigo-800 transition disabled:opacity-60"
                      type="button"
                    >
                      {loading ? "Generando..." : "Generar manual (prueba)"}
                    </button>

                    <button
                      onClick={onRefresh}
                      disabled={loading}
                      className="text-black h-10 rounded-2xl px-4 text-sm font-semibold bg-white border border-slate-200 hover:bg-slate-50 transition disabled:opacity-60"
                      type="button"
                    >
                      {loading ? "..." : "Actualizar lista"}
                    </button>
                  </div>

                  <div className="lg:ml-auto text-xs text-slate-600">
                    {selectedExists
                      ? "✅ Hay reporte para esta fecha"
                      : "ℹ️ No existe reporte aún"}
                  </div>
                </div>

                {status && (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    {status}
                  </div>
                )}
              </section>

              {/* Horario 
              <section className="mt-4 rounded-3xl bg-white/80 backdrop-blur border border-slate-200 shadow-sm p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm font-semibold text-slate-800">
                    Horario automático
                  </div>
                  <div className="text-xs text-slate-500">
                    (cron revisa cada minuto)
                  </div>
                </div> 

                <div className="flex flex-col sm:flex-row sm:items-end gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-slate-600">
                      Hora (HH:MM)
                    </label>
                    <input
                      type="time"
                      value={runTime}
                      onChange={(e) => setRunTime(e.target.value)}
                      className="h-10 w-[170px] rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-sky-700/15"
                    />
                  </div>

                  <button
                    onClick={onSaveSchedule}
                    disabled={loading}
                    className="h-10 rounded-2xl px-4 text-sm font-semibold bg-sky-700 text-white hover:bg-sky-800 transition disabled:opacity-60"
                    type="button"
                  >
                    Guardar hora
                  </button>

                  <div className="text-xs text-slate-600 sm:ml-2">
                    Cambia a una hora cercana para probar.
                  </div>
                </div>
              </section>*/}

              {/* Lista */}
              <section className="mt-4 rounded-3xl bg-white/80 backdrop-blur border border-slate-200 shadow-sm p-4 sm:p-5">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="text-sm font-semibold text-slate-800">
                    Reportes disponibles
                  </div>
                  <div className="text-xs text-slate-600">
                    Total: {items.length}
                  </div>
                </div>

                {items.length === 0 ? (
                  <div className="text-sm text-slate-600">
                    Aún no hay reportes. Usa “Generar manual (prueba)”.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {items.map((r) => (
                      <a
                        key={r.file_path}
                        href={r.file_path}
                        download
                        className="group rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm hover:bg-slate-50 transition"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="font-semibold text-slate-900">
                            {r.date}
                          </div>
                          <span className="text-[11px] text-slate-500 group-hover:text-slate-700">
                            Descargar
                          </span>
                        </div>
                        <div className="mt-1 tex    t-xs text-slate-600 break-all">
                          {r.file_path}
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </section>
            </div>
          </div>
        </main>
      </div>


    </div>
  );
}
