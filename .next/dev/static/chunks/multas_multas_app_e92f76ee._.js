(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/multas/multas/app/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/user-cog.js [app-client] (ecmascript) <export default as UserCog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sunset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sunset$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/sunset.js [app-client] (ecmascript) <export default as Sunset>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/folder.js [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/user-round.js [app-client] (ecmascript) <export default as UserRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$app$2d$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppWindow$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/app-window.js [app-client] (ecmascript) <export default as AppWindow>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const themeOptions = [
    {
        key: "principal",
        label: "Principal",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
            lineNumber: 41,
            columnNumber: 49
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        key: "oscuro",
        label: "Oscuro",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
            lineNumber: 42,
            columnNumber: 43
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        key: "cafe",
        label: "Café",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
            lineNumber: 43,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        key: "aurora",
        label: "Aurora",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
            lineNumber: 44,
            columnNumber: 43
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        key: "bosque",
        label: "Bosque",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
            lineNumber: 45,
            columnNumber: 43
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        key: "atardecer",
        label: "Atardecer",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sunset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sunset$3e$__["Sunset"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
            lineNumber: 46,
            columnNumber: 49
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function Sidebar() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [settingsOpen, setSettingsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("sesion");
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("principal");
    const [collectionOpen, setCollectionOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Cargar tema
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            const saved = window.localStorage.getItem("sidebarTheme");
            if (saved) setTheme(saved);
        }
    }["Sidebar.useEffect"], []);
    // Guardar tema
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            window.localStorage.setItem("sidebarTheme", theme);
        }
    }["Sidebar.useEffect"], [
        theme
    ]);
    // ✅ Al retraer, cerrar ajustes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            if (!open) {
                setSettingsOpen(false);
                setCollectionOpen(false);
            }
        }
    }["Sidebar.useEffect"], [
        open
    ]);
    // ✅ CSS var para que el layout se ajuste (main no se meta debajo)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            const w = open ? "18rem" : "88px";
            document.documentElement.style.setProperty("--sidebar-w", w);
            return ({
                "Sidebar.useEffect": ()=>{
                    document.documentElement.style.removeProperty("--sidebar-w");
                }
            })["Sidebar.useEffect"];
        }
    }["Sidebar.useEffect"], [
        open
    ]);
    const handleLogout = async ()=>{
        try {
            const res = await fetch("/api/logout", {
                method: "POST"
            });
            if (!res.ok) return console.error("Error al cerrar sesión");
            router.push("/");
        } catch (error) {
            console.error("Error en el logout:", error);
        }
    };
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Sidebar.useMemo[styles]": ()=>{
            const principal = {
                shell: "bg-gradient-to-b from-sky-100/70 to-stone-100/60 backdrop-blur-xl text-slate-800 border-sky-200/40",
                brand: "text-slate-900",
                item: "hover:bg-sky-200/40 hover:shadow-sm text-slate-700",
                itemActive: "bg-white/70 shadow-md text-slate-900",
                divider: "border-sky-200/40",
                subtle: "text-slate-500",
                panel: "bg-white/60 backdrop-blur-xl border-sky-200/40 shadow-lg",
                tab: "bg-white/40 hover:bg-white/60 border-sky-200/40 text-slate-600",
                tabActive: "bg-white/80 border-sky-300/50 text-slate-900 shadow",
                button: "bg-gradient-to-r from-amber-700 to-stone-700 text-white hover:from-amber-800 hover:to-stone-800",
                ghost: "hover:bg-sky-200/30",
                iconBox: "bg-white/60 border-sky-200/40 shadow-sm",
                iconBoxHover: "hover:bg-white/80",
                card: "bg-white/50 border-sky-200/40",
                childWrap: "bg-white/40 border-sky-200/40",
                childBorder: "border-sky-200/50",
                childItem: "text-slate-700 hover:bg-white/60",
                childItemActive: "bg-white/80 text-slate-900 shadow-sm",
                caret: "text-slate-500"
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
                caret: "text-slate-100/60"
            };
            const cafe = {
                shell: "bg-gradient-to-b from-amber-50/70 to-stone-100/60 backdrop-blur-xl text-stone-800 border-amber-200/40",
                brand: "text-stone-900",
                item: "hover:bg-amber-200/35 hover:shadow-sm text-stone-700",
                itemActive: "bg-white/70 shadow-md text-stone-900",
                divider: "border-amber-200/40",
                subtle: "text-stone-500",
                panel: "bg-white/60 backdrop-blur-xl border-amber-200/40 shadow-lg",
                tab: "bg-white/40 hover:bg-white/60 border-amber-200/40 text-stone-600",
                tabActive: "bg-white/80 border-amber-300/50 text-stone-900 shadow",
                button: "bg-gradient-to-r from-stone-800 to-amber-800 text-white hover:from-stone-900 hover:to-amber-900",
                ghost: "hover:bg-amber-200/25",
                iconBox: "bg-white/60 border-amber-200/40 shadow-sm",
                iconBoxHover: "hover:bg-white/80",
                card: "bg-white/50 border-amber-200/40",
                childWrap: "bg-white/40 border-amber-200/40",
                childBorder: "border-amber-200/50",
                childItem: "text-stone-700 hover:bg-white/60",
                childItemActive: "bg-white/80 text-stone-900 shadow-sm",
                caret: "text-stone-500"
            };
            const aurora = {
                shell: "bg-gradient-to-b from-cyan-100/70 to-indigo-100/55 backdrop-blur-xl text-slate-800 border-cyan-200/40",
                brand: "text-slate-900",
                item: "hover:bg-cyan-200/35 hover:shadow-sm text-slate-700",
                itemActive: "bg-white/70 shadow-md text-slate-900",
                divider: "border-cyan-200/40",
                subtle: "text-slate-500",
                panel: "bg-white/60 backdrop-blur-xl border-cyan-200/40 shadow-lg",
                tab: "bg-white/40 hover:bg-white/60 border-cyan-200/40 text-slate-600",
                tabActive: "bg-white/80 border-cyan-300/50 text-slate-900 shadow",
                button: "bg-gradient-to-r from-indigo-700 to-cyan-700 text-white hover:from-indigo-800 hover:to-cyan-800",
                ghost: "hover:bg-cyan-200/25",
                iconBox: "bg-white/60 border-cyan-200/40 shadow-sm",
                iconBoxHover: "hover:bg-white/80",
                card: "bg-white/50 border-cyan-200/40",
                childWrap: "bg-white/40 border-cyan-200/40",
                childBorder: "border-cyan-200/50",
                childItem: "text-slate-700 hover:bg-white/60",
                childItemActive: "bg-white/80 text-slate-900 shadow-sm",
                caret: "text-slate-500"
            };
            const bosque = {
                shell: "bg-gradient-to-b from-emerald-50/75 to-lime-50/60 backdrop-blur-xl text-slate-800 border-emerald-200/40",
                brand: "text-slate-900",
                item: "hover:bg-emerald-200/30 hover:shadow-sm text-slate-700",
                itemActive: "bg-white/70 shadow-md text-slate-900",
                divider: "border-emerald-200/40",
                subtle: "text-slate-500",
                panel: "bg-white/60 backdrop-blur-xl border-emerald-200/40 shadow-lg",
                tab: "bg-white/40 hover:bg-white/60 border-emerald-200/40 text-slate-600",
                tabActive: "bg-white/80 border-emerald-300/50 text-slate-900 shadow",
                button: "bg-gradient-to-r from-emerald-700 to-lime-700 text-white hover:from-emerald-800 hover:to-lime-800",
                ghost: "hover:bg-emerald-200/25",
                iconBox: "bg-white/60 border-emerald-200/40 shadow-sm",
                iconBoxHover: "hover:bg-white/80",
                card: "bg-white/50 border-emerald-200/40",
                childWrap: "bg-white/40 border-emerald-200/40",
                childBorder: "border-emerald-200/50",
                childItem: "text-slate-700 hover:bg-white/60",
                childItemActive: "bg-white/80 text-slate-900 shadow-sm",
                caret: "text-slate-500"
            };
            const atardecer = {
                shell: "bg-gradient-to-b from-rose-50/75 to-amber-50/60 backdrop-blur-xl text-slate-800 border-rose-200/40",
                brand: "text-slate-900",
                item: "hover:bg-rose-200/30 hover:shadow-sm text-slate-700",
                itemActive: "bg-white/70 shadow-md text-slate-900",
                divider: "border-rose-200/40",
                subtle: "text-slate-500",
                panel: "bg-white/60 backdrop-blur-xl border-rose-200/40 shadow-lg",
                tab: "bg-white/40 hover:bg-white/60 border-rose-200/40 text-slate-600",
                tabActive: "bg-white/80 border-rose-300/50 text-slate-900 shadow",
                button: "bg-gradient-to-r from-rose-700 to-amber-700 text-white hover:from-rose-800 hover:to-amber-800",
                ghost: "hover:bg-rose-200/25",
                iconBox: "bg-white/60 border-rose-200/40 shadow-sm",
                iconBoxHover: "hover:bg-white/80",
                card: "bg-white/50 border-rose-200/40",
                childWrap: "bg-white/40 border-rose-200/40",
                childBorder: "border-rose-200/50",
                childItem: "text-slate-700 hover:bg-white/60",
                childItemActive: "bg-white/80 text-slate-900 shadow-sm",
                caret: "text-slate-500"
            };
            const map = {
                principal,
                oscuro,
                cafe,
                aurora,
                bosque,
                atardecer
            };
            return map[theme] ?? principal;
        }
    }["Sidebar.useMemo[styles]"], [
        theme
    ]);
    // ✅ Para marcar Collection “active” cuando estás dentro de /gestion/collection/...
    const isCollectionRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Sidebar.useMemo[isCollectionRoute]": ()=>{
            if (!pathname) return false;
            return pathname.startsWith("/gestion/collection");
        }
    }["Sidebar.useMemo[isCollectionRoute]"], [
        pathname
    ]);
    // ✅ Auto-abrir Collection si estoy en esa ruta (cuando sidebar está open)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            if (open && isCollectionRoute) setCollectionOpen(true);
        }
    }["Sidebar.useEffect"], [
        open,
        isCollectionRoute
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: [
            open ? "w-72" : "w-[88px]",
            "fixed left-0 top-0 h-screen transition-all duration-300 flex flex-col border-r z-[9999] isolate",
            styles.shell
        ].join(" "),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: [
                                    "h-10 w-10 rounded-2xl border flex items-center justify-center",
                                    styles.iconBox
                                ].join(" "),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this),
                            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: [
                                    "font-semibold tracking-tight",
                                    styles.brand
                                ].join(" "),
                                children: "Panel"
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                lineNumber: 284,
                                columnNumber: 20
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setOpen((v)=>!v),
                        className: [
                            "h-10 w-10 rounded-2xl border flex items-center justify-center transition",
                            styles.iconBox,
                            styles.iconBoxHover
                        ].join(" "),
                        "aria-label": open ? "Contraer sidebar" : "Expandir sidebar",
                        title: open ? "Contraer" : "Expandir",
                        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                            lineNumber: 297,
                            columnNumber: 19
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                            lineNumber: 297,
                            columnNumber: 47
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: [
                    "mx-4 border-t",
                    styles.divider
                ].join(" ")
            }, void 0, false, {
                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex flex-col gap-2 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        open: open,
                        href: "/gestion",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                            lineNumber: 306,
                            columnNumber: 52
                        }, void 0),
                        label: "Inicio",
                        styles: styles
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        open: open,
                        href: "/gestion/multas",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                            lineNumber: 307,
                            columnNumber: 59
                        }, void 0),
                        label: "Multas",
                        styles: styles
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        open: open,
                        href: "/gestion/reportes",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                            lineNumber: 310,
                            columnNumber: 61
                        }, void 0),
                        label: "Reportes",
                        styles: styles
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (!open) {
                                        setOpen(true);
                                        return;
                                    }
                                    setCollectionOpen((v)=>!v);
                                },
                                className: [
                                    "w-full flex items-center gap-3 p-3 rounded-2xl transition border border-transparent group",
                                    isCollectionRoute ? styles.itemActive : styles.item
                                ].join(" "),
                                "aria-expanded": collectionOpen,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this),
                                    open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium flex-1",
                                                children: "Collection"
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                lineNumber: 331,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: [
                                                    "h-7 px-2 rounded-xl border flex items-center justify-center transition",
                                                    styles.card
                                                ].join(" "),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 16,
                                                    className: [
                                                        "transition",
                                                        collectionOpen ? "rotate-180" : "",
                                                        styles.caret
                                                    ].join(" ")
                                                }, void 0, false, {
                                                    fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                lineNumber: 333,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this),
                            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: [
                                    "mt-2 overflow-hidden transition-all duration-300",
                                    collectionOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                ].join(" "),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: [
                                        "rounded-2xl border p-2",
                                        styles.childWrap
                                    ].join(" "),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: [
                                            "ml-1 pl-3 border-l flex flex-col gap-1",
                                            styles.childBorder
                                        ].join(" "),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubItem, {
                                                href: "/gestion/collection/casos",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 27
                                                }, void 0),
                                                label: "Casos",
                                                active: pathname === "/gestion/collection/casos",
                                                styles: styles
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                lineNumber: 362,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubItem, {
                                                href: "/gestion/collection/aplicaciones",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$app$2d$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppWindow$3e$__["AppWindow"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 27
                                                }, void 0),
                                                label: "Aplicaciones",
                                                active: pathname === "/gestion/collection/aplicaciones",
                                                styles: styles
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                lineNumber: 369,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                        lineNumber: 360,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                    lineNumber: 359,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                lineNumber: 353,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        open: open,
                        href: "/gestion/base",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                            lineNumber: 383,
                            columnNumber: 57
                        }, void 0),
                        label: "Base de datos",
                        styles: styles
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                        lineNumber: 383,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        open: open,
                        href: "/gestion/usuarios",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                            lineNumber: 384,
                            columnNumber: 61
                        }, void 0),
                        label: "Usuarios",
                        styles: styles
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        open: open,
                        href: "/gestion/base-datos",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                            lineNumber: 387,
                            columnNumber: 63
                        }, void 0),
                        label: "Base de datos",
                        styles: styles
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: [
                        "border-t pt-4",
                        styles.divider
                    ].join(" "),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                if (!open) {
                                    setOpen(true);
                                    setSettingsOpen(false);
                                    return;
                                }
                                setSettingsOpen((v)=>!v);
                            },
                            className: [
                                "w-full flex items-center gap-3 p-3 rounded-2xl border transition",
                                styles.card
                            ].join(" "),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                    lineNumber: 407,
                                    columnNumber: 13
                                }, this),
                                open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: "Ajustes"
                                        }, void 0, false, {
                                            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                            lineNumber: 410,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: [
                                                "text-xs",
                                                styles.subtle
                                            ].join(" "),
                                            children: settingsOpen ? "abierto" : "cerrado"
                                        }, void 0, false, {
                                            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                            lineNumber: 411,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                    lineNumber: 409,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                            lineNumber: 393,
                            columnNumber: 11
                        }, this),
                        settingsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: [
                                "mt-3 p-3 rounded-2xl border",
                                styles.panel
                            ].join(" "),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setTab("sesion"),
                                            className: [
                                                "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl border text-sm transition",
                                                tab === "sesion" ? styles.tabActive : styles.tab
                                            ].join(" "),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__["UserCog"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 19
                                                }, this),
                                                open && "Sesión"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                            lineNumber: 422,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setTab("diseno"),
                                            className: [
                                                "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl border text-sm transition",
                                                tab === "diseno" ? styles.tabActive : styles.tab
                                            ].join(" "),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 19
                                                }, this),
                                                open && "Diseño"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                            lineNumber: 433,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                    lineNumber: 421,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3",
                                    children: tab === "sesion" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: [
                                                    "w-full flex items-center gap-3 p-3 rounded-2xl border transition",
                                                    styles.card
                                                ].join(" "),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__["UserCog"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium",
                                                        children: "Cambiar sesión"
                                                    }, void 0, false, {
                                                        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                lineNumber: 448,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleLogout,
                                                className: [
                                                    "w-full flex items-center gap-3 p-3 rounded-2xl transition",
                                                    styles.button
                                                ].join(" "),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold",
                                                        children: "Cerrar sesión"
                                                    }, void 0, false, {
                                                        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                lineNumber: 459,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                        lineNumber: 447,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: [
                                                    "text-xs",
                                                    styles.subtle
                                                ].join(" "),
                                                children: "Tema de la sidebar"
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                lineNumber: 472,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-h-56 overflow-y-auto pr-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 gap-2",
                                                    children: themeOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setTheme(opt.key),
                                                            className: [
                                                                "w-full flex items-center justify-between gap-3 p-3 rounded-2xl border transition",
                                                                styles.card
                                                            ].join(" "),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        opt.icon,
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-medium",
                                                                            children: opt.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                                            lineNumber: 487,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                                    lineNumber: 485,
                                                                    columnNumber: 29
                                                                }, this),
                                                                theme === opt.key && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs",
                                                                    children: "✅"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                                    lineNumber: 489,
                                                                    columnNumber: 51
                                                                }, this)
                                                            ]
                                                        }, opt.key, true, {
                                                            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                            lineNumber: 477,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                                lineNumber: 474,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                        lineNumber: 471,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                    lineNumber: 445,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                            lineNumber: 419,
                            columnNumber: 13
                        }, this),
                        !open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            className: [
                                "mt-3 w-full flex items-center justify-center p-3 rounded-2xl transition",
                                styles.ghost
                            ].join(" "),
                            "aria-label": "Cerrar sesión",
                            title: "Cerrar sesión",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                                lineNumber: 510,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                            lineNumber: 501,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                    lineNumber: 392,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                lineNumber: 391,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "y7HzRy1+kqBRjrr6iRsIGjRpYlM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
