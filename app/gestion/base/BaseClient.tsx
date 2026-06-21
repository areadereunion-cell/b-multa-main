"use client";

import { useEffect, useMemo, useState } from "react";

type Row = {
  id: number;
  asesor_nombre?: string | null;
  subproducto?: string;
  cuenta_bancaria?: string;
  monto?: string | number | null;
  importe_pagar?: string | number | null;
  fecha_vencimiento?: string | null;
  dias_vencidos?: number | null;

  url?: string | null;
  logo_url?: string | null;

  uuid?: string | null;
  token?: string | null;
  public_id?: string | null;

  link?: string | null;
  pagado?: boolean;
};

const normalizeUrl = (u: any) => {
  if (!u) return null;

  let s = String(u)
    .trim()
    .replaceAll("\\", "/");

  if (/^https?:\/\//i.test(s))
    return s;

  if (
    s.startsWith(
      "public/uploads/"
    )
  )
    s = s.replace(
      "public/",
      ""
    );

  if (s.startsWith("uploads/"))
    s = `/${s}`;

  if (s.startsWith("/"))
    return s;

  return `/${s}`;
};

const PUBLIC_BASE_PATH = "/pay";

function buildPublicLink(
  row: Row
) {
  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "";

  if (row.link) {
    try {
      if (
        /^https?:\/\//i.test(
          row.link
        )
      ) {
        const u = new URL(
          row.link
        );

        return `${origin}${u.pathname}${u.search}${u.hash}`;
      }

      const rel =
        row.link.startsWith("/")
          ? row.link
          : `/${row.link}`;

      return `${origin}${rel}`;
    } catch {
      const rel =
        row.link.startsWith("/")
          ? row.link
          : `/${row.link}`;

      return `${origin}${rel}`;
    }
  }

  const code =
    row.uuid?.trim() ||
    row.token?.trim() ||
    row.public_id?.trim() ||
    null;

  if (code)
    return `${origin}${PUBLIC_BASE_PATH}/${encodeURIComponent(
      code
    )}`;

  return `${origin}${PUBLIC_BASE_PATH}/${encodeURIComponent(
    String(row.id)
  )}`;
}

