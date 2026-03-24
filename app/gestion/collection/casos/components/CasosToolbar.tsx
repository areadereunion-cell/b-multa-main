"use client";

import { useMemo, useState } from "react";

export type CasosFilters = {
  numero_prestamo: string;
  nombre_cliente: string;
  telefono_cliente: string;
  producto: string;
  estado_pago: "" | "pendiente" | "pagado";
  collection_account: string;
};

export default function CasosToolbar({
  filters,
  onChange,
  onOpenImport,
  onOpenAutoAssign,
  onResetAssign,
  onResegment,
  onWipeDb, // ✅ NUEVO
  role,
}: {
  filters: CasosFilters;
  onChange: (next: CasosFilters) => void;
  onOpenImport: () => void;
  onOpenAutoAssign: () => void;
  onResetAssign: () => void;
  onResegment: () => Promise<void>;
  onWipeDb: () => Promise<void>; // ✅ NUEVO
  role: "admin" | "user";
}) {
  const set = (k: keyof CasosFilters, v: string) => onChange({ ...filters, [k]: v });

  const anyFilter = useMemo(
    () => Object.values(filters).some((v) => String(v).trim() !== ""),
    [filters]
  );

  const [dangerBusy, setDangerBusy] = useState<"wipe" | "resegment" | null>(null);

  async function confirmAndRun(kind: "wipe" | "resegment") {
    const msg =
      kind === "wipe"
        ? "⚠️ Esto borrará la base de casos. ¿Seguro que deseas continuar?"
        : "⚠️ Esto resegmentará/recalculará asignaciones. ¿Continuar?";
    if (!confirm(msg)) return;

    try {
      setDangerBusy(kind);
      if (kind === "wipe") await onWipeDb();
      else await onResegment();
    } finally {
      setDangerBusy(null);
    }
  }

  return (
    <div
      className="
        rounded-3xl
        bg-white/55 backdrop-blur-xl
        border border-slate-200/60
        shadow-[0_8px_30px_rgba(15,23,42,0.06)]
        p-4
        space-y-4
      "
    >
      {/* acciones */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm font-medium text-slate-700">Filtros</div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={onOpenImport}
            className="rounded-2xl px-4 py-2 text-sm font-semibold bg-gradient-to-r from-sky-700 to-indigo-700 text-white hover:from-sky-800 hover:to-indigo-800 transition"
            type="button"
          >
            Importar
          </button>

          {role === "admin" && (
            <>
              <button
                onClick={onOpenAutoAssign}
                className="rounded-2xl px-4 py-2 text-sm font-semibold bg-white/70 border border-slate-200/70 hover:bg-white transition"
                type="button"
              >
                Asignar automático
              </button>

              <button
                onClick={onResetAssign}
                className="rounded-2xl px-4 py-2 text-sm font-semibold bg-white/70 border border-slate-200/70 hover:bg-white transition"
                type="button"
              >
                Reiniciar
              </button>

              
              {/* ✅ Botón borrar base (NUEVO) */}
              <button
                onClick={() => confirmAndRun("wipe")}
                disabled={dangerBusy !== null}
                className="rounded-2xl px-4 py-2 text-sm font-semibold bg-rose-600 text-white hover:bg-rose-700 transition disabled:opacity-60"
                type="button"
                title="Borra toda la base de casos"
              >
                {dangerBusy === "wipe" ? "Borrando..." : "Borrar base"}
              </button>
            </>
          )}

          {anyFilter && (
            <button
              onClick={() =>
                onChange({
                  numero_prestamo: "",
                  nombre_cliente: "",
                  telefono_cliente: "",
                  producto: "",
                  estado_pago: "",
                  collection_account: "",
                })
              }
              className="rounded-2xl px-4 py-2 text-sm bg-white/70 border border-slate-200/70 hover:bg-white transition"
              type="button"
            >
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      {/* filtros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
        <input
          value={filters.numero_prestamo}
          onChange={(e) => set("numero_prestamo", e.target.value)}
          placeholder="N° préstamo"
          className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2 text-sm"
        />

        <input
          value={filters.nombre_cliente}
          onChange={(e) => set("nombre_cliente", e.target.value)}
          placeholder="Cliente"
          className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2 text-sm"
        />

        <input
          value={filters.telefono_cliente}
          onChange={(e) => set("telefono_cliente", e.target.value)}
          placeholder="Teléfono"
          className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2 text-sm"
        />

        <input
          value={filters.producto}
          onChange={(e) => set("producto", e.target.value)}
          placeholder="Producto"
          className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2 text-sm"
        />

        <select
          value={filters.estado_pago}
          onChange={(e) => set("estado_pago", e.target.value)}
          className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2 text-sm"
        >
          <option value="">Estado (todos)</option>
          <option value="pendiente">pendiente</option>
          <option value="pagado">pagado</option>
        </select>

        <input
          value={filters.collection_account}
          onChange={(e) => set("collection_account", e.target.value)}
          placeholder="Collection (id / user)"
          className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2 text-sm"
        />
      </div>
    </div>
  );
}