function NavItem({ open, href, icon, label, styles }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: [
            "flex items-center gap-3 p-3 rounded-2xl transition border border-transparent",
            styles.item
        ].join(" "),
        title: !open ? label : undefined,
        children: [
            icon,
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium",
                children: label
            }, void 0, false, {
                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                lineNumber: 542,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
        lineNumber: 533,
        columnNumber: 5
    }, this);
}
_c1 = NavItem;
function SubItem({ href, icon, label, active, styles }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: [
            "flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition",
            active ? styles.childItemActive : styles.childItem
        ].join(" "),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "opacity-90",
                children: icon
            }, void 0, false, {
                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                lineNumber: 568,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium",
                children: label
            }, void 0, false, {
                fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
                lineNumber: 569,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multas/multas/app/components/Sidebar.tsx",
        lineNumber: 561,
        columnNumber: 5
    }, this);
}
_c2 = SubItem;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Sidebar");
__turbopack_context__.k.register(_c1, "NavItem");
__turbopack_context__.k.register(_c2, "SubItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CasosToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CasosToolbar({ filters, onChange, onOpenImport, onOpenAutoAssign, onResetAssign, onResegment, onWipeDb, role }) {
    _s();
    const set = (k, v)=>onChange({
            ...filters,
            [k]: v
        });
    const anyFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CasosToolbar.useMemo[anyFilter]": ()=>Object.values(filters).some({
                "CasosToolbar.useMemo[anyFilter]": (v)=>String(v).trim() !== ""
            }["CasosToolbar.useMemo[anyFilter]"])
    }["CasosToolbar.useMemo[anyFilter]"], [
        filters
    ]);
    const [dangerBusy, setDangerBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    async function confirmAndRun(kind) {
        const msg = kind === "wipe" ? "⚠️ Esto borrará la base de casos. ¿Seguro que deseas continuar?" : "⚠️ Esto resegmentará/recalculará asignaciones. ¿Continuar?";
        if (!confirm(msg)) return;
        try {
            setDangerBusy(kind);
            if (kind === "wipe") await onWipeDb();
            else await onResegment();
        } finally{
            setDangerBusy(null);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "   rounded-3xl   bg-white/55 backdrop-blur-xl   border border-slate-200/60   shadow-[0_8px_30px_rgba(15,23,42,0.06)]   p-4   space-y-4   ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-slate-700",
                        children: "Filtros"
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onOpenImport,
                                className: "rounded-2xl px-4 py-2 text-sm font-semibold bg-gradient-to-r from-sky-700 to-indigo-700 text-white hover:from-sky-800 hover:to-indigo-800 transition",
                                type: "button",
                                children: "Importar"
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            role === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onOpenAutoAssign,
                                        className: "rounded-2xl px-4 py-2 text-sm font-semibold bg-white/70 border border-slate-200/70 hover:bg-white transition",
                                        type: "button",
                                        children: "Asignar automático"
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onResetAssign,
                                        className: "rounded-2xl px-4 py-2 text-sm font-semibold bg-white/70 border border-slate-200/70 hover:bg-white transition",
                                        type: "button",
                                        children: "Reiniciar"
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>confirmAndRun("wipe"),
                                        disabled: dangerBusy !== null,
                                        className: "rounded-2xl px-4 py-2 text-sm font-semibold bg-rose-600 text-white hover:bg-rose-700 transition disabled:opacity-60",
                                        type: "button",
                                        title: "Borra toda la base de casos",
                                        children: dangerBusy === "wipe" ? "Borrando..." : "Borrar base"
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            anyFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onChange({
                                        numero_prestamo: "",
                                        nombre_cliente: "",
                                        telefono_cliente: "",
                                        producto: "",
                                        estado_pago: "",
                                        collection_account: ""
                                    }),
                                className: "rounded-2xl px-4 py-2 text-sm bg-white/70 border border-slate-200/70 hover:bg-white transition",
                                type: "button",
                                children: "Limpiar filtros"
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: filters.numero_prestamo,
                        onChange: (e)=>set("numero_prestamo", e.target.value),
                        placeholder: "N° préstamo",
                        className: "rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2 text-sm"
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: filters.nombre_cliente,
                        onChange: (e)=>set("nombre_cliente", e.target.value),
                        placeholder: "Cliente",
                        className: "rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2 text-sm"
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: filters.telefono_cliente,
                        onChange: (e)=>set("telefono_cliente", e.target.value),
                        placeholder: "Teléfono",
                        className: "rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2 text-sm"
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: filters.producto,
                        onChange: (e)=>set("producto", e.target.value),
                        placeholder: "Producto",
                        className: "rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2 text-sm"
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: filters.estado_pago,
                        onChange: (e)=>set("estado_pago", e.target.value),
                        className: "rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Estado (todos)"
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "pendiente",
                                children: "pendiente"
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "pagado",
                                children: "pagado"
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: filters.collection_account,
                        onChange: (e)=>set("collection_account", e.target.value),
                        placeholder: "Collection (id / user)",
                        className: "rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2 text-sm"
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(CasosToolbar, "SxOZFWJQ6JNeEswKPGin/MmMO0M=");
_c = CasosToolbar;
var _c;
__turbopack_context__.k.register(_c, "CasosToolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CasosTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
function money(n) {
    if (n === null || typeof n === "undefined") return "—";
    return `$${Number(n).toLocaleString()}`;
}
function CasosTable({ role, filters }) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // ✅ loading por fila para generar
    const [generating, setGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    async function load() {
        setLoading(true);
        try {
            const r = await fetch("/api/collection/casos", {
                cache: "no-store"
            });
            const j = await r.json();
            if (j?.ok && Array.isArray(j.data)) setData(j.data);
            if (role === "admin") {
                const ru = await fetch("/api/collection/assignable-users", {
                    cache: "no-store"
                });
                const ju = await ru.json();
                if (ju?.ok && Array.isArray(ju.users)) {
                    setUsers(ju.users.map((u)=>({
                            id: Number(u.id),
                            username: String(u.username ?? "")
                        })).filter((u)=>Number.isFinite(u.id) && u.username));
                }
            } else {
                setUsers([]);
            }
        } catch (err) {
            console.error(err);
        } finally{
            setLoading(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CasosTable.useEffect": ()=>{
            load();
            const handler = {
                "CasosTable.useEffect.handler": ()=>load()
            }["CasosTable.useEffect.handler"];
            window.addEventListener("casos:reload", handler);
            return ({
                "CasosTable.useEffect": ()=>window.removeEventListener("casos:reload", handler)
            })["CasosTable.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CasosTable.useEffect"], [
        role
    ]);
    async function patchCaso(numero_prestamo, body) {
        const res = await fetch(`/api/collection/casos/${numero_prestamo}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        const j = await res.json();
        if (!j.ok) throw new Error(j.error || "Error guardando");
        setData((prev)=>prev.map((x)=>x.numero_prestamo === numero_prestamo ? j.data : x));
    }
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CasosTable.useMemo[filtered]": ()=>{
            const s = {
                "CasosTable.useMemo[filtered].s": (v)=>String(v ?? "").toLowerCase().trim()
            }["CasosTable.useMemo[filtered].s"];
            const onlyDigits = {
                "CasosTable.useMemo[filtered].onlyDigits": (v)=>String(v ?? "").replace(/\D/g, "")
            }["CasosTable.useMemo[filtered].onlyDigits"];
            return data.filter({
                "CasosTable.useMemo[filtered]": (r)=>{
                    if (filters.numero_prestamo && !s(r.numero_prestamo).includes(s(filters.numero_prestamo))) return false;
                    if (filters.nombre_cliente && !s(r.nombre_cliente).includes(s(filters.nombre_cliente))) return false;
                    if (filters.telefono_cliente) {
                        if (!onlyDigits(r.telefono_cliente).includes(onlyDigits(filters.telefono_cliente))) return false;
                    }
                    if (filters.producto && !s(r.producto).includes(s(filters.producto))) return false;
                    if (filters.estado_pago && r.estado_pago !== filters.estado_pago) return false;
                    if (filters.collection_account) {
                        if (!s(r.collection_account).includes(s(filters.collection_account))) return false;
                    }
                    return true;
                }
            }["CasosTable.useMemo[filtered]"]);
        }
    }["CasosTable.useMemo[filtered]"], [
        data,
        filters
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 text-sm text-slate-500",
            children: "Cargando casos…"
        }, void 0, false, {
            fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
            lineNumber: 114,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto rounded-3xl bg-white/55 backdrop-blur-xl border border-slate-200/60 shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 pt-4 text-xs text-slate-500",
                children: [
                    "Mostrando ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: filtered.length
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                        lineNumber: 120,
                        columnNumber: 19
                    }, this),
                    " de ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: data.length
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                        lineNumber: 120,
                        columnNumber: 47
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "min-w-full text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "bg-slate-100/70 text-slate-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "th",
                                    children: "N° Préstamo"
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "th",
                                    children: "Cliente"
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "th",
                                    children: "Teléfono"
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "th",
                                    children: "Importe Adeudado"
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "th",
                                    children: "Valor Recaudado"
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "th",
                                    children: "Producto"
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "th",
                                    children: "Segmento"
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "th",
                                    children: "Fecha de Cobro"
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "th",
                                    children: "Estado de Pago"
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "th",
                                    children: "Collection Account"
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "th text-center",
                                    children: "Operar"
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: filtered.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-t border-slate-200/60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "td",
                                        children: row.numero_prestamo
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "td",
                                        children: row.nombre_cliente
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "td",
                                        children: row.telefono_cliente
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "td",
                                        children: money(row.valor_deuda)
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "td",
                                        children: role === "admin" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputEnterSave, {
                                            initial: row.valor_recaudado ?? 0,
                                            onEnter: async (val)=>patchCaso(row.numero_prestamo, {
                                                    valor_recaudado: val
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                            lineNumber: 150,
                                            columnNumber: 19
                                        }, this) : money(row.valor_recaudado)
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "td",
                                        children: row.producto
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "td",
                                        children: row.segmento ?? "-"
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "td",
                                        children: new Date(row.fecha_cobro).toLocaleDateString()
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "td",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            disabled: role !== "admin",
                                            onClick: ()=>role === "admin" && patchCaso(row.numero_prestamo, {
                                                    estado_pago: row.estado_pago === "pagado" ? "pendiente" : "pagado"
                                                }),
                                            className: [
                                                "px-2 py-1 rounded-full text-xs font-medium",
                                                row.estado_pago === "pagado" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                                            ].join(" "),
                                            children: row.estado_pago
                                        }, void 0, false, {
                                            fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "td",
                                        children: role === "admin" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "w-full rounded-xl border border-slate-200/70 bg-white/70 px-3 py-2 text-sm",
                                            value: row.collection_account ?? "",
                                            onChange: (e)=>patchCaso(row.numero_prestamo, {
                                                    collection_account: e.target.value ? Number(e.target.value) : null
                                                }),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "— Sin asignar —"
                                                }, void 0, false, {
                                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, this),
                                                users.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: u.id,
                                                        children: u.username
                                                    }, u.id, false, {
                                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                            lineNumber: 189,
                                            columnNumber: 19
                                        }, this) : row.collection_account ?? "—"
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "td text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-sky-700 hover:underline disabled:opacity-50",
                                                    disabled: !!row.liga_pago || generating[row.numero_prestamo],
                                                    onClick: async ()=>{
                                                        const key = row.numero_prestamo;
                                                        try {
                                                            setGenerating((p)=>({
                                                                    ...p,
                                                                    [key]: true
                                                                }));
                                                            const res = await fetch(`/api/collection/casos/${encodeURIComponent(key)}/generar-liga`, {
                                                                method: "POST"
                                                            });
                                                            const j = await res.json();
                                                            if (!j?.ok) throw new Error(j?.error || "Error generando liga");
                                                            window.dispatchEvent(new Event("casos:reload"));
                                                            if (j.link) {
                                                                window.open(j.link, "_blank", "noopener,noreferrer");
                                                            }
                                                        } catch (e) {
                                                            alert(e?.message || "Error");
                                                        } finally{
                                                            setGenerating((p)=>({
                                                                    ...p,
                                                                    [key]: false
                                                                }));
                                                        }
                                                    },
                                                    children: generating[row.numero_prestamo] ? "Generando…" : "Generar"
                                                }, void 0, false, {
                                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-emerald-700 hover:underline disabled:opacity-50",
                                                    disabled: !row.liga_pago,
                                                    onClick: ()=>row.liga_pago && window.open(row.liga_pago, "_blank", "noopener,noreferrer"),
                                                    children: "Entrar"
                                                }, void 0, false, {
                                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, row.numero_prestamo, true, {
                                fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s(CasosTable, "nhfS8KqUFj1VLlfixzbuldmQctQ=");
_c = CasosTable;
function InputEnterSave({ initial, onEnter }) {
    _s1();
    const [val, setVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(String(initial));
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: val,
                onChange: (e)=>setVal(e.target.value),
                onKeyDown: async (e)=>{
                    if (e.key !== "Enter") return;
                    const num = Number(String(val).replace(/[^\d.-]/g, ""));
                    if (!Number.isFinite(num)) return;
                    setSaving(true);
                    try {
                        await onEnter(num);
                    } finally{
                        setSaving(false);
                    }
                },
                className: "w-32 rounded-xl border border-slate-200/70 bg-white/70 px-3 py-2 text-sm"
            }, void 0, false, {
                fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-slate-400",
                children: saving ? "guardando…" : "ENTER"
            }, void 0, false, {
                fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx",
        lineNumber: 275,
        columnNumber: 5
    }, this);
}
_s1(InputEnterSave, "uK9JM9UsnGTzCzr/5M2X8gnMev4=");
_c1 = InputEnterSave;
var _c, _c1;
__turbopack_context__.k.register(_c, "CasosTable");
__turbopack_context__.k.register(_c1, "InputEnterSave");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CasosView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$app$2f$gestion$2f$collection$2f$casos$2f$components$2f$CasosToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/app/gestion/collection/casos/components/CasosToolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$app$2f$gestion$2f$collection$2f$casos$2f$components$2f$CasosTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/app/gestion/collection/casos/components/CasosTable.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
function CasosView() {
    _s();
    const role = "admin";
    const [importOpen, setImportOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [autoOpen, setAutoOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        numero_prestamo: "",
        nombre_cliente: "",
        telefono_cliente: "",
        producto: "",
        estado_pago: "",
        collection_account: ""
    });
    // ✅ Reiniciar asignaciones
    const onResetAssign = async ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const res = await fetch("/api/collection/casos/reset-assign", {
                method: "POST",
                headers: {
                    "x-role": "admin"
                },
                credentials: "include"
            });
            const j = await res.json().catch(()=>null);
            if (!res.ok || !j?.ok) throw new Error(j?.error || "Error reiniciando");
            window.dispatchEvent(new Event("casos:reload"));
        } catch (e) {
            alert(e?.message || "Error");
        }
    };
    // ✅ Resegmentar (si ya tienes el endpoint; si no existe, puedes quitar el botón o crear este API)
    const resegment = async ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const res = await fetch("/api/collection/casos/resegment", {
                method: "POST",
                headers: {
                    "x-role": "admin"
                },
                credentials: "include"
            });
            const j = await res.json().catch(()=>null);
            if (!res.ok || !j?.ok) throw new Error(j?.error || "Error resegmentando");
            window.dispatchEvent(new Event("casos:reload"));
        } catch (e) {
            alert(e?.message || "Error");
        }
    };
    // ✅ Borrar base
    const wipeDb = async ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const res = await fetch("/api/collection/casos/wipe", {
                method: "POST",
                headers: {
                    "x-role": "admin"
                },
                credentials: "include"
            });
            const j = await res.json().catch(()=>null);
            if (!res.ok || !j?.ok) throw new Error(j?.error || "Error borrando base");
            window.dispatchEvent(new Event("casos:reload"));
        } catch (e) {
            alert(e?.message || "Error");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-semibold tracking-tight",
                            children: "Casos"
                        }, void 0, false, {
                            fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 mt-1",
                            children: "Gestión y seguimiento de casos importados."
                        }, void 0, false, {
                            fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$app$2f$gestion$2f$collection$2f$casos$2f$components$2f$CasosToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                filters: filters,
                onChange: setFilters,
                onOpenImport: ()=>setImportOpen(true),
                onOpenAutoAssign: ()=>setAutoOpen(true),
                onResetAssign: onResetAssign,
                onResegment: resegment,
                onWipeDb: wipeDb,
                role: role
            }, void 0, false, {
                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$app$2f$gestion$2f$collection$2f$casos$2f$components$2f$CasosTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                role: role,
                filters: filters
            }, void 0, false, {
                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            importOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImportModal, {
                onClose: ()=>setImportOpen(false),
                onDone: ()=>window.dispatchEvent(new Event("casos:reload"))
            }, void 0, false, {
                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this),
            autoOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AutoAssignModal, {
                onClose: ()=>setAutoOpen(false),
                onDone: ()=>window.dispatchEvent(new Event("casos:reload"))
            }, void 0, false, {
                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(CasosView, "LVa/Wdqe1M4HE1MzZmVr2NQrPiI=");
_c = CasosView;
/* ----------------------- MODAL IMPORT ----------------------- */ function ImportModal({ onClose, onDone }) {
    _s1();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleUpload = async ()=>{
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
                body: form
            });
            const j = await res.json().catch(()=>null);
            if (!res.ok || !j?.ok) {
                throw new Error(j?.error || "Error al importar");
            }
            setMsg(`✅ Importado: ${j.imported ?? 0} filas`);
            setFile(null);
            onDone();
        } catch (e) {
            setMsg(`❌ ${e?.message || "Error inesperado"}`);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[99999] flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "absolute inset-0 bg-black/30",
                onClick: onClose,
                "aria-label": "Cerrar"
            }, void 0, false, {
                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-xl rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-[0_20px_60px_rgba(15,23,42,0.20)] p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-slate-900",
                                        children: "Importar Casos"
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500 mt-1",
                                        children: [
                                            "Sube un archivo ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "CSV"
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                                lineNumber: 183,
                                                columnNumber: 31
                                            }, this),
                                            " o ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Excel"
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                                lineNumber: 183,
                                                columnNumber: 44
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "rounded-2xl border border-slate-200/70 bg-white/60 px-3 py-2 text-sm hover:bg-white transition",
                                children: "Cerrar"
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-slate-200/70 bg-white/60 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-medium text-slate-800",
                                        children: "Archivo"
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 mt-1",
                                        children: "Formatos: .csv, .xlsx, .xls"
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
                                        className: "mt-3 block w-full text-sm text-slate-700 file:mr-4 file:rounded-2xl file:border file:border-slate-200/70 file:bg-white/70 file:px-4 file:py-2 file:text-sm file:font-medium hover:file:bg-white",
                                        onChange: (e)=>setFile(e.target.files?.[0] || null)
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 text-xs text-slate-600",
                                        children: [
                                            "Seleccionado:",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: file.name
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            msg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-slate-200/70 bg-white/60 p-3 text-sm text-slate-700",
                                children: msg
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-end gap-2 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-2 text-sm hover:bg-white transition",
                                        disabled: loading,
                                        children: "Cancelar"
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleUpload,
                                        disabled: loading,
                                        className: "rounded-2xl px-4 py-2 text-sm font-semibold bg-gradient-to-r from-sky-700 to-indigo-700 text-white hover:from-sky-800 hover:to-indigo-800 disabled:opacity-60 disabled:cursor-not-allowed transition",
                                        children: loading ? "Subiendo..." : "Subir"
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s1(ImportModal, "P1Uc8E/G9t9zz/v6vtXzRdmODIY=");
_c1 = ImportModal;
function AutoAssignModal({ onClose, onDone }) {
    _s2();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AutoAssignModal.useEffect": ()=>{
            ({
                "AutoAssignModal.useEffect": async ()=>{
                    try {
                        const r = await fetch("/api/collection/assignable-users", {
                            cache: "no-store",
                            credentials: "include"
                        });
                        const j = await r.json().catch({
                            "AutoAssignModal.useEffect": ()=>null
                        }["AutoAssignModal.useEffect"]);
                        if (j?.ok && Array.isArray(j.users)) {
                            const u = j.users.map({
                                "AutoAssignModal.useEffect.u": (x)=>({
                                        id: Number(x.id),
                                        username: String(x.username ?? "")
                                    })
                            }["AutoAssignModal.useEffect.u"]).filter({
                                "AutoAssignModal.useEffect.u": (x)=>Number.isFinite(x.id) && x.username
                            }["AutoAssignModal.useEffect.u"]);
                            setUsers(u);
                            const map = {};
                            u.forEach({
                                "AutoAssignModal.useEffect": (x)=>map[x.id] = true
                            }["AutoAssignModal.useEffect"]);
                            setChecked(map);
                        }
                    } catch (e) {
                        console.error(e);
                    }
                }
            })["AutoAssignModal.useEffect"]();
        }
    }["AutoAssignModal.useEffect"], []);
    const toggle = (id)=>setChecked((p)=>({
                ...p,
                [id]: !p[id]
            }));
    const allSelected = users.length > 0 && users.every((u)=>!!checked[u.id]);
    const someSelected = users.some((u)=>!!checked[u.id]) && !allSelected;
    const toggleAll = ()=>{
        setChecked((prev)=>{
            const next = {
                ...prev
            };
            const target = !allSelected;
            users.forEach((u)=>next[u.id] = target);
            return next;
        });
    };
    const run = async ()=>{
        const userIds = Object.entries(checked).filter(([, v])=>v).map(([id])=>Number(id)).filter((n)=>Number.isInteger(n) && n > 0);
        if (userIds.length === 0) {
            setMsg("Selecciona al menos 1 asesor.");
            return;
        }
        setLoading(true);
        setMsg(null);
        try {
            const res = await fetch("/api/collection/casos/auto-assign", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    userIds
                })
            });
            const j = await res.json().catch(()=>null);
            if (!res.ok || !j?.ok) throw new Error(j?.error || "Error asignando");
            setMsg(`✅ Asignados: ${j.assigned ?? 0}`);
            onDone();
            onClose();
        } catch (e) {
            setMsg(`❌ ${e?.message || "Error"}`);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[99999] flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "absolute inset-0 bg-black/30",
                onClick: onClose,
                "aria-label": "Cerrar"
            }, void 0, false, {
                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-xl rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-[0_20px_60px_rgba(15,23,42,0.20)] p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-slate-900",
                                        children: "Asignación automática"
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                        lineNumber: 352,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500 mt-1",
                                        children: "Selecciona asesores. Se asigna equitativamente (round-robin)."
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                        lineNumber: 355,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "rounded-2xl border border-slate-200/70 bg-white/60 px-3 py-2 text-sm hover:bg-white transition",
                                type: "button",
                                children: "Cerrar"
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-3 p-2 rounded-xl bg-white/50 border border-slate-200/60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: allSelected,
                                        ref: (el)=>{
                                            if (el) el.indeterminate = someSelected;
                                        },
                                        onChange: toggleAll,
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                        lineNumber: 371,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-slate-800",
                                        children: "Seleccionar todos"
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-auto text-xs text-slate-500",
                                        children: [
                                            users.filter((u)=>checked[u.id]).length,
                                            "/",
                                            users.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                        lineNumber: 383,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-64 overflow-y-auto rounded-2xl border border-slate-200/70 bg-white/60 p-3",
                                children: users.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-slate-500 p-2",
                                    children: "No hay asesores."
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                    lineNumber: 390,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: users.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-3 p-2 rounded-xl hover:bg-white/70 transition cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: !!checked[u.id],
                                                    onChange: ()=>toggle(u.id),
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-slate-800",
                                                    children: u.username
                                                }, void 0, false, {
                                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-auto text-xs text-slate-500",
                                                    children: [
                                                        "#",
                                                        u.id
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, u.id, true, {
                                            fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                            lineNumber: 394,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                    lineNumber: 392,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                lineNumber: 388,
                                columnNumber: 11
                            }, this),
                            msg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-slate-200/70 bg-white/60 p-3 text-sm text-slate-700",
                                children: msg
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                lineNumber: 413,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-end gap-2 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-2 text-sm hover:bg-white transition",
                                        disabled: loading,
                                        type: "button",
                                        children: "Cancelar"
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                        lineNumber: 419,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: run,
                                        disabled: loading,
                                        className: "rounded-2xl px-4 py-2 text-sm font-semibold bg-gradient-to-r from-sky-700 to-indigo-700 text-white hover:from-sky-800 hover:to-indigo-800 disabled:opacity-60 disabled:cursor-not-allowed transition",
                                        type: "button",
                                        children: loading ? "Asignando..." : "Asignar"
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                                lineNumber: 418,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx",
        lineNumber: 342,
        columnNumber: 5
    }, this);
}
_s2(AutoAssignModal, "+9hBN9NQmsGPdX50hsY/BqQuwJM=");
_c2 = AutoAssignModal;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CasosView");
__turbopack_context__.k.register(_c1, "ImportModal");
__turbopack_context__.k.register(_c2, "AutoAssignModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/multas/multas/app/gestion/collection/casos/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CasosPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$app$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/app/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$app$2f$gestion$2f$collection$2f$casos$2f$CasosView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/app/gestion/collection/casos/CasosView.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function CasosPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen text-slate-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$app$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/multas/multas/app/gestion/collection/casos/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "   min-h-screen   px-6 sm:px-10   py-8 sm:py-10   bg-gradient-to-b from-slate-50 via-sky-50/60 to-slate-100   transition-[padding] duration-300   ",
                style: {
                    paddingLeft: "min(var(--sidebar-w), 88px)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$app$2f$gestion$2f$collection$2f$casos$2f$CasosView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/multas/multas/app/gestion/collection/casos/page.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/multas/multas/app/gestion/collection/casos/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multas/multas/app/gestion/collection/casos/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = CasosPage;
var _c;
__turbopack_context__.k.register(_c, "CasosPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=multas_multas_app_e92f76ee._.js.map