
"use client";

import { useMemo, useState } from "react";
import type { AnyItem, ListKey } from "../types";

type ProductItem = {
  id: number;
  name?: string | null;
  url?: string | null;
};

function isProductos(listKey: ListKey) {
  return (
    listKey === "producto_mexico" ||
    listKey === "producto_colombia" ||
    listKey === "producto_peru"
  );
}

export default function AplicacionesList({
  items,
  loading,
  listKey,
  onRemove,
  onEdit,
}: {
  items: AnyItem[];
  loading: boolean;
  listKey: ListKey;
  onRemove: (id: number) => void;
  onEdit: (id: number, payload: any) => Promise<void>;
}) {
  const canEditProduct = useMemo(() => isProductos(listKey), [listKey]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [draftName, setDraftName] = useState("");
  const [draftUrl, setDraftUrl] = useState("");

  function startEditProduct(it: ProductItem) {
    setEditingId(it.id);
    setDraftName(it.name ?? "");
    setDraftUrl(it.url ?? "");
  }

  function cancel() {
    setEditingId(null);
    setDraftName("");
    setDraftUrl("");
  }

  async function save(id: number) {
    const name = draftName.trim();
    const url = draftUrl.trim();

    if (!name || !url) {
      alert("Completa el nombre y la URL de imagen.");
      return;
    }

    await onEdit(id, {
      name,
      url,
    });

    cancel();
  }

  if (loading && items.length === 0) {
    return (
      <div className="p-4 space-y-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="
              h-20
              rounded-2xl
              border border-slate-200/60
              bg-white/60
              animate-pulse
            "
          />
        ))}
      </div>
    );
  }

  return (
    <div className="p-3 sm:p-4">
      {items.length > 0 ? (
        <div className="space-y-2">
          {items.map((it: any) => {
            const editing = editingId === it.id;

            if (canEditProduct) {
              const pit = it as ProductItem;
              const url = String(pit.url ?? "");

              return (
                <div
                  key={pit.id}
                  className={[
                    "group rounded-2xl border transition-all",
                    editing
                      ? "border-slate-300 bg-white shadow-sm"
                      : "border-slate-200/70 bg-white/60 hover:bg-white hover:border-slate-300 hover:shadow-sm",
                  ].join(" ")}
                >
                  <div className="p-3 sm:p-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* IMAGEN */}
                      <div
                        className="
                          relative
                          w-16 h-16
                          sm:w-20 sm:h-20
                          shrink-0
                          rounded-2xl
                          overflow-hidden
                          border border-slate-200
                          bg-slate-50
                          flex items-center justify-center
                        "
                      >
                        {url ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={url}
                            alt={pit.name || "Producto"}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const img = e.currentTarget;

                              img.style.display = "none";

                              const fallback =
                                img.parentElement?.querySelector(
                                  "[data-image-fallback]"
                                ) as HTMLElement | null;

                              if (fallback) {
                                fallback.style.display = "flex";
                              }
                            }}
                          />
                        ) : null}

                        <div
                          data-image-fallback
                          className={[
                            "absolute inset-0 flex-col items-center justify-center gap-1",
                            url ? "hidden" : "flex",
                          ].join(" ")}
                        >
                          <svg
                            className="w-6 h-6 text-slate-300"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <rect
                              x="3"
                              y="3"
                              width="18"
                              height="18"
                              rx="2"
                            />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="m21 15-5-5L5 21" />
                          </svg>

                          <span className="text-[9px] font-medium text-slate-400 uppercase">
                            Sin imagen
                          </span>
                        </div>
                      </div>

                      {/* CONTENIDO */}
                      <div className="flex-1 min-w-0">
                        {!editing ? (
                          <div className="space-y-2">
                            <div>
                              <h3 className="text-sm sm:text-base font-semibold text-slate-900 break-words">
                                {pit.name || "Sin nombre"}
                              </h3>

                              <span
                                className="
                                  inline-flex
                                  mt-1
                                  rounded-full
                                  bg-slate-100
                                  px-2 py-0.5
                                  text-[10px]
                                  font-medium
                                  text-slate-500
                                "
                              >
                                Producto
                              </span>
                            </div>

                            <div className="flex items-start gap-2 text-xs text-slate-500">
                              <svg
                                className="w-4 h-4 shrink-0 mt-0.5 text-slate-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                              </svg>

                              <span className="break-all line-clamp-2">
                                {url || "Sin URL"}
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <input
                              value={draftName}
                              onChange={(e) => setDraftName(e.target.value)}
                              className="
                                w-full
                                rounded-xl
                                border border-slate-200
                                bg-white
                                px-3 py-2
                                text-sm
                                text-slate-900
                                outline-none
                                transition
                                focus:border-slate-400
                                focus:ring-2
                                focus:ring-slate-900/5
                              "
                              placeholder="Nombre del producto"
                              autoFocus
                            />

                            <input
                              value={draftUrl}
                              onChange={(e) => setDraftUrl(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  save(pit.id);
                                }

                                if (e.key === "Escape") {
                                  cancel();
                                }
                              }}
                              className="
                                w-full
                                rounded-xl
                                border border-slate-200
                                bg-white
                                px-3 py-2
                                text-sm
                                text-slate-900
                                outline-none
                                transition
                                focus:border-slate-400
                                focus:ring-2
                                focus:ring-slate-900/5
                              "
                              placeholder="URL de imagen"
                            />
                          </div>
                        )}
                      </div>

                      {/* ACCIONES DESKTOP */}
                      <div className="hidden sm:flex items-center gap-1 shrink-0">
                        {!editing ? (
                          <button
                            type="button"
                            onClick={() => startEditProduct(pit)}
                            disabled={loading}
                            className="
                              inline-flex
                              items-center
                              gap-1.5
                              rounded-xl
                              px-3 py-2
                              text-xs
                              font-medium
                              text-slate-600
                              hover:bg-slate-100
                              hover:text-slate-900
                              transition
                              disabled:opacity-50
                            "
                          >
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M12 20h9" />
                              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                            </svg>
                            Editar
                          </button>
                        ) : (
                          <>
                            <button
                              type="button"
                              onClick={() => save(pit.id)}
                              disabled={loading}
                              className="
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-xl
                                bg-slate-900
                                px-3 py-2
                                text-xs
                                font-medium
                                text-white
                                hover:bg-slate-800
                                transition
                                disabled:opacity-50
                              "
                            >
                              Guardar
                            </button>

                            <button
                              type="button"
                              onClick={cancel}
                              disabled={loading}
                              className="
                                rounded-xl
                                px-3 py-2
                                text-xs
                                font-medium
                                text-slate-500
                                hover:bg-slate-100
                                transition
                                disabled:opacity-50
                              "
                            >
                              Cancelar
                            </button>
                          </>
                        )}

                        <button
                          type="button"
                          onClick={() => onRemove(pit.id)}
                          disabled={loading}
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-xl
                            px-3 py-2
                            text-xs
                            font-medium
                            text-rose-600
                            hover:bg-rose-50
                            transition
                            disabled:opacity-50
                          "
                        >
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M3 6h18" />
                            <path d="M8 6V4h8v2" />
                            <path d="M19 6l-1 14H6L5 6" />
                            <path d="M10 11v5" />
                            <path d="M14 11v5" />
                          </svg>
                          Eliminar
                        </button>
                      </div>
                    </div>

                    {/* ACCIONES MOBILE */}
                    <div className="flex sm:hidden items-center gap-2 mt-3 pt-3 border-t border-slate-100">
                      {!editing ? (
                        <button
                          type="button"
                          onClick={() => startEditProduct(pit)}
                          disabled={loading}
                          className="
                            flex-1
                            rounded-xl
                            border border-slate-200
                            bg-white
                            px-3 py-2
                            text-xs
                            font-medium
                            text-slate-700
                            hover:bg-slate-50
                            transition
                          "
                        >
                          Editar
                        </button>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() => save(pit.id)}
                            disabled={loading}
                            className="
                              flex-1
                              rounded-xl
                              bg-slate-900
                              px-3 py-2
                              text-xs
                              font-medium
                              text-white
                              transition
                              disabled:opacity-50
                            "
                          >
                            Guardar
                          </button>

                          <button
                            type="button"
                            onClick={cancel}
                            disabled={loading}
                            className="
                              flex-1
                              rounded-xl
                              border border-slate-200
                              bg-white
                              px-3 py-2
                              text-xs
                              font-medium
                              text-slate-600
                              transition
                            "
                          >
                            Cancelar
                          </button>
                        </>
                      )}

                      <button
                        type="button"
                        onClick={() => onRemove(pit.id)}
                        disabled={loading}
                        className="
                          rounded-xl
                          border border-rose-100
                          bg-rose-50
                          px-3 py-2
                          text-xs
                          font-medium
                          text-rose-600
                          transition
                        "
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={it.id}
                className="
                  group
                  flex items-center gap-3
                  rounded-2xl
                  border border-slate-200/70
                  bg-white/60
                  px-4 py-3
                  transition
                  hover:bg-white
                  hover:border-slate-300
                  hover:shadow-sm
                "
              >
                <div
                  className="
                    w-9 h-9
                    shrink-0
                    rounded-xl
                    bg-slate-100
                    flex items-center justify-center
                    text-xs
                    font-semibold
                    text-slate-500
                  "
                >
                  {items.indexOf(it) + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-slate-800 break-words">
                    {it.value || "Sin valor"}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(it.id)}
                  disabled={loading}
                  className="
                    shrink-0
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-xl
                    px-3 py-2
                    text-xs
                    font-medium
                    text-rose-600
                    hover:bg-rose-50
                    transition
                    disabled:opacity-50
                  "
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 6h18" />
                    <path d="M8 6V4h8v2" />
                    <path d="M19 6l-1 14H6L5 6" />
                    <path d="M10 11v5" />
                    <path d="M14 11v5" />
                  </svg>

                  <span className="hidden sm:inline">Eliminar</span>
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          className="
            rounded-2xl
            border border-dashed border-slate-200
            bg-white/40
            px-6 py-12
            text-center
          "
        >
          <div
            className="
              mx-auto
              w-12 h-12
              rounded-2xl
              bg-slate-100
              flex
              items-center
              justify-center
            "
          >
            {canEditProduct ? (
              <svg
                className="w-6 h-6 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h10" />
              </svg>
            )}
          </div>

          <h3 className="mt-3 text-sm font-semibold text-slate-800">
            Sin elementos todavía
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            {canEditProduct
              ? "Agrega un producto utilizando el formulario superior."
              : "Agrega un valor utilizando el formulario superior."}
          </p>
        </div>
      )}

      {loading && items.length > 0 && (
        <div className="flex items-center justify-center gap-2 py-4 text-xs text-slate-400">
          <span
            className="
              w-4 h-4
              rounded-full
              border-2
              border-slate-300
              border-t-slate-700
              animate-spin
            "
          />
          Actualizando…
        </div>
      )}
    </div>
  );
}
