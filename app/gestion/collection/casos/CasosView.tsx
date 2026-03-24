"use client";

import { useState, useEffect } from "react";
import CasosToolbar, { CasosFilters } from "./components/CasosToolbar";
import CasosTable from "./components/CasosTable";

export default function CasosView() {
  const role: "admin" | "user" = "admin";

  const [importOpen, setImportOpen] = useState(false);
  const [autoOpen, setAutoOpen] = useState(false);

  const [filters, setFilters] = useState<CasosFilters>({
    numero_prestamo: "",
    nombre_cliente: "",
    telefono_cliente: "",
    producto: "",
    estado_pago: "",
    collection_account: "",
  });

  // ✅ Reiniciar asignaciones
  const onResetAssign = async () => {
    if (role !== "admin") return;

    try {
      const res = await fetch("/api/collection/casos/reset-assign", {
        method: "POST",
        headers: { "x-role": "admin" },
        credentials: "include",
      });
      const j = await res.json().catch(() => null);
      if (!res.ok || !j?.ok) throw new Error(j?.error || "Error reiniciando");
      window.dispatchEvent(new Event("casos:reload"));
    } catch (e: any) {
      alert(e?.message || "Error");
    }
  };

  // ✅ Resegmentar (si ya tienes el endpoint; si no existe, puedes quitar el botón o crear este API)
  const resegment = async () => {
    if (role !== "admin") return;

    try {
      const res = await fetch("/api/collection/casos/resegment", {
        method: "POST",
        headers: { "x-role": "admin" },
        credentials: "include",
      });
      const j = await res.json().catch(() => null);
      if (!res.ok || !j?.ok) throw new Error(j?.error || "Error resegmentando");
      window.dispatchEvent(new Event("casos:reload"));
    } catch (e: any) {
      alert(e?.message || "Error");
    }
  };

  // ✅ Borrar base
  const wipeDb = async () => {
    if (role !== "admin") return;

    try {
      const res = await fetch("/api/collection/casos/wipe", {
        method: "POST",
        headers: { "x-role": "admin" },
        credentials: "include",
      });
      const j = await res.json().catch(() => null);
      if (!res.ok || !j?.ok) throw new Error(j?.error || "Error borrando base");
      window.dispatchEvent(new Event("casos:reload"));
    } catch (e: any) {
      alert(e?.message || "Error");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Casos</h1>
          <p className="text-slate-500 mt-1">
            Gestión y seguimiento de casos importados.
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <CasosToolbar
        filters={filters}
        onChange={setFilters}
        onOpenImport={() => setImportOpen(true)}
        onOpenAutoAssign={() => setAutoOpen(true)} // ✅ correcto (antes tenías setAutoAssignOpen)
        onResetAssign={onResetAssign}              // ✅ correcto (antes tenías resetAssign)
        onResegment={resegment}                    // ✅
        onWipeDb={wipeDb}                          // ✅
        role={role}
      />

      {/* Tabla (con filtros) */}
      <CasosTable role={role} filters={filters} />

      {/* Modales */}
      {importOpen && (
        <ImportModal
          onClose={() => setImportOpen(false)}
          onDone={() => window.dispatchEvent(new Event("casos:reload"))}
        />
      )}

      {autoOpen && (
        <AutoAssignModal
          onClose={() => setAutoOpen(false)}
          onDone={() => window.dispatchEvent(new Event("casos:reload"))}
        />
      )}
    </div>
  );
}

/* ----------------------- MODAL IMPORT ----------------------- */

function ImportModal({
  onClose,
  onDone,
}: {
  onClose: () => void;
  onDone: () => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!file) {
      setMsg("Selecciona un archivo CSV o Excel.");
      return;
    }

    setLoading(true);
    setMsg(null);

    try {
      const form = new FormData();
      form.append("file", file);

      const res = await fetch("/api/collection/casos/import", {
        method: "POST",
        body: form,
      });

      const j = await res.json().catch(() => null);

      if (!res.ok || !j?.ok) {
        throw new Error(j?.error || "Error al importar");
      }

      setMsg(`✅ Importado: ${j.imported ?? 0} filas`);
      setFile(null);
      onDone();
    } catch (e: any) {
      setMsg(`❌ ${e?.message || "Error inesperado"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      <button
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
        aria-label="Cerrar"
      />

      <div className="relative w-full max-w-xl rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-[0_20px_60px_rgba(15,23,42,0.20)] p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Importar Casos
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Sube un archivo <b>CSV</b> o <b>Excel</b>.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-2xl border border-slate-200/70 bg-white/60 px-3 py-2 text-sm hover:bg-white transition"
          >
            Cerrar
          </button>
        </div>

        <div className="mt-5 space-y-3">
          <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-4">
            <div className="text-sm font-medium text-slate-800">Archivo</div>
            <p className="text-xs text-slate-500 mt-1">
              Formatos: .csv, .xlsx, .xls
            </p>

            <input
              type="file"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              className="mt-3 block w-full text-sm text-slate-700 file:mr-4 file:rounded-2xl file:border file:border-slate-200/70 file:bg-white/70 file:px-4 file:py-2 file:text-sm file:font-medium hover:file:bg-white"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />

            {file && (
              <div className="mt-3 text-xs text-slate-600">
                Seleccionado:{" "}
                <span className="font-medium">{file.name}</span>
              </div>
            )}
          </div>

          {msg && (
            <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-3 text-sm text-slate-700">
              {msg}
            </div>
          )}

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              onClick={onClose}
              className="rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-2 text-sm hover:bg-white transition"
              disabled={loading}
            >
              Cancelar
            </button>

            <button
              onClick={handleUpload}
              disabled={loading}
              className="rounded-2xl px-4 py-2 text-sm font-semibold bg-gradient-to-r from-sky-700 to-indigo-700 text-white hover:from-sky-800 hover:to-indigo-800 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {loading ? "Subiendo..." : "Subir"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------- MODAL AUTO ASSIGN ----------------------- */

type AssignUser = { id: number; username: string };

function AutoAssignModal({
  onClose,
  onDone,
}: {
  onClose: () => void;
  onDone: () => void;
}) {
  const [users, setUsers] = useState<AssignUser[]>([]);
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/api/collection/assignable-users", {
          cache: "no-store",
          credentials: "include",
        });
        const j = await r.json().catch(() => null);

        if (j?.ok && Array.isArray(j.users)) {
          const u = j.users
            .map((x: any) => ({
              id: Number(x.id),
              username: String(x.username ?? ""),
            }))
            .filter((x: any) => Number.isFinite(x.id) && x.username);

          setUsers(u);

          const map: Record<number, boolean> = {};
          u.forEach((x: any) => (map[x.id] = true));
          setChecked(map);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const toggle = (id: number) =>
    setChecked((p) => ({ ...p, [id]: !p[id] }));

  const allSelected = users.length > 0 && users.every((u) => !!checked[u.id]);
  const someSelected = users.some((u) => !!checked[u.id]) && !allSelected;

  const toggleAll = () => {
    setChecked((prev) => {
      const next: Record<number, boolean> = { ...prev };
      const target = !allSelected;
      users.forEach((u) => (next[u.id] = target));
      return next;
    });
  };

  const run = async () => {
    const userIds = Object.entries(checked)
      .filter(([, v]) => v)
      .map(([id]) => Number(id))
      .filter((n) => Number.isInteger(n) && n > 0);

    if (userIds.length === 0) {
      setMsg("Selecciona al menos 1 asesor.");
      return;
    }

    setLoading(true);
    setMsg(null);

    try {
      const res = await fetch("/api/collection/casos/auto-assign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ userIds }),
      });

      const j = await res.json().catch(() => null);
      if (!res.ok || !j?.ok) throw new Error(j?.error || "Error asignando");

      setMsg(`✅ Asignados: ${j.assigned ?? 0}`);
      onDone();
      onClose();
    } catch (e: any) {
      setMsg(`❌ ${e?.message || "Error"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      <button
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
        aria-label="Cerrar"
      />

      <div className="relative w-full max-w-xl rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-[0_20px_60px_rgba(15,23,42,0.20)] p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Asignación automática
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Selecciona asesores. Se asigna equitativamente (round-robin).
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-2xl border border-slate-200/70 bg-white/60 px-3 py-2 text-sm hover:bg-white transition"
            type="button"
          >
            Cerrar
          </button>
        </div>

        <div className="mt-5 space-y-3">
          <label className="flex items-center gap-3 p-2 rounded-xl bg-white/50 border border-slate-200/60">
            <input
              type="checkbox"
              checked={allSelected}
              ref={(el) => {
                if (el) el.indeterminate = someSelected;
              }}
              onChange={toggleAll}
              className="h-4 w-4"
            />
            <span className="text-sm font-medium text-slate-800">
              Seleccionar todos
            </span>
            <span className="ml-auto text-xs text-slate-500">
              {users.filter((u) => checked[u.id]).length}/{users.length}
            </span>
          </label>

          <div className="max-h-64 overflow-y-auto rounded-2xl border border-slate-200/70 bg-white/60 p-3">
            {users.length === 0 ? (
              <div className="text-sm text-slate-500 p-2">No hay asesores.</div>
            ) : (
              <div className="space-y-2">
                {users.map((u) => (
                  <label
                    key={u.id}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/70 transition cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={!!checked[u.id]}
                      onChange={() => toggle(u.id)}
                      className="h-4 w-4"
                    />
                    <span className="text-sm text-slate-800">{u.username}</span>
                    <span className="ml-auto text-xs text-slate-500">#{u.id}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {msg && (
            <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-3 text-sm text-slate-700">
              {msg}
            </div>
          )}

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              onClick={onClose}
              className="rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-2 text-sm hover:bg-white transition"
              disabled={loading}
              type="button"
            >
              Cancelar
            </button>

            <button
              onClick={run}
              disabled={loading}
              className="rounded-2xl px-4 py-2 text-sm font-semibold bg-gradient-to-r from-sky-700 to-indigo-700 text-white hover:from-sky-800 hover:to-indigo-800 disabled:opacity-60 disabled:cursor-not-allowed transition"
              type="button"
            >
              {loading ? "Asignando..." : "Asignar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
