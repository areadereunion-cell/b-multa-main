"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Home,
  FileText,
  Users,
  LogOut,
  Settings,
  Palette,
  UserCog,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Coffee,
  Sunset,
  Leaf,
  Moon,
  Folder,
  ChevronDown,

  // ✅ ICONOS ÚNICOS (NUEVOS)
  ShieldAlert,
  Database,
  UserRound,
  BarChart3,
  Briefcase,
  AppWindow,
} from "lucide-react";

type SidebarTheme = "principal" | "oscuro" | "cafe" | "aurora" | "bosque" | "atardecer";
type SettingsTab = "sesion" | "diseno";

const themeOptions: Array<{
  key: SidebarTheme;
  label: string;
  icon: React.ReactNode;
}> = [
  { key: "principal", label: "Principal", icon: <Droplets size={18} /> },
  { key: "oscuro", label: "Oscuro", icon: <Moon size={18} /> },
  { key: "cafe", label: "Café", icon: <Coffee size={18} /> },
  { key: "aurora", label: "Aurora", icon: <Droplets size={18} /> },
  { key: "bosque", label: "Bosque", icon: <Leaf size={18} /> },
  { key: "atardecer", label: "Atardecer", icon: <Sunset size={18} /> },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [tab, setTab] = useState<SettingsTab>("sesion");
  const [theme, setTheme] = useState<SidebarTheme>("principal");

  const [collectionOpen, setCollectionOpen] = useState(false);

  // Cargar tema
  useEffect(() => {
    const saved = window.localStorage.getItem("sidebarTheme") as SidebarTheme | null;
    if (saved) setTheme(saved);
  }, []);

  // Guardar tema
  useEffect(() => {
    window.localStorage.setItem("sidebarTheme", theme);
  }, [theme]);

  // ✅ Al retraer, cerrar ajustes
  useEffect(() => {
    if (!open) {
      setSettingsOpen(false);
      setCollectionOpen(false);
    }
  }, [open]);

  // ✅ CSS var para que el layout se ajuste (main no se meta debajo)
  useEffect(() => {
    const w = open ? "18rem" : "88px";
    document.documentElement.style.setProperty("--sidebar-w", w);
    return () => {
      document.documentElement.style.removeProperty("--sidebar-w");
    };
  }, [open]);

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", { method: "POST" });
      if (!res.ok) return console.error("Error al cerrar sesión");
      router.push("/");
    } catch (error) {
      console.error("Error en el logout:", error);
    }
  };

  const styles = useMemo(() => {
    const principal = {
      shell:
        "bg-gradient-to-b from-sky-100/70 to-stone-100/60 backdrop-blur-xl text-slate-800 border-sky-200/40",
      brand: "text-slate-900",
      item: "hover:bg-sky-200/40 hover:shadow-sm text-slate-700",
      itemActive: "bg-white/70 shadow-md text-slate-900",
      divider: "border-sky-200/40",
      subtle: "text-slate-500",
      panel: "bg-white/60 backdrop-blur-xl border-sky-200/40 shadow-lg",
      tab: "bg-white/40 hover:bg-white/60 border-sky-200/40 text-slate-600",
      tabActive: "bg-white/80 border-sky-300/50 text-slate-900 shadow",
      button:
        "bg-gradient-to-r from-amber-700 to-stone-700 text-white hover:from-amber-800 hover:to-stone-800",
      ghost: "hover:bg-sky-200/30",
      iconBox: "bg-white/60 border-sky-200/40 shadow-sm",
      iconBoxHover: "hover:bg-white/80",
      card: "bg-white/50 border-sky-200/40",

      childWrap: "bg-white/40 border-sky-200/40",
      childBorder: "border-sky-200/50",
      childItem: "text-slate-700 hover:bg-white/60",
      childItemActive: "bg-white/80 text-slate-900 shadow-sm",
      caret: "text-slate-500",
    };

    const oscuro = {
      shell: "bg-slate-950/60 backdrop-blur-xl text-slate-100 border-white/10",
      brand: "text-white",
      item: "hover:bg-white/10 text-slate-100/90",
      itemActive: "bg-white/10 text-white",
      divider: "border-white/10",
      subtle: "text-slate-100/60",
      panel: "bg-white/5 border-white/10 backdrop-blur-xl",
      tab: "bg-white/5 hover:bg-white/10 border-white/10 text-slate-100/80",
      tabActive: "bg-white/10 border-white/10 text-white",
      button: "bg-white text-slate-950 hover:bg-slate-100",
      ghost: "hover:bg-white/10",
      iconBox: "bg-white/10 border-white/10",
      iconBoxHover: "hover:bg-white/15",
      card: "bg-white/5 border-white/10",

      childWrap: "bg-white/5 border-white/10",
      childBorder: "border-white/10",
      childItem: "text-slate-100/90 hover:bg-white/10",
      childItemActive: "bg-white/10 text-white",
      caret: "text-slate-100/60",
    };

    const cafe = {
      shell:
        "bg-gradient-to-b from-amber-50/70 to-stone-100/60 backdrop-blur-xl text-stone-800 border-amber-200/40",
      brand: "text-stone-900",
      item: "hover:bg-amber-200/35 hover:shadow-sm text-stone-700",
      itemActive: "bg-white/70 shadow-md text-stone-900",
      divider: "border-amber-200/40",
      subtle: "text-stone-500",
      panel: "bg-white/60 backdrop-blur-xl border-amber-200/40 shadow-lg",
      tab: "bg-white/40 hover:bg-white/60 border-amber-200/40 text-stone-600",
      tabActive: "bg-white/80 border-amber-300/50 text-stone-900 shadow",
      button:
        "bg-gradient-to-r from-stone-800 to-amber-800 text-white hover:from-stone-900 hover:to-amber-900",
      ghost: "hover:bg-amber-200/25",
      iconBox: "bg-white/60 border-amber-200/40 shadow-sm",
      iconBoxHover: "hover:bg-white/80",
      card: "bg-white/50 border-amber-200/40",

      childWrap: "bg-white/40 border-amber-200/40",
      childBorder: "border-amber-200/50",
      childItem: "text-stone-700 hover:bg-white/60",
      childItemActive: "bg-white/80 text-stone-900 shadow-sm",
      caret: "text-stone-500",
    };

    const aurora = {
      shell:
        "bg-gradient-to-b from-cyan-100/70 to-indigo-100/55 backdrop-blur-xl text-slate-800 border-cyan-200/40",
      brand: "text-slate-900",
      item: "hover:bg-cyan-200/35 hover:shadow-sm text-slate-700",
      itemActive: "bg-white/70 shadow-md text-slate-900",
      divider: "border-cyan-200/40",
      subtle: "text-slate-500",
      panel: "bg-white/60 backdrop-blur-xl border-cyan-200/40 shadow-lg",
      tab: "bg-white/40 hover:bg-white/60 border-cyan-200/40 text-slate-600",
      tabActive: "bg-white/80 border-cyan-300/50 text-slate-900 shadow",
      button:
        "bg-gradient-to-r from-indigo-700 to-cyan-700 text-white hover:from-indigo-800 hover:to-cyan-800",
      ghost: "hover:bg-cyan-200/25",
      iconBox: "bg-white/60 border-cyan-200/40 shadow-sm",
      iconBoxHover: "hover:bg-white/80",
      card: "bg-white/50 border-cyan-200/40",

      childWrap: "bg-white/40 border-cyan-200/40",
      childBorder: "border-cyan-200/50",
      childItem: "text-slate-700 hover:bg-white/60",
      childItemActive: "bg-white/80 text-slate-900 shadow-sm",
      caret: "text-slate-500",
    };

    const bosque = {
      shell:
        "bg-gradient-to-b from-emerald-50/75 to-lime-50/60 backdrop-blur-xl text-slate-800 border-emerald-200/40",
      brand: "text-slate-900",
      item: "hover:bg-emerald-200/30 hover:shadow-sm text-slate-700",
      itemActive: "bg-white/70 shadow-md text-slate-900",
      divider: "border-emerald-200/40",
      subtle: "text-slate-500",
      panel: "bg-white/60 backdrop-blur-xl border-emerald-200/40 shadow-lg",
      tab: "bg-white/40 hover:bg-white/60 border-emerald-200/40 text-slate-600",
      tabActive: "bg-white/80 border-emerald-300/50 text-slate-900 shadow",
      button:
        "bg-gradient-to-r from-emerald-700 to-lime-700 text-white hover:from-emerald-800 hover:to-lime-800",
      ghost: "hover:bg-emerald-200/25",
      iconBox: "bg-white/60 border-emerald-200/40 shadow-sm",
      iconBoxHover: "hover:bg-white/80",
      card: "bg-white/50 border-emerald-200/40",

      childWrap: "bg-white/40 border-emerald-200/40",
      childBorder: "border-emerald-200/50",
      childItem: "text-slate-700 hover:bg-white/60",
      childItemActive: "bg-white/80 text-slate-900 shadow-sm",
      caret: "text-slate-500",
    };

    const atardecer = {
      shell:
        "bg-gradient-to-b from-rose-50/75 to-amber-50/60 backdrop-blur-xl text-slate-800 border-rose-200/40",
      brand: "text-slate-900",
      item: "hover:bg-rose-200/30 hover:shadow-sm text-slate-700",
      itemActive: "bg-white/70 shadow-md text-slate-900",
      divider: "border-rose-200/40",
      subtle: "text-slate-500",
      panel: "bg-white/60 backdrop-blur-xl border-rose-200/40 shadow-lg",
      tab: "bg-white/40 hover:bg-white/60 border-rose-200/40 text-slate-600",
      tabActive: "bg-white/80 border-rose-300/50 text-slate-900 shadow",
      button:
        "bg-gradient-to-r from-rose-700 to-amber-700 text-white hover:from-rose-800 hover:to-amber-800",
      ghost: "hover:bg-rose-200/25",
      iconBox: "bg-white/60 border-rose-200/40 shadow-sm",
      iconBoxHover: "hover:bg-white/80",
      card: "bg-white/50 border-rose-200/40",

      childWrap: "bg-white/40 border-rose-200/40",
      childBorder: "border-rose-200/50",
      childItem: "text-slate-700 hover:bg-white/60",
      childItemActive: "bg-white/80 text-slate-900 shadow-sm",
      caret: "text-slate-500",
    };

    const map: Record<SidebarTheme, any> = {
      principal,
      oscuro,
      cafe,
      aurora,
      bosque,
      atardecer,
    };

    return map[theme] ?? principal;
  }, [theme]);

  // ✅ Para marcar Collection “active” cuando estás dentro de /gestion/collection/...
  const isCollectionRoute = useMemo(() => {
    if (!pathname) return false;
    return pathname.startsWith("/gestion/collection");
  }, [pathname]);

  // ✅ Auto-abrir Collection si estoy en esa ruta (cuando sidebar está open)
  useEffect(() => {
    if (open && isCollectionRoute) setCollectionOpen(true);
  }, [open, isCollectionRoute]);

  return (
    <aside
      className={[
        open ? "w-72" : "w-[88px]",
        "fixed left-0 top-0 h-screen transition-all duration-300 flex flex-col border-r z-[9999] isolate",
        styles.shell,
      ].join(" ")}
    >
      {/* Header (simple, funcional) */}
      <div className="p-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={["h-10 w-10 rounded-2xl border flex items-center justify-center", styles.iconBox].join(" ")}>
            <Home size={18} />
          </div>
          {open && <div className={["font-semibold tracking-tight", styles.brand].join(" ")}>Panel</div>}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={[
            "h-10 w-10 rounded-2xl border flex items-center justify-center transition",
            styles.iconBox,
            styles.iconBoxHover,
          ].join(" ")}
          aria-label={open ? "Contraer sidebar" : "Expandir sidebar"}
          title={open ? "Contraer" : "Expandir"}
        >
          {open ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      <div className={["mx-4 border-t", styles.divider].join(" ")} />

      {/* Nav */}
      <nav className="flex flex-col gap-2 p-4">
        {/* ✅ ICONOS ÚNICOS */}
        <NavItem open={open} href="/gestion" icon={<Home size={20} />} label="Inicio" styles={styles} />
        <NavItem open={open} href="/gestion/multas" icon={<ShieldAlert size={20} />} label="Multas" styles={styles} />

        {/* ✅ NUEVO: Reportes */}
        <NavItem open={open} href="/gestion/reportes" icon={<BarChart3 size={20} />} label="Reportes" styles={styles} />

        {/* ✅ COLLECTION */}
        <div className="relative">
          <button
            onClick={() => {
              if (!open) {
                setOpen(true);
                return;
              }
              setCollectionOpen((v) => !v);
            }}
            className={[
              "w-full flex items-center gap-3 p-3 rounded-2xl transition border border-transparent group",
              isCollectionRoute ? styles.itemActive : styles.item,
            ].join(" ")}
            aria-expanded={collectionOpen}
          >
            <Folder size={20} />
            {open && (
              <>
                <span className="text-sm font-medium flex-1">Collection</span>

                <span
                  className={[
                    "h-7 px-2 rounded-xl border flex items-center justify-center transition",
                    styles.card,
                  ].join(" ")}
                >
                  <ChevronDown
                    size={16}
                    className={[
                      "transition",
                      collectionOpen ? "rotate-180" : "",
                      styles.caret,
                    ].join(" ")}
                  />
                </span>
              </>
            )}
          </button>

          {open && (
            <div
              className={[
                "mt-2 overflow-hidden transition-all duration-300",
                collectionOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
              ].join(" ")}
            >
              <div className={["rounded-2xl border p-2", styles.childWrap].join(" ")}>
                <div className={["ml-1 pl-3 border-l flex flex-col gap-1", styles.childBorder].join(" ")}>
                  {/* ✅ SUBITEMS con iconos únicos */}
                  <SubItem
                    href="/gestion/collection/casos"
                    icon={<Briefcase size={16} />}
                    label="Casos"
                    active={pathname === "/gestion/collection/casos"}
                    styles={styles}
                  />
                  <SubItem
                    href="/gestion/collection/aplicaciones"
                    icon={<AppWindow size={16} />}
                    label="Aplicaciones"
                    active={pathname === "/gestion/collection/aplicaciones"}
                    styles={styles}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ✅ ICONOS ÚNICOS RESTO */}
        <NavItem open={open} href="/gestion/base" icon={<Database size={20} />} label="Ligas" styles={styles} />
        <NavItem open={open} href="/gestion/usuarios" icon={<UserRound size={20} />} label="Usuarios" styles={styles} />

        {/* Si este route es otra cosa distinta, le dejo icono distinto también */}
        <NavItem open={open} href="/gestion/base-datos" icon={<FileText size={20} />} label="Base de datos" styles={styles} />
      </nav>

      {/* Footer / Settings */}
      <div className="mt-auto p-4">
        <div className={["border-t pt-4", styles.divider].join(" ")}>
          <button
            onClick={() => {
              if (!open) {
                setOpen(true);
                setSettingsOpen(false);
                return;
              }
              setSettingsOpen((v) => !v);
            }}
            className={[
              "w-full flex items-center gap-3 p-3 rounded-2xl border transition",
              styles.card,
            ].join(" ")}
          >
            <Settings size={20} />
            {open && (
              <div className="flex-1 flex items-center justify-between">
                <span className="font-medium">Ajustes</span>
                <span className={["text-xs", styles.subtle].join(" ")}>
                  {settingsOpen ? "abierto" : "cerrado"}
                </span>
              </div>
            )}
          </button>

          {settingsOpen && (
            <div className={["mt-3 p-3 rounded-2xl border", styles.panel].join(" ")}>
              {/* Tabs */}
              <div className="flex gap-2">
                <button
                  onClick={() => setTab("sesion")}
                  className={[
                    "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl border text-sm transition",
                    tab === "sesion" ? styles.tabActive : styles.tab,
                  ].join(" ")}
                >
                  <UserCog size={16} />
                  {open && "Sesión"}
                </button>

                <button
                  onClick={() => setTab("diseno")}
                  className={[
                    "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl border text-sm transition",
                    tab === "diseno" ? styles.tabActive : styles.tab,
                  ].join(" ")}
                >
                  <Palette size={16} />
                  {open && "Diseño"}
                </button>
              </div>

              <div className="mt-3">
                {tab === "sesion" ? (
                  <div className="space-y-2">
                    <Link
                      href="/"
                      className={[
                        "w-full flex items-center gap-3 p-3 rounded-2xl border transition",
                        styles.card,
                      ].join(" ")}
                    >
                      <UserCog size={18} />
                      <span className="text-sm font-medium">Cambiar sesión</span>
                    </Link>

                    <button
                      onClick={handleLogout}
                      className={[
                        "w-full flex items-center gap-3 p-3 rounded-2xl transition",
                        styles.button,
                      ].join(" ")}
                    >
                      <LogOut size={18} />
                      <span className="text-sm font-semibold">Cerrar sesión</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className={["text-xs", styles.subtle].join(" ")}>Tema de la sidebar</div>

                    <div className="max-h-56 overflow-y-auto pr-1">
                      <div className="grid grid-cols-1 gap-2">
                        {themeOptions.map((opt) => (
                          <button
                            key={opt.key}
                            onClick={() => setTheme(opt.key)}
                            className={[
                              "w-full flex items-center justify-between gap-3 p-3 rounded-2xl border transition",
                              styles.card,
                            ].join(" ")}
                          >
                            <div className="flex items-center gap-2">
                              {opt.icon}
                              <span className="text-sm font-medium">{opt.label}</span>
                            </div>
                            {theme === opt.key && <span className="text-xs">✅</span>}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {!open && (
            <button
              onClick={handleLogout}
              className={[
                "mt-3 w-full flex items-center justify-center p-3 rounded-2xl transition",
                styles.ghost,
              ].join(" ")}
              aria-label="Cerrar sesión"
              title="Cerrar sesión"
            >
              <LogOut size={20} />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}

function NavItem({
  open,
  href,
  icon,
  label,
  styles,
}: {
  open: boolean;
  href: string;
  icon: React.ReactNode;
  label: string;
  styles: any;
}) {
  return (
    <Link
      href={href}
      className={[
        "flex items-center gap-3 p-3 rounded-2xl transition border border-transparent",
        styles.item,
      ].join(" ")}
      title={!open ? label : undefined}
    >
      {icon}
      {open && <span className="text-sm font-medium">{label}</span>}
    </Link>
  );
}

function SubItem({
  href,
  icon,
  label,
  active,
  styles,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
  styles: any;
}) {
  return (
    <Link
      href={href}
      className={[
        "flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition",
        active ? styles.childItemActive : styles.childItem,
      ].join(" ")}
    >
      <span className="opacity-90">{icon}</span>
      <span className="font-medium">{label}</span>
    </Link>
  );
}
