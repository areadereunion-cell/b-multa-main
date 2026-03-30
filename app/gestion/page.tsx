"use client";

import Link from "next/link";
import Sidebar from "./components/Sidebar";
import {
  FileText,
  FilePlus,
  Upload,
  Users,
  LayoutGrid,
  Search,
  ShieldCheck,
  Bell,
  Clock,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Database,
  Folder,
  Settings,
  BarChart3,
  PieChart,
  FileUp,
  ListChecks,
} from "lucide-react";

export default function GestionPage() {
  const cards = [
    {
      title: "Collection",
      desc: "Carga de base para gestion",
      icon: <FilePlus size={22} />,
      href: "/gestion/collection/casos",
    },
        {
      title: "Multas",
      desc: "Administrar y gestionar multas.",
      icon: <FileText size={22} />,
      href: "/gestion/multas",
    },
    {
      title: "Ligas",
      desc: "Administración visual de las Ligas.",
      icon: <LayoutGrid size={22} />,
      href: "/gestion/base",
    },
    {
      title: "Usuarios",
      desc: "Gestión de usuarios y roles.",
      icon: <Users size={22} />,
      href: "/gestion/usuarios",
    },
    {
      title: "Subir Base",
      desc: "Importar base de datos en formato CSV o Excel.",
      icon: <Upload size={22} />,
      href: "/gestion/base-datos",
    },
  ];

  const quickActions = [
    { title: "Buscar registro", desc: "Encuentra datos rápido", icon: <Search size={18} />, href: "/gestion/base" },
    { title: "Reportes", desc: "Resumen y métricas", icon: <BarChart3 size={18} />, href: "/gestion/reportes" },
    { title: "Auditoría", desc: "Cambios y trazabilidad", icon: <ListChecks size={18} />, href: "/gestion/auditoria" },
    { title: "Notificaciones", desc: "Alertas del sistema", icon: <Bell size={18} />, href: "/gestion/notificaciones" },
  ];

  const recentActivity = [
    { title: "Se importó base: vehiculos_2026.xlsx", meta: "Hace 12 min", icon: <FileUp size={18} /> },
    { title: "Se actualizó rol: Operador → Supervisor", meta: "Hace 2 h", icon: <ShieldCheck size={18} /> },
    { title: "Nueva multa registrada: #MT-19302", meta: "Ayer", icon: <FileText size={18} /> },
  ];

  return (
    <div className="min-h-screen text-slate-900">
      <Sidebar />

      <main
        className="
          min-h-screen
          pl-[76px] sm:pl-[88px] md:pl-[96px] lg:pl-[110px]
          pr-4 sm:pr-6 md:pr-10
          py-6 sm:py-8 md:py-10
          bg-gradient-to-b from-slate-50 via-sky-50/60 to-slate-100
          transition-[padding] duration-300
        "
      >
        {/* Header superior tipo dashboard */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              Panel de Gestión
            </h1>
            <p className="text-slate-500 mt-2 text-sm sm:text-base">
              Bienvenido al panel de administración.
            </p>
          </div>

          <div
            className="
              hidden sm:flex items-center gap-2
              px-3 sm:px-4 py-2 rounded-2xl
              bg-white/60 backdrop-blur-xl
              border border-slate-200/60
              shadow-sm
              text-xs sm:text-sm text-slate-600
            "
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Sistema activo
          </div>
        </div>

        <div className="mt-6 sm:mt-8 border-t border-slate-200/70" />

        {/* Grid principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {cards.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="
                group
                rounded-3xl
                bg-white/55 backdrop-blur-xl
                border border-slate-200/60
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                p-5 sm:p-6
                transition
                hover:shadow-[0_12px_40px_rgba(15,23,42,0.10)]
                hover:-translate-y-0.5
                focus:outline-none focus:ring-2 focus:ring-sky-300/60
              "
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className="
                    h-10 w-10 sm:h-11 sm:w-11 rounded-2xl
                    flex items-center justify-center
                    bg-white/70
                    border border-slate-200/70
                    shadow-sm
                    transition
                    group-hover:bg-white
                  "
                >
                  <span className="text-slate-800">{item.icon}</span>
                </div>

                <div className="min-w-0">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-900 truncate">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">{item.desc}</p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />
              </div>

              <div className="mt-4 flex items-center justify-end">
                <span
                  className="
                    text-xs sm:text-sm font-medium
                    text-slate-600
                    group-hover:text-slate-900
                    transition
                  "
                >
                  Abrir →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ✅ SECCIÓN: Accesos rápidos */}
        <section className="mt-8 sm:mt-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-base sm:text-lg font-semibold text-slate-900">Accesos rápidos</h2>
            <Link
              href="/gestion/configuracion"
              className="text-sm text-slate-600 hover:text-slate-900 inline-flex items-center gap-2"
            >
              <Settings size={16} />
              Configuración
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-4">
            {quickActions.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="
                  rounded-3xl
                  bg-white/50 backdrop-blur-xl
                  border border-slate-200/60
                  shadow-sm
                  p-4 sm:p-5
                  transition
                  hover:shadow-md
                  hover:-translate-y-0.5
                  focus:outline-none focus:ring-2 focus:ring-sky-300/60
                "
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-2xl bg-white/70 border border-slate-200/70 flex items-center justify-center">
                      {a.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-slate-900">{a.title}</div>
                      <div className="text-xs sm:text-sm text-slate-500">{a.desc}</div>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-slate-400" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ✅ SECCIÓN: Actividad reciente + Estado */}
        <section className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Actividad */}
          <div className="lg:col-span-2 rounded-3xl bg-white/55 backdrop-blur-xl border border-slate-200/60 shadow-[0_8px_30px_rgba(15,23,42,0.06)] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-base sm:text-lg font-semibold text-slate-900">Actividad reciente</h2>
              <Link href="/gestion/auditoria" className="text-sm text-slate-600 hover:text-slate-900">
                Ver todo →
              </Link>
            </div>

            <div className="mt-4 space-y-3">
              {recentActivity.map((it) => (
                <div key={it.title} className="flex items-center gap-3 rounded-2xl border border-slate-200/60 bg-white/40 p-3 sm:p-4">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-2xl bg-white/70 border border-slate-200/70 flex items-center justify-center">
                    {it.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-sm sm:text-base text-slate-900 truncate">{it.title}</div>
                    <div className="text-xs sm:text-sm text-slate-500 inline-flex items-center gap-2 mt-0.5">
                      <Clock size={14} />
                      {it.meta}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Estado */}
          <div className="rounded-3xl bg-white/55 backdrop-blur-xl border border-slate-200/60 shadow-[0_8px_30px_rgba(15,23,42,0.06)] p-5 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold text-slate-900">Resumen</h2>

            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-slate-200/60 bg-white/40 p-3 sm:p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-700 text-sm sm:text-base">
                  <Database size={16} />
                  Bases
                </div>
                <span className="font-semibold text-slate-900">—</span>
              </div>

              <div className="rounded-2xl border border-slate-200/60 bg-white/40 p-3 sm:p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-700 text-sm sm:text-base">
                  <Folder size={16} />
                  Collections
                </div>
                <span className="font-semibold text-slate-900">—</span>
              </div>

              <div className="rounded-2xl border border-slate-200/60 bg-white/40 p-3 sm:p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-700 text-sm sm:text-base">
                  <PieChart size={16} />
                  Reportes
                </div>
                <span className="font-semibold text-slate-900">—</span>
              </div>
            </div>

            <div className="mt-5 text-xs sm:text-sm text-slate-500">
              (Si quieres, acá puedes conectar números reales desde tu API.)
            </div>
          </div>
        </section>

        {/* Ayuda */}
        <section className="mt-8 sm:mt-10">
          <div className="rounded-3xl bg-white/55 backdrop-blur-xl border border-slate-200/60 shadow-[0_8px_30px_rgba(15,23,42,0.06)] p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-slate-900">Ayuda</h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Documentación rápida y soporte para el panel.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Link href="/gestion/manual" className="px-4 py-2 rounded-2xl border border-slate-200/70 bg-white/60 hover:bg-white transition text-sm inline-flex items-center gap-2">
                  <BookOpen size={16} />
                  Manual
                </Link>
                <Link href="/gestion/soporte" className="px-4 py-2 rounded-2xl border border-slate-200/70 bg-white/60 hover:bg-white transition text-sm inline-flex items-center gap-2">
                  <HelpCircle size={16} />
                  Soporte
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}