(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PagoFastCashStatic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CopyIcon({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 9h10v10H9V9Z",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = CopyIcon;
function CheckIcon({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20 6 9 17l-5-5",
            stroke: "currentColor",
            strokeWidth: "1.9",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c1 = CheckIcon;
function normalizePayload(raw) {
    const p = raw ?? {};
    const productoLabel = p.producto_label ?? p.subproducto_label ?? p.producto ?? "Producto";
    const subproductoLabel = p.subproducto_label ?? p.subproducto ?? p.producto ?? null;
    const metodoPagoLabel = p.metodo_pago_label ?? p.metodo_pago ?? null;
    const ligaPagoLabel = p.liga_pago_label ?? p.cuenta_bancaria ?? null;
    const logoUrl = p.logo_url ?? p.url ?? p.imagen_url ?? p.logoUrl ?? p.logo ?? null;
    const monto = p.monto ?? p.importe_pagar ?? null;
    return {
        ...p,
        token: String(p.token ?? ""),
        producto_label: String(productoLabel ?? "Producto"),
        subproducto_label: subproductoLabel != null ? String(subproductoLabel) : null,
        metodo_pago_label: metodoPagoLabel != null ? String(metodoPagoLabel) : null,
        metodo_pago: p.metodo_pago != null ? String(p.metodo_pago) : null,
        liga_pago_label: ligaPagoLabel != null ? String(ligaPagoLabel) : null,
        logo_url: logoUrl != null ? String(logoUrl) : null,
        monto: monto != null ? String(monto) : null
    };
}
function PagoFastCashStatic({ token: tokenProp }) {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const token = String(tokenProp || params?.token || "").trim();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PagoFastCashStatic.useMemo[origin]": ()=>("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : window.location.origin
    }["PagoFastCashStatic.useMemo[origin]"], []);
    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(()=>setCopied(false), 1200);
        } catch  {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            setCopied(true);
            setTimeout(()=>setCopied(false), 1200);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashStatic.useEffect": ()=>{
            if (!token) {
                setError("Token no recibido en la URL");
                return;
            }
            let cancel = false;
            ({
                "PagoFastCashStatic.useEffect": async ()=>{
                    try {
                        setError(null);
                        const endpoints = [
                            `/api/plantillas-temporales-3/${encodeURIComponent(token)}`,
                            `/api/plantillas-temporales/${encodeURIComponent(token)}`
                        ];
                        let lastErr = null;
                        for (const url of endpoints){
                            const res = await fetch(url, {
                                cache: "no-store"
                            });
                            const json = await res.json().catch({
                                "PagoFastCashStatic.useEffect": ()=>({})
                            }["PagoFastCashStatic.useEffect"]);
                            if (res.ok) {
                                const payload = normalizePayload(json?.data ?? json);
                                payload.token = payload.token || token;
                                if (!cancel) setData(payload);
                                return;
                            }
                            lastErr = json?.error || `Error cargando plantilla (${res.status})`;
                        }
                        if (!cancel) setError(lastErr || "No se pudo cargar la plantilla");
                    } catch  {
                        if (!cancel) setError("Error de conexión");
                    }
                }
            })["PagoFastCashStatic.useEffect"]();
            return ({
                "PagoFastCashStatic.useEffect": ()=>{
                    cancel = true;
                }
            })["PagoFastCashStatic.useEffect"];
        }
    }["PagoFastCashStatic.useEffect"], [
        token
    ]);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-black text-white p-6 sm:p-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-red-400 font-semibold",
                    children: "Error:"
                }, void 0, false, {
                    fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 break-words",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
            lineNumber: 166,
            columnNumber: 7
        }, this);
    }
    if (!data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-black text-white p-6 sm:p-10",
            children: "Cargando..."
        }, void 0, false, {
            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
            lineNumber: 174,
            columnNumber: 12
        }, this);
    }
    const cardBg = data.card_bg_color || "#FFFFFF";
    const primaryColor = data.primary_color || "#0F56F7";
    const mostrarExtras = data.mostrar_extras !== false;
    const fotoHabilitada = data.foto_habilitada !== false;
    const logoRaw = data.logo_url ?? null;
    const logoUrl = logoRaw && typeof logoRaw === "string" && logoRaw.startsWith("/") ? `${origin}${logoRaw}` : logoRaw;
    const titulo = data.producto_label ?? data.subproducto_label ?? "Producto";
    const ligaText = String(data.liga_pago_label ?? "").trim();
    const metodoText = String(data.metodo_pago_label ?? data.metodo_pago ?? "").trim() || "—";
    const formatDateReadable = (iso)=>{
        if (!iso) return "—";
        try {
            return new Date(String(iso).slice(0, 10) + "T00:00:00").toLocaleDateString(undefined, {
                day: "2-digit",
                month: "long",
                year: "numeric"
            });
        } catch  {
            return String(iso);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen flex items-center justify-center px-3 py-6 sm:p-6 bg-[#152032]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[420px] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.45)]",
            style: {
                backgroundColor: cardBg
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[150px] sm:h-[160px] flex flex-col items-center pt-5 sm:pt-6",
                    style: {
                        background: "linear-gradient(180deg,#5CB0FF 0%,#A3D4FF 100%)"
                    },
                    children: [
                        fotoHabilitada && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow",
                            children: logoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: logoUrl,
                                className: "w-full h-full object-cover",
                                alt: "logo"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                lineNumber: 216,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-bold text-[#142546]",
                                children: "IMG"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                lineNumber: 218,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-4 sm:mt-5 text-2xl sm:text-3xl font-extrabold text-[#0F2A44] text-center px-4 leading-tight",
                            children: titulo
                        }, void 0, false, {
                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-3 sm:mx-4 -mt-4 rounded-xl p-4 text-white shadow-md",
                    style: {
                        backgroundColor: primaryColor
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs opacity-90",
                            children: "Monto de Préstamo"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl sm:text-3xl font-bold",
                            children: data.monto ?? "$0.00"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-3 sm:px-4 py-5 flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border p-3 shadow-sm",
                            style: {
                                backgroundColor: cardBg
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center py-3 border-b gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-700",
                                            children: "Importe a Pagar"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold text-gray-600 text-right break-words",
                                            children: data.importe_pagar ?? "—"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center py-3 border-b gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-700",
                                            children: "Fecha Vencimiento"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                            lineNumber: 245,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-600 text-right break-words",
                                            children: data.fecha_vencimiento ? formatDateReadable(data.fecha_vencimiento) : "dd/mm/aaaa"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center py-3 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-700",
                                            children: "Días vencimiento"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-500 text-right",
                                            children: [
                                                data.dias_vencidos ?? 0,
                                                " días"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                            lineNumber: 253,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl p-3 shadow-sm",
                            style: {
                                backgroundColor: cardBg
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-gray-700 mb-2",
                                    children: "Pago (México)"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center bg-[#F8FAFB] p-4 rounded-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500",
                                                children: metodoText
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex items-center justify-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xl sm:text-2xl font-extrabold tracking-wide text-gray-700 break-words",
                                                        children: data.liga_pago_label ?? "."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        title: copied ? "Copiado" : "Copiar",
                                                        "aria-label": copied ? "Copiado" : "Copiar liga",
                                                        onClick: ()=>ligaText && copyToClipboard(ligaText),
                                                        disabled: !ligaText,
                                                        className: "inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/70 border border-slate-200/70 text-slate-600 shadow-sm hover:bg-white hover:text-slate-800 active:scale-[0.98] transition disabled:opacity-50 disabled:cursor-not-allowed shrink-0",
                                                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 31
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CopyIcon, {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 67
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                                lineNumber: 264,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 text-[11px] text-gray-500 text-center",
                                                children: metodoText
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-[11px] text-gray-500 text-center",
                                                children: data.liga_pago_label ?? "."
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this),
                        mostrarExtras && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl p-3 shadow-sm",
                            style: {
                                backgroundColor: cardBg
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center py-2 border-b gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-700",
                                            children: "Nombre"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-700 text-right break-words",
                                            children: data.nombre_cliente ?? "—"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                            lineNumber: 291,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center py-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-700",
                                            children: "Teléfono"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                            lineNumber: 294,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-700 text-right break-words",
                                            children: data.telefono_cliente ?? "—"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                                    lineNumber: 293,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                            lineNumber: 288,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "w-full rounded-xl py-4 text-white font-semibold text-lg shadow-md",
                            style: {
                                backgroundColor: primaryColor
                            },
                            children: "Confirmar y Generar Link"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
            lineNumber: 205,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
_s(PagoFastCashStatic, "ayNgD+F35vy0MgnvvGxQM//jVU8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c2 = PagoFastCashStatic;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CopyIcon");
__turbopack_context__.k.register(_c1, "CheckIcon");
__turbopack_context__.k.register(_c2, "PagoFastCashStatic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Plantilla2Static
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function normalizePayload(raw) {
    const p = raw ?? {};
    return {
        ...p,
        token: String(p.token ?? ""),
        producto_label: p.producto_label ?? p.subproducto_label ?? p.producto ?? "PRODUCTO",
        monto: p.monto ?? p.importe_pagar ?? null,
        importe_pagar: p.importe_pagar ?? p.monto ?? null,
        metodo_pago_label: p.metodo_pago_label ?? p.metodo_pago ?? null,
        cuenta_bancaria: p.cuenta_bancaria ?? p.liga_pago_label ?? null
    };
}
function formatMoney(value) {
    if (!value) return "$0.00";
    const n = Number(String(value).replace(/[^\d.-]/g, ""));
    if (Number.isNaN(n)) return `$${value}`;
    return `$${n.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}
function formatMoneyWhole(value) {
    if (!value) return "$ 0";
    const n = Number(String(value).replace(/[^\d.-]/g, ""));
    if (Number.isNaN(n)) return `$ ${value}`;
    return `$ ${n.toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })}`;
}
function formatBigMoney(value) {
    if (!value) return "$0.00";
    const n = Number(String(value).replace(/[^\d.-]/g, ""));
    if (Number.isNaN(n)) return `$${value}`;
    const [intPart, decPart] = n.toFixed(2).split(".");
    return {
        intPart: `$${Number(intPart.replace("$", "")).toLocaleString("en-US")}`,
        decPart
    };
}
function formatDate(value) {
    if (!value) return "dd/mm/aaaa";
    const clean = String(value).slice(0, 10);
    if (!clean.includes("-")) return clean;
    const [y, m, d] = clean.split("-");
    if (!y || !m || !d) return clean;
    return `${d}-${m}-${y}`;
}
function Plantilla2Static({ token: tokenProp }) {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const token = String(tokenProp || params?.token || "").trim();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Plantilla2Static.useEffect": ()=>{
            const preventContext = {
                "Plantilla2Static.useEffect.preventContext": (e)=>e.preventDefault()
            }["Plantilla2Static.useEffect.preventContext"];
            const preventKeys = {
                "Plantilla2Static.useEffect.preventKeys": (e)=>{
                    const key = e.key.toLowerCase();
                    if (key === "f12" || e.ctrlKey && e.shiftKey && [
                        "i",
                        "j",
                        "c"
                    ].includes(key) || e.ctrlKey && key === "u") {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }
            }["Plantilla2Static.useEffect.preventKeys"];
            document.addEventListener("contextmenu", preventContext);
            window.addEventListener("keydown", preventKeys, true);
            return ({
                "Plantilla2Static.useEffect": ()=>{
                    document.removeEventListener("contextmenu", preventContext);
                    window.removeEventListener("keydown", preventKeys, true);
                }
            })["Plantilla2Static.useEffect"];
        }
    }["Plantilla2Static.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Plantilla2Static.useEffect": ()=>{
            if (!token) {
                setError("Token no recibido en la URL");
                return;
            }
            let cancel = false;
            ({
                "Plantilla2Static.useEffect": async ()=>{
                    try {
                        setError(null);
                        const endpoints = [
                            `/api/plantillas-temporales-3/${encodeURIComponent(token)}`,
                            `/api/plantillas-temporales/${encodeURIComponent(token)}`
                        ];
                        let loaded = false;
                        let lastErr = null;
                        for (const url of endpoints){
                            const res = await fetch(url, {
                                cache: "no-store"
                            });
                            const json = await res.json().catch({
                                "Plantilla2Static.useEffect": ()=>({})
                            }["Plantilla2Static.useEffect"]);
                            if (res.ok) {
                                const payload = normalizePayload(json?.data ?? json);
                                payload.token = payload.token || token;
                                if (!cancel) setData(payload);
                                loaded = true;
                                break;
                            } else {
                                lastErr = json?.error || `Error cargando plantilla (${res.status})`;
                            }
                        }
                        if (!loaded && !cancel) {
                            setError(lastErr || "No se pudo cargar la plantilla");
                        }
                    } catch  {
                        if (!cancel) setError("Error de conexión");
                    }
                }
            })["Plantilla2Static.useEffect"]();
            return ({
                "Plantilla2Static.useEffect": ()=>{
                    cancel = true;
                }
            })["Plantilla2Static.useEffect"];
        }
    }["Plantilla2Static.useEffect"], [
        token
    ]);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-black text-white p-6 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-400 font-semibold",
                        children: "Error:"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                lineNumber: 177,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
            lineNumber: 176,
            columnNumber: 7
        }, this);
    }
    if (!data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-black text-white p-6 flex items-center justify-center",
            children: "Cargando..."
        }, void 0, false, {
            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
            lineNumber: 187,
            columnNumber: 7
        }, this);
    }
    const primaryColor = data.primary_color || "#4348D0";
    const productoTitulo = data.producto_label || "PRODUCTO";
    const importePagar = data.importe_pagar || data.monto || "0.00";
    const diasVencidos = data.dias_vencidos ?? 0;
    const fechaVencimiento = data.fecha_vencimiento || "";
    const metodoPagoLabel = data.metodo_pago_label || "SPEI";
    const cuentaBancaria = data.cuenta_bancaria || data.liga_pago_label || ".";
    const mostrarExtras = data.mostrar_extras !== false;
    const nombre = data.nombre_cliente || "—";
    const telefono = data.telefono_cliente || "—";
    const moneyBig = formatBigMoney(importePagar);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full bg-black flex items-center justify-center px-2 sm:px-4 py-4 sm:py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[900px] flex justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[900px] bg-[#efefef] rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.22)] border border-[#e3e3e3]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-[#efefef] px-4 sm:px-8 pt-4 sm:pt-6 pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-0 top-0 h-12 w-12 sm:h-20 sm:w-20 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -left-5 -top-4 w-16 sm:w-28 h-[4px] sm:h-[6px] bg-[#183A72] rotate-[-45deg]"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -left-2 top-2 sm:top-4 w-16 sm:w-28 h-[3px] sm:h-[5px] bg-[#183A72] rotate-[-45deg]"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end pr-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[18px] sm:text-[28px] md:text-[34px] font-serif font-semibold text-black leading-none",
                                    children: "Pago importe"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-2 sm:mx-4 md:mx-6 mb-4 bg-[#f3f3f3] rounded-[10px] sm:rounded-[14px] px-4 sm:px-8 md:px-14 pt-4 sm:pt-6 md:pt-7 pb-6 sm:pb-8 md:pb-10 shadow-sm border border-[#ebebeb]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-4 sm:mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-serif leading-none tracking-tight text-black break-words",
                                    style: {
                                        fontSize: "clamp(2.8rem, 8vw, 5.8rem)",
                                        textShadow: "4px 2px 0 rgba(76,92,255,0.9)"
                                    },
                                    children: productoTitulo
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                    lineNumber: 224,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_420px] gap-4 md:gap-8 items-end mb-8 sm:mb-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-block text-[15px] sm:text-[20px] md:text-[24px] font-medium text-[#4f4f4f] bg-[#efefef] px-1 mb-2 font-serif",
                                                children: "Monto a pagar actual"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                lineNumber: 237,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-serif font-bold text-[#4A55D9] leading-[0.9] break-words",
                                                children: typeof moneyBig === "string" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[38px] sm:text-[62px] md:text-[86px]",
                                                    children: moneyBig
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[38px] sm:text-[62px] md:text-[86px]",
                                                            children: moneyBig.intPart
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[28px] sm:text-[44px] md:text-[58px] align-top",
                                                            children: [
                                                                ".",
                                                                moneyBig.decPart
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                lineNumber: 241,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                        lineNumber: 236,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-end md:justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full md:max-w-[420px] border border-red-400 rounded-[20px] sm:rounded-[26px] px-6 sm:px-8 py-4 sm:py-5 text-red-500 text-[22px] sm:text-[32px] md:text-[34px] leading-none font-serif bg-[#fff7f7] text-center",
                                            children: [
                                                diasVencidos,
                                                " días de retraso"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                            lineNumber: 260,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-10 sm:mb-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-2 md:gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block text-[18px] sm:text-[24px] md:text-[32px] font-medium text-[#5c5c5c] bg-[#efefef] px-1 font-serif",
                                            children: "Fecha de vencimiento"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                            lineNumber: 268,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-transparent outline-none text-left md:text-left text-[18px] sm:text-[24px] md:text-[30px] font-medium text-[#5c5c5c] font-serif",
                                            children: formatDate(fechaVencimiento)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                    lineNumber: 267,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-10 sm:mb-12 md:mb-14",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-block text-[18px] sm:text-[24px] md:text-[32px] font-medium text-[#5c5c5c] bg-[#efefef] px-1 mb-4 sm:mb-6 font-serif",
                                        children: "Método de pago"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                        lineNumber: 279,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#f3f3f3] rounded-xl px-3 sm:px-4 py-4 sm:py-5 flex flex-col items-center justify-center text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[32px] sm:text-[56px] md:text-[82px] font-black leading-none text-[#2E3FA8] font-sans break-words text-center",
                                                children: metodoPagoLabel
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                lineNumber: 286,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 sm:mt-7 text-[22px] sm:text-[38px] md:text-[56px] font-serif text-[#183A72] tracking-wide break-all leading-tight text-center",
                                                children: cuentaBancaria
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                lineNumber: 291,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                        lineNumber: 283,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[28px] sm:text-[42px] md:text-[56px] font-serif font-semibold text-black mb-5 sm:mb-8",
                                        children: "Detalles del pedido"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 sm:space-y-6 md:space-y-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-[1fr_auto] items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[18px] sm:text-[24px] md:text-[34px] font-serif text-[#5c5c5c]",
                                                        children: "Monto a reembolsar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[18px] sm:text-[24px] md:text-[34px] font-serif text-black text-right",
                                                        children: formatMoneyWhole(importePagar)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                lineNumber: 304,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-[1fr_auto] items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[18px] sm:text-[24px] md:text-[34px] font-serif text-[#5c5c5c]",
                                                        children: "Gasto por mora"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[18px] sm:text-[24px] md:text-[34px] font-serif text-black text-right",
                                                        children: "$ 0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, this),
                                            mostrarExtras && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-[auto_1fr] items-center gap-4 sm:gap-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[18px] sm:text-[24px] md:text-[34px] font-serif text-[#5c5c5c]",
                                                                children: "Nombre"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right text-[18px] sm:text-[24px] md:text-[34px] font-serif text-black break-words",
                                                                children: nombre
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-[auto_1fr] items-center gap-4 sm:gap-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[18px] sm:text-[24px] md:text-[34px] font-serif text-[#5c5c5c]",
                                                                children: "Teléfono"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                                lineNumber: 334,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right text-[18px] sm:text-[24px] md:text-[34px] font-serif text-black break-words",
                                                                children: telefono
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                                lineNumber: 337,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                        lineNumber: 303,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 sm:px-8 md:px-12 py-5 sm:py-8 text-white text-[17px] sm:text-[28px] md:text-[34px] leading-tight font-serif",
                        style: {
                            backgroundColor: primaryColor
                        },
                        children: "Pague a tiempo y forma para acceder a créditos con montos elevados de la financiera."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                        lineNumber: 347,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 sm:p-4 bg-[#efefef]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "w-full text-white py-3 sm:py-4 rounded-xl text-base sm:text-lg md:text-[24px] font-semibold",
                            style: {
                                backgroundColor: primaryColor
                            },
                            children: "Confirmar y Generar Link"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                            lineNumber: 356,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                        lineNumber: 355,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
            lineNumber: 207,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
_s(Plantilla2Static, "hwbglsUwajk+DtP7t7jz2YPgUh4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = Plantilla2Static;
var _c;
__turbopack_context__.k.register(_c, "Plantilla2Static");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla3Static.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla3Static.tsx'\n\nUnterminated regexp literal");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla4Static.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/multa-main/multa-main/app/pay/[token]/static.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PagoFastCashStatic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$app$2f$pay$2f5b$token$5d2f$plantillas$2f$Plantilla1Static$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla1Static.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$app$2f$pay$2f5b$token$5d2f$plantillas$2f$Plantilla2Static$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla2Static.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$app$2f$pay$2f5b$token$5d2f$plantillas$2f$Plantilla3Static$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla3Static.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$app$2f$pay$2f5b$token$5d2f$plantillas$2f$Plantilla4Static$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/app/pay/[token]/plantillas/Plantilla4Static.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function PagoFastCashStatic({ token, tipoPlantilla }) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PagoFastCashStatic.useMemo[origin]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return window.location.origin;
        }
    }["PagoFastCashStatic.useMemo[origin]"], []);
    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(()=>setCopied(false), 1200);
        } catch  {
            setError("No se pudo copiar");
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashStatic.useEffect": ()=>{
            if (!token) {
                setError("Token no recibido");
                return;
            }
            let cancel = false;
            ({
                "PagoFastCashStatic.useEffect": async ()=>{
                    try {
                        setError(null);
                        const res = await fetch(`/api/plantillas-temporales-3/${token}`, {
                            cache: "no-store"
                        });
                        const json = await res.json().catch({
                            "PagoFastCashStatic.useEffect": ()=>null
                        }["PagoFastCashStatic.useEffect"]);
                        const payload = json?.data ?? json;
                        if (!cancel) {
                            setData(payload);
                        }
                    } catch  {
                        if (!cancel) {
                            setError("Error cargando datos");
                        }
                    }
                }
            })["PagoFastCashStatic.useEffect"]();
            return ({
                "PagoFastCashStatic.useEffect": ()=>{
                    cancel = true;
                }
            })["PagoFastCashStatic.useEffect"];
        }
    }["PagoFastCashStatic.useEffect"], [
        token
    ]);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-white",
        children: error
    }, void 0, false, {
        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/static.tsx",
        lineNumber: 69,
        columnNumber: 21
    }, this);
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-white",
        children: "Cargando..."
    }, void 0, false, {
        fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/static.tsx",
        lineNumber: 70,
        columnNumber: 21
    }, this);
    const props = {
        data,
        origin,
        copied,
        onCopy: copyToClipboard
    };
    // 🔥 AQUÍ ESTÁ EL FIX REAL
    const plantillaFinal = String(tipoPlantilla ?? data?.tipo_plantilla ?? "1").trim();
    console.log("tipoPlantilla prop:", tipoPlantilla);
    console.log("data.tipo_plantilla:", data?.tipo_plantilla);
    console.log("plantillaFinal:", plantillaFinal);
    switch(plantillaFinal){
        case "2":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$app$2f$pay$2f5b$token$5d2f$plantillas$2f$Plantilla2Static$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...props
            }, void 0, false, {
                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/static.tsx",
                lineNumber: 90,
                columnNumber: 14
            }, this);
        case "3":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$app$2f$pay$2f5b$token$5d2f$plantillas$2f$Plantilla3Static$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...props
            }, void 0, false, {
                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/static.tsx",
                lineNumber: 92,
                columnNumber: 14
            }, this);
        case "4":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$app$2f$pay$2f5b$token$5d2f$plantillas$2f$Plantilla4Static$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...props
            }, void 0, false, {
                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/static.tsx",
                lineNumber: 94,
                columnNumber: 14
            }, this);
        case "1":
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$app$2f$pay$2f5b$token$5d2f$plantillas$2f$Plantilla1Static$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...props
            }, void 0, false, {
                fileName: "[project]/Downloads/multa-main/multa-main/app/pay/[token]/static.tsx",
                lineNumber: 97,
                columnNumber: 14
            }, this);
    }
}
_s(PagoFastCashStatic, "uBD/Gsygb3wj62ItxNXSJTOQnPk=");
_c = PagoFastCashStatic;
var _c;
__turbopack_context__.k.register(_c, "PagoFastCashStatic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/multa-main/multa-main/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Downloads/multa-main/multa-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Downloads/multa-main/multa-main/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Downloads_multa-main_multa-main_1fba6b25._.js.map