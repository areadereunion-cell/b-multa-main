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
  Menu,
  X,
} from "lucide-react";

type SidebarTheme =
  | "principal"
  | "oscuro"
  | "cafe"
  | "aurora"
  | "bosque"
  | "atardecer";
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

  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [tab, setTab] = useState<SettingsTab>("sesion");
  const [theme, setTheme] = useState<SidebarTheme>("principal");

  const [collectionOpen, setCollectionOpen] = useState(false);

  // Cargar tema
  useEffect(() => {
    const saved = window.localStorage.getItem(
      "sidebarTheme"
    ) as SidebarTheme | null;
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
    const w = open ? "0px" : "0px";
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
        "bg-white/10 backdrop-blur-2xl text-slate-800 border-white/20",
      brand: "text-white",
      item: "hover:bg-white/12 hover:shadow-sm text-white/90",
      itemActive: "bg-white/18 shadow-md text-white",
      divider: "border-white/15",
      subtle: "text-white/60",
      panel: "bg-white/10 backdrop-blur-2xl border-white/15 shadow-lg",
      tab: "bg-white/8 hover:bg-white/12 border-white/15 text-white/80",
      tabActive: "bg-white/18 border-white/20 text-white shadow",
      button:
        "bg-gradient-to-r from-amber-700 to-stone-700 text-white hover:from-amber-800 hover:to-stone-800",
      ghost: "hover:bg-white/10",
      iconBox: "bg-white/80 border-white/40 shadow-md text-slate-900",
      iconBoxHover: "hover:bg-white/18",
      card: "bg-white/10 border-white/15",

      childWrap: "bg-white/8 border-white/15",
      childBorder: "border-white/15",
      childItem: "text-white/85 hover:bg-white/10",
      childItemActive: "bg-white/18 text-white shadow-sm",
      caret: "text-white/70",
    };

    const oscuro = {
      shell: "bg-slate-950/70 backdrop-blur-2xl text-slate-100 border-white/10",
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
      iconBox: "bg-white/10 border-white/10 text-white",
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
        "bg-stone-900/45 backdrop-blur-2xl text-stone-100 border-amber-200/15",
      brand: "text-white",
      item: "hover:bg-white/10 hover:shadow-sm text-stone-100/90",
      itemActive: "bg-white/14 shadow-md text-white",
      divider: "border-white/10",
      subtle: "text-stone-200/60",
      panel: "bg-white/8 backdrop-blur-xl border-white/12 shadow-lg",
      tab: "bg-white/6 hover:bg-white/10 border-white/12 text-stone-100/80",
      tabActive: "bg-white/16 border-white/18 text-white shadow",
      button:
        "bg-gradient-to-r from-stone-800 to-amber-800 text-white hover:from-stone-900 hover:to-amber-900",
      ghost: "hover:bg-white/10",
      iconBox: "bg-white/10 border-white/12 shadow-sm text-white",
      iconBoxHover: "hover:bg-white/14",
      card: "bg-white/8 border-white/12",

      childWrap: "bg-white/7 border-white/12",
      childBorder: "border-white/12",
      childItem: "text-stone-100/85 hover:bg-white/10",
      childItemActive: "bg-white/16 text-white shadow-sm",
      caret: "text-stone-200/65",
    };

    const aurora = {
      shell:
        "bg-cyan-950/35 backdrop-blur-2xl text-slate-100 border-cyan-200/15",
      brand: "text-white",
      item: "hover:bg-white/10 hover:shadow-sm text-white/90",
      itemActive: "bg-white/16 shadow-md text-white",
      divider: "border-white/10",
      subtle: "text-white/60",
      panel: "bg-white/8 backdrop-blur-xl border-white/12 shadow-lg",
      tab: "bg-white/6 hover:bg-white/10 border-white/12 text-white/80",
      tabActive: "bg-white/16 border-white/18 text-white shadow",
      button:
        "bg-gradient-to-r from-indigo-700 to-cyan-700 text-white hover:from-indigo-800 hover:to-cyan-800",
      ghost: "hover:bg-white/10",
      iconBox: "bg-white/10 border-white/12 shadow-sm text-white",
      iconBoxHover: "hover:bg-white/14",
      card: "bg-white/8 border-white/12",

      childWrap: "bg-white/7 border-white/12",
      childBorder: "border-white/12",
      childItem: "text-white/85 hover:bg-white/10",
      childItemActive: "bg-white/16 text-white shadow-sm",
      caret: "text-white/65",
    };

    const bosque = {
      shell:
        "bg-emerald-950/35 backdrop-blur-2xl text-slate-100 border-emerald-200/15",
      brand: "text-white",
      item: "hover:bg-white/10 hover:shadow-sm text-white/90",
      itemActive: "bg-white/16 shadow-md text-white",
      divider: "border-white/10",
      subtle: "text-white/60",
      panel: "bg-white/8 backdrop-blur-xl border-white/12 shadow-lg",
      tab: "bg-white/6 hover:bg-white/10 border-white/12 text-white/80",
      tabActive: "bg-white/16 border-white/18 text-white shadow",
      button:
        "bg-gradient-to-r from-emerald-700 to-lime-700 text-white hover:from-emerald-800 hover:to-lime-800",
      ghost: "hover:bg-white/10",
      iconBox: "bg-white/10 border-white/12 shadow-sm text-white",
      iconBoxHover: "hover:bg-white/14",
      card: "bg-white/8 border-white/12",

      childWrap: "bg-white/7 border-white/12",
      childBorder: "border-white/12",
      childItem: "text-white/85 hover:bg-white/10",
      childItemActive: "bg-white/16 text-white shadow-sm",
      caret: "text-white/65",
    };

    const atardecer = {
      shell:
        "bg-rose-950/30 backdrop-blur-2xl text-slate-100 border-rose-200/15",
      brand: "text-white",
      item: "hover:bg-white/10 hover:shadow-sm text-white/90",
      itemActive: "bg-white/16 shadow-md text-white",
      divider: "border-white/10",
      subtle: "text-white/60",
      panel: "bg-white/8 backdrop-blur-xl border-white/12 shadow-lg",
      tab: "bg-white/6 hover:bg-white/10 border-white/12 text-white/80",
      tabActive: "bg-white/16 border-white/18 text-white shadow",
      button:
        "bg-gradient-to-r from-rose-700 to-amber-700 text-white hover:from-rose-800 hover:to-amber-800",
      ghost: "hover:bg-white/10",
      iconBox: "bg-white/10 border-white/12 shadow-sm text-white",
      iconBoxHover: "hover:bg-white/14",
      card: "bg-white/8 border-white/12",

      childWrap: "bg-white/7 border-white/12",
      childBorder: "border-white/12",
      childItem: "text-white/85 hover:bg-white/10",
      childItemActive: "bg-white/16 text-white shadow-sm",
      caret: "text-white/65",
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
    <>
      {/* Botón hamburguesa */}
      <button
        onClick={() => setOpen(true)}
        className={[
          "fixed left-4 top-4 z-[10000] h-12 w-12 rounded-2xl border flex items-center justify-center transition shadow-[0_10px_40px_rgba(0,0,0,0.25)]",
          styles.iconBox,
          styles.iconBoxHover,
          open ? "pointer-events-none opacity-0" : "opacity-100",
        ].join(" ")}
        aria-label="Abrir menú"
        title="Abrir menú"
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={[
          "fixed inset-0 z-[9997] bg-black/40 backdrop-blur-[2px] transition-all duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      <aside
        className={[
          "fixed left-0 top-0 h-screen w-[290px] max-w-[86vw] transition-all duration-300 flex flex-col border-r z-[9999] isolate shadow-[0_20px_80px_rgba(0,0,0,0.35)]",
          open ? "translate-x-0" : "-translate-x-full",
          styles.shell,
        ].join(" ")}
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={[
                "h-10 w-10 rounded-2xl border flex items-center justify-center shrink-0",
                styles.iconBox,
              ].join(" ")}
            >
              <Home size={18} />
            </div>

            <div className="min-w-0">
              <div
                className={[
                  "font-semibold tracking-tight text-base truncate",
                  styles.brand,
                ].join(" ")}
              >
                Panel
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setOpen(false)}
              className={[
                "h-10 w-10 rounded-2xl border flex items-center justify-center transition",
                styles.iconBox,
                styles.iconBoxHover,
              ].join(" ")}
              aria-label="Cerrar menú"
              title="Cerrar menú"
            >
              <X size={18} />
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              className={[
                "hidden h-10 w-10 rounded-2xl border items-center justify-center transition",
                styles.iconBox,
                styles.iconBoxHover,
              ].join(" ")}
              aria-label={open ? "Contraer sidebar" : "Expandir sidebar"}
              title={open ? "Contraer" : "Expandir"}
            >
              {open ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>
          </div>
        </div>

        <div className={["mx-4 border-t", styles.divider].join(" ")} />

        {/* Nav */}
        <nav className="flex flex-col gap-2 p-4 overflow-y-auto">
          {/* ✅ ICONOS ÚNICOS */}
          <NavItem
            open={true}
            href="/gestion"
            icon={<Home size={20} />}
            label="Inicio"
            styles={styles}
            active={pathname === "/gestion"}
            onNavigate={() => setOpen(false)}
          />
          <NavItem
            open={true}
            href="/gestion/multas"
            icon={<ShieldAlert size={20} />}
            label="Multas"
            styles={styles}
            active={pathname === "/gestion/multas"}
            onNavigate={() => setOpen(false)}
          />

          {/* ✅ NUEVO: Reportes */}
          <NavItem
            open={true}
            href="/gestion/reportes"
            icon={<BarChart3 size={20} />}
            label="Reportes"
            styles={styles}
            active={pathname === "/gestion/reportes"}
            onNavigate={() => setOpen(false)}
          />

          {/* ✅ COLLECTION */}
          <div className="relative">
            <button
              onClick={() => {
                setCollectionOpen((v) => !v);
              }}
              className={[
                "w-full flex items-center gap-3 p-3 rounded-2xl transition border border-transparent group",
                isCollectionRoute ? styles.itemActive : styles.item,
              ].join(" ")}
              aria-expanded={collectionOpen}
            >
              <Folder size={20} className="shrink-0" />

              <>
                <span className="text-sm font-medium flex-1 text-left truncate">
                  Collection
                </span>

                <span
                  className={[
                    "h-7 px-2 rounded-xl border flex items-center justify-center transition shrink-0",
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
            </button>

            <div
              className={[
                "mt-2 overflow-hidden transition-all duration-300",
                collectionOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
              ].join(" ")}
            >
              <div
                className={[
                  "rounded-2xl border p-2",
                  styles.childWrap,
                ].join(" ")}
              >
                <div
                  className={[
                    "ml-1 pl-3 border-l flex flex-col gap-1",
                    styles.childBorder,
                  ].join(" ")}
                >
                  <SubItem
                    href="/gestion/collection/casos"
                    icon={<Briefcase size={16} />}
                    label="Casos"
                    active={pathname === "/gestion/collection/casos"}
                    styles={styles}
                    onNavigate={() => setOpen(false)}
                  />
                  <SubItem
                    href="/gestion/collection/aplicaciones"
                    icon={<AppWindow size={16} />}
                    label="Aplicaciones"
                    active={pathname === "/gestion/collection/aplicaciones"}
                    styles={styles}
                    onNavigate={() => setOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ✅ ICONOS ÚNICOS RESTO */}
          <NavItem
            open={true}
            href="/gestion/base"
            icon={<Database size={20} />}
            label="Ligas"
            styles={styles}
            active={pathname === "/gestion/base"}
            onNavigate={() => setOpen(false)}
          />
          <NavItem
            open={true}
            href="/gestion/usuarios"
            icon={<UserRound size={20} />}
            label="Usuarios"
            styles={styles}
            active={pathname === "/gestion/usuarios"}
            onNavigate={() => setOpen(false)}
          />

          {/* Si este route es otra cosa distinta, le dejo icono distinto también */}
          <NavItem
            open={true}
            href="/gestion/base-datos"
            icon={<FileText size={20} />}
            label="Base de datos"
            styles={styles}
            active={pathname === "/gestion/base-datos"}
            onNavigate={() => setOpen(false)}
          />
        </nav>

        {/* Footer / Settings */}
        <div className="mt-auto p-4">
          <div className={["border-t pt-4", styles.divider].join(" ")}>
            <button
              onClick={() => {
                setSettingsOpen((v) => !v);
              }}
              className={[
                "w-full flex items-center gap-3 p-3 rounded-2xl border transition",
                styles.card,
              ].join(" ")}
            >
              <Settings size={20} className="shrink-0" />
              <div className="flex-1 flex items-center justify-between min-w-0">
                <span className="font-medium text-sm truncate">Ajustes</span>
                <span className={["text-xs", styles.subtle].join(" ")}>
                  {settingsOpen ? "abierto" : "cerrado"}
                </span>
              </div>
            </button>

            {settingsOpen && (
              <div
                className={[
                  "mt-3 p-3 rounded-2xl border",
                  styles.panel,
                ].join(" ")}
              >
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
                    Sesión
                  </button>

                  <button
                    onClick={() => setTab("diseno")}
                    className={[
                      "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl border text-sm transition",
                      tab === "diseno" ? styles.tabActive : styles.tab,
                    ].join(" ")}
                  >
                    <Palette size={16} />
                    Diseño
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
                        onClick={() => setOpen(false)}
                      >
                        <UserCog size={18} className="shrink-0" />
                        <span className="text-sm font-medium">
                          Cambiar sesión
                        </span>
                      </Link>

                      <button
                        onClick={handleLogout}
                        className={[
                          "w-full flex items-center gap-3 p-3 rounded-2xl transition",
                          styles.button,
                        ].join(" ")}
                      >
                        <LogOut size={18} className="shrink-0" />
                        <span className="text-sm font-semibold">
                          Cerrar sesión
                        </span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className={["text-xs", styles.subtle].join(" ")}>
                        Tema de la sidebar
                      </div>

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
                              <div className="flex items-center gap-2 min-w-0">
                                {opt.icon}
                                <span className="text-sm font-medium truncate">
                                  {opt.label}
                                </span>
                              </div>
                              {theme === opt.key && (
                                <span className="text-xs">✅</span>
                              )}
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
    </>
  );
}

function NavItem({
  open,
  href,
  icon,
  label,
  styles,
  active,
  onNavigate,
}: {
  open: boolean;
  href: string;
  icon: React.ReactNode;
  label: string;
  styles: any;
  active?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={[
        "flex items-center gap-3 p-3 rounded-2xl transition border border-transparent",
        active ? styles.itemActive : styles.item,
      ].join(" ")}
      title={!open ? label : undefined}
    >
      <span className="shrink-0">{icon}</span>
      {open && <span className="text-sm font-medium truncate">{label}</span>}
    </Link>
  );
}

function SubItem({
  href,
  icon,
  label,
  active,
  styles,
  onNavigate,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
  styles: any;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={[
        "flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition",
        active ? styles.childItemActive : styles.childItem,
      ].join(" ")}
    >
      <span className="opacity-90 shrink-0">{icon}</span>
      <span className="font-medium truncate">{label}</span>
    </Link>
  );
} 