export default function BaseClient() {
  const [rows, setRows] =
    useState<Row[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [open, setOpen] =
    useState(false);

  const [selected, setSelected] =
    useState<Row | null>(null);

  const [toast, setToast] =
    useState<string>("");

  async function fetchList() {
    setLoading(true);

    try {
      const res = await fetch(
        "/api/bases-pago/listar",
        {
          cache: "no-store",
        }
      );

      const json =
        await res.json();

      setRows(
        Array.isArray(json)
          ? json
          : []
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  async function ver(id: number) {
    const res = await fetch(
      `/api/bases-pago/ver/${id}`,
      {
        cache: "no-store",
      }
    );

    const json =
      await res.json();

    if (!res.ok) {
      setToast(
        json?.error ||
          "Error al ver"
      );

      setTimeout(
        () => setToast(""),
        2000
      );

      return;
    }

    setSelected(json);
    setOpen(true);
  }

  async function borrarTodo() {
    const ok = confirm(
      "¿Borrar TODAS las plantillas temporales?"
    );

    if (!ok) return;

    const res = await fetch(
      "/api/bases-pago/borrar-todo",
      {
        method: "DELETE",
      }
    );

    const json =
      await res
        .json()
        .catch(() => ({}));

    if (!res.ok) {
      setToast(
        (json as any)?.error ||
          "No se pudo borrar todo"
      );

      setTimeout(
        () => setToast(""),
        2000
      );

      return;
    }

    setToast("Borradas ✔");

    setTimeout(
      () => setToast(""),
      2000
    );

    setOpen(false);
    setSelected(null);

    await fetchList();
  }

  async function copiarLink(
    row: Row
  ) {
    const link =
      buildPublicLink(row);

    await navigator.clipboard.writeText(
      link
    );

    setToast("Link copiado ✔");

    setTimeout(
      () => setToast(""),
      1500
    );
  }

  const title = useMemo(
    () =>
      "Bases (plantillas_temporales)",
    []
  );

  return (
    <div className="min-h-screen text-slate-900 bg-gradient-to-b from-slate-50 via-sky-50/60 to-slate-100 px-6 sm:px-10 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              {title}
            </h1>

            <p className="text-slate-500 mt-2">
              Listado de ligas de pago
              guardadas.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchList}
              className="
                px-4 py-3 rounded-2xl
                bg-white/60 backdrop-blur-xl
                border border-slate-200/70
                text-slate-700 font-medium
                shadow-sm
                hover:bg-white
                transition
              "
              type="button"
            >
              Refrescar
            </button>

            <button
              onClick={borrarTodo}
              className="
                px-4 py-3 rounded-2xl
                bg-red-600/90 text-white font-semibold
                shadow-sm
                hover:bg-red-700
                transition
              "
              type="button"
            >
              Borrar todo
            </button>
          </div>
        </div>

        {toast && (
          <div
            className="
              mt-5
              rounded-2xl
              bg-white/60 backdrop-blur-xl
              border border-slate-200/60
              px-4 py-3
              text-slate-700
              shadow-sm
            "
          >
            {toast}
          </div>
        )}

        <section
          className="
            mt-8
            rounded-3xl
            bg-white/55 backdrop-blur-xl
            border border-slate-200/60
            shadow-[0_8px_30px_rgba(15,23,42,0.06)]
            overflow-hidden
          "
        >
          <div className="p-4 sm:p-5 border-b border-slate-200/60 flex items-center justify-between">
            <div className="font-semibold text-slate-900">
              Plantillas
            </div>

            <span className="text-sm text-slate-500">
              {rows.length} registros
            </span>
          </div>

          {loading ? (
            <div className="p-6 text-slate-500">
              Cargando…
            </div>
          ) : rows.length === 0 ? (
            <div className="p-6 text-slate-500">
              No hay registros.
            </div>
          ) : (
            <div className="divide-y divide-slate-200/60">
              {rows.map((r) => {
                const logo =
                  r.logo_url ||
                  r.url ||
                  null;

                const logoSrc =
                  logo
                    ? normalizeUrl(
                        logo
                      )
                    : null;

                return (
                  <div
                    key={r.id}
                    className="
                      p-4 sm:p-5
                      flex items-center justify-between gap-4
                      hover:bg-white/50 transition
                    "
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="
                          w-12 h-12 rounded-2xl
                          bg-white/60
                          border border-slate-200/60
                          shadow-sm
                          overflow-hidden
                          flex items-center justify-center
                        "
                      >
                        {logoSrc ? (
                          <img
                            src={logoSrc}
                            alt="logo"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-xs text-slate-500">
                            IMG
                          </div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="font-semibold text-slate-900 truncate">
                          {r.subproducto ||
                            "—"}
                        </div>

                        <div className="text-sm text-slate-600 truncate">
                          Cuenta:{" "}
                          {r.cuenta_bancaria ||
                            "—"}
                        </div>

                        <div className="text-xs text-slate-500 truncate">
                          Asesor:{" "}
                          {r.asesor_nombre ||
                            "—"}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          copiarLink(r)
                        }
                        className="
                          px-3 py-2 rounded-xl
                          bg-emerald-600/90 text-white text-sm font-semibold
                          shadow-sm
                          hover:bg-emerald-700
                          transition
                        "
                        type="button"
                      >
                        Link
                      </button>

                      <button
                        onClick={() =>
                          ver(r.id)
                        }
                        className="
                          px-3 py-2 rounded-xl
                          bg-sky-600/90 text-white text-sm font-semibold
                          shadow-sm
                          hover:bg-sky-700
                          transition
                        "
                        type="button"
                      >
                        Ver
                      </button>

                      <button
                        onClick={async () => {
                          try {
                            const token =
                              r.token ||
                              r.uuid ||
                              r.public_id;

                            if (
                              !token
                            ) {
                              setToast(
                                "No hay token ❌"
                              );

                              setTimeout(
                                () =>
                                  setToast(
                                    ""
                                  ),
                                1500
                              );

                              return;
                            }

                            const res =
                              await fetch(
                                "/api/plantillas/marcar-pagado",
                                {
                                  method:
                                    "POST",
                                  headers:
                                    {
                                      "Content-Type":
                                        "application/json",
                                    },
                                  body: JSON.stringify(
                                    {
                                      token,
                                    }
                                  ),
                                }
                              );

                            if (
                              !res.ok
                            )
                              throw new Error();

                            setToast(
                              "Pagado ✔"
                            );

                            setTimeout(
                              () =>
                                setToast(
                                  ""
                                ),
                              1500
                            );

                            fetchList();
                          } catch (e) {
                            console.error(
                              e
                            );

                            setToast(
                              "Error ❌"
                            );

                            setTimeout(
                              () =>
                                setToast(
                                  ""
                                ),
                              1500
                            );
                          }
                        }}
                        className="
                          px-3 py-2 rounded-xl
                          bg-purple-600 text-white
                          text-sm font-semibold
                          hover:bg-purple-700
                          transition
                        "
                        type="button"
                      >
                        Pagado
                      </button>

                      <button
                        onClick={async () => {
                          try {
                            const ok =
                              confirm(
                                "¿Seguro que deseas borrar este link?"
                              );

                            if (
                              !ok
                            )
                              return;

                            const token =
                              r.token ||
                              r.uuid ||
                              r.public_id;

                            if (
                              !token
                            ) {
                              setToast(
                                "No hay token ❌"
                              );

                              setTimeout(
                                () =>
                                  setToast(
                                    ""
                                  ),
                                1500
                              );

                              return;
                            }


                            const res =
                              await fetch(
                                `/api/plantillas/eliminar/${encodeURIComponent(
                                  String(r.id)
                                )}`,
                                {
                                  method: "DELETE",
                                }
                              );

                            const json =
                              await res
                                .json()
                                .catch(
                                  () =>
                                    ({})
                                );

                            if (
                              !res.ok
                            ) {
                              setToast(
                                json?.error ||
                                  "Error ❌"
                              );

                              setTimeout(
                                () =>
                                  setToast(
                                    ""
                                  ),
                                2000
                              );

                              return;
                            }

                            setToast(
                              "Link borrado ✔"
                            );

                            setTimeout(
                              () =>
                                setToast(
                                  ""
                                ),
                              1500
                            );

                            fetchList();
                          } catch (e) {
                            console.error(
                              e
                            );

                            setToast(
                              "Error ❌"
                            );

                            setTimeout(
                              () =>
                                setToast(
                                  ""
                                ),
                              1500
                            );
                          }
                        }}
                        className="
                          px-3 py-2 rounded-xl
                          bg-red-600 text-white
                          text-sm font-semibold
                          hover:bg-red-700
                          transition
                        "
                        type="button"
                      >
                        Borrar
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}