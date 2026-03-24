(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Plantilla1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Plantilla1(props) {
    const { cardBg, primaryColor, fotoHabilitada, resolvedLogoUrl, productoTitulo, monto, setMonto, importePagar, setImportePagar, fechaVencimiento, setFechaVencimiento, diasVencidos, isCo, metodoPagoId, setMetodoPagoId, cuentaId, setCuentaId, optionsMetodo, optionsCuenta, metodoPagoLabel, cuentaBancaria, mostrarExtras, nombre, setNombre, telefono, setTelefono, loadingListas, disabled, saving, onToggleFoto, onSubmit } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[420px] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.45)]",
        style: {
            backgroundColor: cardBg
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[190px] flex flex-col items-center justify-center pt-2",
                style: {
                    background: "linear-gradient(180deg,#5CB0FF 0%,#A3D4FF 100%)"
                },
                children: [
                    fotoHabilitada ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow",
                        children: resolvedLogoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: resolvedLogoUrl,
                            className: "w-full h-full object-cover",
                            alt: "logo"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                            lineNumber: 52,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg font-bold text-[#142546]",
                            children: "IMG"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                            lineNumber: 58,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "mt-2 text-xs px-3 py-1 rounded-md bg-white/70 hover:bg-white text-[#142546] font-semibold disabled:opacity-60",
                        onClick: onToggleFoto,
                        disabled: disabled,
                        children: fotoHabilitada ? "Inhabilitar foto" : "Habilitar foto"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-3 text-lg font-bold text-[#142546]",
                        children: productoTitulo || "-"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 -mt-4 rounded-xl p-4 text-white shadow-md",
                style: {
                    backgroundColor: primaryColor
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs opacity-90",
                        children: "Monto de Préstamo"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: monto,
                        onChange: (e)=>setMonto(e.target.value),
                        placeholder: "$0.00",
                        className: "w-full bg-transparent text-3xl font-bold outline-none",
                        disabled: disabled
                    }, void 0, false, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-5 flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-transparent rounded-xl border p-3 shadow-sm",
                        style: {
                            backgroundColor: cardBg
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center py-3 border-b",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-gray-700",
                                        children: "Importe a Pagar"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: importePagar,
                                        onChange: (e)=>setImportePagar(e.target.value),
                                        className: "text-gray-500 text-right w-28 bg-transparent font-semibold outline-none",
                                        disabled: disabled
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center py-3 border-b",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-gray-700",
                                        children: "Fecha Vencimiento"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: fechaVencimiento,
                                        onChange: (e)=>setFechaVencimiento(e.target.value),
                                        className: "text-gray-500 text-right bg-transparent outline-none",
                                        disabled: disabled
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-gray-700",
                                        children: "Días vencimiento"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-500",
                                        children: [
                                            diasVencidos,
                                            " días"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-transparent rounded-xl p-3 shadow-sm",
                        style: {
                            backgroundColor: cardBg
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium text-gray-700 mb-2",
                                children: [
                                    "Pago (",
                                    isCo ? "Colombia" : "México",
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center bg-[#F8FAFB] p-4 rounded-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "w-full text-center text-sm font-semibold text-gray-700 bg-transparent outline-none",
                                            value: metodoPagoId,
                                            onChange: (e)=>setMetodoPagoId(e.target.value),
                                            disabled: disabled || loadingListas,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: loadingListas ? "Cargando…" : "Selecciona método"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 17
                                                }, this),
                                                optionsMetodo.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: o.id,
                                                        children: o.label
                                                    }, o.id, false, {
                                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full text-center text-sm font-semibold text-gray-700 bg-transparent outline-none",
                                                value: cuentaId,
                                                onChange: (e)=>setCuentaId(e.target.value),
                                                disabled: disabled || loadingListas,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: loadingListas ? "Cargando…" : "Selecciona cuenta"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this),
                                                    optionsCuenta.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: o.id,
                                                            children: o.label
                                                        }, o.id, false, {
                                                            fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        metodoPagoLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-xs text-gray-500",
                                            children: metodoPagoLabel
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this) : null,
                                        cuentaBancaria ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-xs text-gray-500",
                                            children: cuentaBancaria
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    mostrarExtras && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-transparent rounded-xl p-3 shadow-sm",
                        style: {
                            backgroundColor: cardBg
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center py-2 border-b",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-gray-700",
                                        children: "Nombre"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "text-sm text-right bg-transparent outline-none text-gray-700",
                                        placeholder: "Nombre",
                                        value: nombre,
                                        onChange: (e)=>setNombre(e.target.value),
                                        disabled: disabled
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-gray-700",
                                        children: "Teléfono"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "text-sm text-right bg-transparent outline-none text-gray-700",
                                        placeholder: "Teléfono",
                                        value: telefono,
                                        onChange: (e)=>setTelefono(e.target.value),
                                        disabled: disabled
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onSubmit,
                        className: "w-full text-white p-3 rounded-xl text-lg font-semibold mt-2 disabled:opacity-60",
                        style: {
                            backgroundColor: primaryColor
                        },
                        disabled: disabled,
                        type: "button",
                        children: saving ? "Generando link..." : "Confirmar y Generar Link"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = Plantilla1;
var _c;
__turbopack_context__.k.register(_c, "Plantilla1");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla2.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Plantilla2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Plantilla2(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Diseño totalmente distinto"
    }, void 0, false, {
        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla2.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Plantilla2;
var _c;
__turbopack_context__.k.register(_c, "Plantilla2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla3.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Plantilla2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Plantilla2(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Diseño totalmente distinto"
    }, void 0, false, {
        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla3.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Plantilla2;
var _c;
__turbopack_context__.k.register(_c, "Plantilla2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla4.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Plantilla2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Plantilla2(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Diseño totalmente distinto"
    }, void 0, false, {
        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla4.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Plantilla2;
var _c;
__turbopack_context__.k.register(_c, "Plantilla2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PagoFastCashForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$app$2f$gestion$2f$multas$2f$plantillas$2f$complejas$2f$plantillas$2f$Plantilla1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla1.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$app$2f$gestion$2f$multas$2f$plantillas$2f$complejas$2f$plantillas$2f$Plantilla2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$app$2f$gestion$2f$multas$2f$plantillas$2f$complejas$2f$plantillas$2f$Plantilla3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla3.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$app$2f$gestion$2f$multas$2f$plantillas$2f$complejas$2f$plantillas$2f$Plantilla4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/plantillas/Plantilla4.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function norm(s) {
    return String(s ?? "").trim().toLowerCase().replace(/\s+/g, " ").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function PagoFastCashForm() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const numeroPrestamo = String(params?.id ?? "").trim();
    const isHex = (s)=>/^#([0-9A-Fa-f]{6})$/.test(String(s ?? ""));
    const origin = ("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable";
    const normalizeUrl = (u)=>{
        if (!u) return null;
        let s = String(u).trim().replaceAll("\\", "/");
        if (/^https?:\/\//i.test(s)) return s;
        if (s.startsWith("public/uploads/")) s = s.replace("public/", "");
        if (s.startsWith("uploads/")) s = `/${s}`;
        if (s.startsWith("/")) return origin ? `${origin}${s}` : s;
        return origin ? `${origin}/${s}` : s;
    };
    const [caso, setCaso] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingCaso, setLoadingCaso] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [errorCaso, setErrorCaso] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            let cancel = false;
            async function fetchCaso() {
                if (!numeroPrestamo) {
                    setLoadingCaso(false);
                    setErrorCaso("Falta el número de préstamo en la URL.");
                    return;
                }
                setLoadingCaso(true);
                setErrorCaso("");
                try {
                    const res = await fetch(`/api/collection/casos/${encodeURIComponent(numeroPrestamo)}`, {
                        cache: "no-store"
                    });
                    const json = await res.json().catch({
                        "PagoFastCashForm.useEffect.fetchCaso": ()=>({})
                    }["PagoFastCashForm.useEffect.fetchCaso"]);
                    if (!res.ok) {
                        throw new Error(json?.error || "No se pudo cargar el caso");
                    }
                    const row = json?.data ?? json;
                    if (!cancel) setCaso(row);
                } catch (e) {
                    if (!cancel) setErrorCaso(e?.message || "Error cargando caso");
                } finally{
                    if (!cancel) setLoadingCaso(false);
                }
            }
            fetchCaso();
            return ({
                "PagoFastCashForm.useEffect": ()=>{
                    cancel = true;
                }
            })["PagoFastCashForm.useEffect"];
        }
    }["PagoFastCashForm.useEffect"], [
        numeroPrestamo
    ]);
    const isCo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PagoFastCashForm.useMemo[isCo]": ()=>{
            const seg = norm(caso?.segmento);
            return seg.includes("col");
        }
    }["PagoFastCashForm.useMemo[isCo]"], [
        caso?.segmento
    ]);
    const listCuentaKey = isCo ? "cuenta_bancaria_colombia" : "cuenta_bancaria_mexico";
    const listMetodoKey = isCo ? "metodo_pago_colombia" : "metodo_pago_mexico";
    const listProdKey = isCo ? "producto_colombia" : "producto_mexico";
    const [optionsCuenta, setOptionsCuenta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [optionsMetodo, setOptionsMetodo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingListas, setLoadingListas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const normalizeItem = (o)=>{
        const obj = o ?? {};
        const value = String(obj?.["value"] ?? obj?.["name"] ?? "").trim();
        const label = String(obj?.["label"] ?? obj?.["value"] ?? obj?.["name"] ?? value).trim();
        return {
            id: String(obj?.["id"] ?? ""),
            label,
            value,
            raw: obj
        };
    };
    async function loadLista(listKey, setter) {
        const res = await fetch(`/api/collection/aplicaciones/${encodeURIComponent(listKey)}`, {
            cache: "no-store"
        });
        const json = await res.json().catch(()=>({}));
        if (!res.ok) {
            setter([]);
            return;
        }
        const arr = json?.items ?? json?.data ?? [];
        const items = Array.isArray(arr) ? arr.map(normalizeItem) : [];
        setter(items);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            if (!caso) return;
            let cancel = false;
            async function run() {
                setLoadingListas(true);
                try {
                    await Promise.all([
                        loadLista(listMetodoKey, {
                            "PagoFastCashForm.useEffect.run": (v)=>{
                                if (!cancel) setOptionsMetodo(v);
                            }
                        }["PagoFastCashForm.useEffect.run"]),
                        loadLista(listCuentaKey, {
                            "PagoFastCashForm.useEffect.run": (v)=>{
                                if (!cancel) setOptionsCuenta(v);
                            }
                        }["PagoFastCashForm.useEffect.run"])
                    ]);
                } finally{
                    if (!cancel) setLoadingListas(false);
                }
            }
            run();
            return ({
                "PagoFastCashForm.useEffect": ()=>{
                    cancel = true;
                }
            })["PagoFastCashForm.useEffect"];
        }
    }["PagoFastCashForm.useEffect"], [
        caso,
        listMetodoKey,
        listCuentaKey
    ]);
    const [logoFromCatalog, setLogoFromCatalog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            let cancel = false;
            async function findLogo() {
                setLogoFromCatalog(null);
                if (!caso?.producto) return;
                try {
                    const res = await fetch(`/api/collection/aplicaciones/${encodeURIComponent(listProdKey)}`, {
                        cache: "no-store"
                    });
                    const json = await res.json().catch({
                        "PagoFastCashForm.useEffect.findLogo": ()=>({})
                    }["PagoFastCashForm.useEffect.findLogo"]);
                    if (!res.ok) return;
                    const arr = json?.items ?? json?.data ?? [];
                    const items = Array.isArray(arr) ? arr : [];
                    const target = norm(caso.producto);
                    const found = items.find({
                        "PagoFastCashForm.useEffect.findLogo.found": (it)=>norm(it?.name) === target
                    }["PagoFastCashForm.useEffect.findLogo.found"]);
                    const img = found?.url ?? null;
                    if (!cancel) setLogoFromCatalog(img);
                } catch  {
                    if (!cancel) setLogoFromCatalog(null);
                }
            }
            if (caso) findLogo();
            return ({
                "PagoFastCashForm.useEffect": ()=>{
                    cancel = true;
                }
            })["PagoFastCashForm.useEffect"];
        }
    }["PagoFastCashForm.useEffect"], [
        caso,
        listProdKey
    ]);
    const [metodoPagoId, setMetodoPagoId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [cuentaId, setCuentaId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            if (!metodoPagoId && optionsMetodo.length > 0) {
                setMetodoPagoId(optionsMetodo[0].id);
            }
        }
    }["PagoFastCashForm.useEffect"], [
        optionsMetodo,
        metodoPagoId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            if (!cuentaId && optionsCuenta.length > 0) {
                setCuentaId(optionsCuenta[0].id);
            }
        }
    }["PagoFastCashForm.useEffect"], [
        optionsCuenta,
        cuentaId
    ]);
    const selectedMetodo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PagoFastCashForm.useMemo[selectedMetodo]": ()=>optionsMetodo.find({
                "PagoFastCashForm.useMemo[selectedMetodo]": (o)=>o.id === metodoPagoId
            }["PagoFastCashForm.useMemo[selectedMetodo]"]) || null
    }["PagoFastCashForm.useMemo[selectedMetodo]"], [
        optionsMetodo,
        metodoPagoId
    ]);
    const selectedCuenta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PagoFastCashForm.useMemo[selectedCuenta]": ()=>optionsCuenta.find({
                "PagoFastCashForm.useMemo[selectedCuenta]": (o)=>o.id === cuentaId
            }["PagoFastCashForm.useMemo[selectedCuenta]"]) || null
    }["PagoFastCashForm.useMemo[selectedCuenta]"], [
        optionsCuenta,
        cuentaId
    ]);
    const productoTitulo = String(caso?.producto ?? "");
    const metodoPagoLabel = selectedMetodo?.label ?? "";
    const cuentaBancaria = selectedCuenta?.value ?? "";
    const logoUrlRaw = logoFromCatalog;
    const resolvedLogoUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PagoFastCashForm.useMemo[resolvedLogoUrl]": ()=>normalizeUrl(logoUrlRaw)
    }["PagoFastCashForm.useMemo[resolvedLogoUrl]"], [
        logoUrlRaw
    ]);
    const [nombre, setNombre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [telefono, setTelefono] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mostrarExtras, setMostrarExtras] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [monto, setMonto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [importePagar, setImportePagar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fechaVencimiento, setFechaVencimiento] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [diasVencidos, setDiasVencidos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            if (!caso) return;
            setNombre({
                "PagoFastCashForm.useEffect": (prev)=>prev || String(caso.nombre_cliente ?? "")
            }["PagoFastCashForm.useEffect"]);
            setTelefono({
                "PagoFastCashForm.useEffect": (prev)=>prev || String(caso.telefono_cliente ?? "")
            }["PagoFastCashForm.useEffect"]);
            const vd = caso.valor_deuda != null ? String(caso.valor_deuda) : "";
            setMonto({
                "PagoFastCashForm.useEffect": (prev)=>prev || vd
            }["PagoFastCashForm.useEffect"]);
            setImportePagar({
                "PagoFastCashForm.useEffect": (prev)=>prev || vd
            }["PagoFastCashForm.useEffect"]);
        }
    }["PagoFastCashForm.useEffect"], [
        caso
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            setImportePagar(monto);
        }
    }["PagoFastCashForm.useEffect"], [
        monto
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            if (!fechaVencimiento) {
                setDiasVencidos(0);
                return;
            }
            const hoy = new Date();
            const venc = new Date(`${fechaVencimiento}T00:00:00`);
            const diff = Math.ceil((venc.getTime() - hoy.getTime()) / 86400000);
            setDiasVencidos(diff);
        }
    }["PagoFastCashForm.useEffect"], [
        fechaVencimiento
    ]);
    const [fotoHabilitada, setFotoHabilitada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [cardBg, setCardBg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#FFFFFF");
    const [cardBgHexInput, setCardBgHexInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#FFFFFF");
    const [primaryColor, setPrimaryColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#0F56F7");
    const [primaryHexInput, setPrimaryHexInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#0F56F7");
    const [cardBgError, setCardBgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [primaryError, setPrimaryError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [plantillaActiva, setPlantillaActiva] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1");
    const handleCardBgHexChange = (value)=>{
        setCardBgHexInput(value);
        if (isHex(value)) {
            setCardBg(value);
            setCardBgError("");
        } else {
            setCardBgError("Ingresa color en formato #RRGGBB");
        }
    };
    const handlePrimaryHexChange = (value)=>{
        setPrimaryHexInput(value);
        if (isHex(value)) {
            setPrimaryColor(value);
            setPrimaryError("");
        } else {
            setPrimaryError("Ingresa color en formato #RRGGBB");
        }
    };
    const cardBgOptions = [
        {
            label: "Blanco",
            value: "#FFFFFF"
        },
        {
            label: "Gris claro",
            value: "#F8FAFC"
        },
        {
            label: "Gris suave",
            value: "#EEF2F6"
        },
        {
            label: "Marfil",
            value: "#FFF4E6"
        },
        {
            label: "Crema",
            value: "#FFF7ED"
        }
    ];
    const primaryOptions = [
        {
            label: "Azul (default)",
            value: "#0F56F7"
        },
        {
            label: "Naranja",
            value: "#FF6B00"
        },
        {
            label: "Verde",
            value: "#10B981"
        },
        {
            label: "Rojo",
            value: "#EF4444"
        }
    ];
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shareLink, setShareLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const disabled = saving;
    const plantillaPagoId = isCo ? "2" : "1";
    async function crearLinkEstatico() {
        const payload = {
            plantilla_pago_id: plantillaPagoId,
            template_id: plantillaActiva,
            metodo_pago_lista_id: metodoPagoId || null,
            liga_pago_lista_id: cuentaId || null,
            subproducto: productoTitulo,
            cuenta_bancaria: cuentaBancaria,
            metodo_pago: selectedMetodo?.label ?? selectedMetodo?.value ?? "",
            url: resolvedLogoUrl,
            monto,
            importe_pagar: importePagar,
            fecha_vencimiento: fechaVencimiento || null,
            dias_vencidos: diasVencidos,
            nombre_cliente: nombre,
            telefono_cliente: telefono,
            mostrar_extras: mostrarExtras,
            card_bg_color: cardBg,
            primary_color: primaryColor,
            locked: true,
            foto_habilitada: fotoHabilitada
        };
        const res = await fetch("/api/plantillas-temporales-3", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const json = await res.json().catch(()=>({}));
        if (!res.ok) {
            throw new Error(json?.["error"] ?? "No se pudo generar el link");
        }
        return String(json?.["link"] ?? "");
    }
    async function guardarLigaFinalEnCaso(link) {
        await fetch(`/api/collection/casos/${encodeURIComponent(numeroPrestamo)}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                liga_pago: link
            })
        }).catch(()=>null);
    }
    const handleConfirmAndLock = async ()=>{
        if (saving) return;
        if (!metodoPagoId) {
            alert("Selecciona el método de pago.");
            return;
        }
        if (!cuentaId || !cuentaBancaria) {
            alert("Selecciona la cuenta bancaria.");
            return;
        }
        setSaving(true);
        try {
            const link = await crearLinkEstatico();
            setShareLink(link);
            await guardarLigaFinalEnCaso(link);
            window.location.href = link;
        } catch (e) {
            alert(e?.message || "Error generando link");
        } finally{
            setSaving(false);
        }
    };
    const plantillaProps = {
        cardBg,
        primaryColor,
        fotoHabilitada,
        resolvedLogoUrl,
        productoTitulo,
        monto,
        setMonto,
        importePagar,
        setImportePagar,
        fechaVencimiento,
        setFechaVencimiento,
        diasVencidos,
        isCo,
        metodoPagoId,
        setMetodoPagoId,
        cuentaId,
        setCuentaId,
        optionsMetodo,
        optionsCuenta,
        metodoPagoLabel,
        cuentaBancaria,
        mostrarExtras,
        nombre,
        setNombre,
        telefono,
        setTelefono,
        loadingListas,
        disabled,
        saving,
        onToggleFoto: ()=>setFotoHabilitada((v)=>!v),
        onSubmit: handleConfirmAndLock
    };
    function renderPlantilla() {
        switch(plantillaActiva){
            case "1":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$app$2f$gestion$2f$multas$2f$plantillas$2f$complejas$2f$plantillas$2f$Plantilla1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ...plantillaProps
                }, void 0, false, {
                    fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                    lineNumber: 439,
                    columnNumber: 16
                }, this);
            case "2":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$app$2f$gestion$2f$multas$2f$plantillas$2f$complejas$2f$plantillas$2f$Plantilla2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ...plantillaProps
                }, void 0, false, {
                    fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                    lineNumber: 441,
                    columnNumber: 16
                }, this);
            case "3":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$app$2f$gestion$2f$multas$2f$plantillas$2f$complejas$2f$plantillas$2f$Plantilla3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ...plantillaProps
                }, void 0, false, {
                    fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                    lineNumber: 443,
                    columnNumber: 16
                }, this);
            case "4":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$app$2f$gestion$2f$multas$2f$plantillas$2f$complejas$2f$plantillas$2f$Plantilla4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ...plantillaProps
                }, void 0, false, {
                    fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                    lineNumber: 445,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$app$2f$gestion$2f$multas$2f$plantillas$2f$complejas$2f$plantillas$2f$Plantilla1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ...plantillaProps
                }, void 0, false, {
                    fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                    lineNumber: 447,
                    columnNumber: 16
                }, this);
        }
    }
    if (loadingCaso) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-[#152032] text-white p-6",
            children: "Cargando caso…"
        }, void 0, false, {
            fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
            lineNumber: 453,
            columnNumber: 7
        }, this);
    }
    if (errorCaso || !caso) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-[#152032] text-white p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-bold mb-2",
                        children: "No se pudo cargar el caso"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                        lineNumber: 463,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm opacity-90",
                        children: errorCaso || "Caso no encontrado"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                        lineNumber: 464,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                lineNumber: 462,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
            lineNumber: 461,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen flex items-center justify-center p-6 relative bg-[#152032]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-6 top-16 z-50 flex flex-col gap-4 w-60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 p-3 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-white mb-2 font-medium",
                                children: "Plantilla"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                lineNumber: 474,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-full p-2 rounded-md text-sm",
                                value: plantillaActiva,
                                onChange: (e)=>setPlantillaActiva(e.target.value),
                                disabled: disabled,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "1",
                                        children: "Plantilla #1"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                        lineNumber: 481,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "2",
                                        children: "Plantilla #2"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                        lineNumber: 482,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "3",
                                        children: "Plantilla #3"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                        lineNumber: 483,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "4",
                                        children: "Plantilla #4"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                        lineNumber: 484,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                lineNumber: 475,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                        lineNumber: 473,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                children: "Mostrar datos del cliente"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                lineNumber: 489,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "relative inline-flex items-center cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: mostrarExtras,
                                        onChange: ()=>setMostrarExtras(!mostrarExtras),
                                        className: "sr-only peer",
                                        disabled: disabled
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                        lineNumber: 491,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full relative after:content-[''] after:w-5 after:h-5 after:bg-white after:rounded-full after:absolute after:left-1 after:top-0.5 peer-checked:after:translate-x-5 transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                        lineNumber: 498,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                lineNumber: 490,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                        lineNumber: 488,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 p-3 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-white mb-2 font-medium",
                                children: "Fondo de la tarjeta"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                lineNumber: 507,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-full p-2 rounded-md mb-2 text-sm",
                                value: cardBg,
                                onChange: (e)=>{
                                    setCardBg(e.target.value);
                                    setCardBgHexInput(e.target.value);
                                    setCardBgError("");
                                },
                                disabled: disabled,
                                children: cardBgOptions.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: o.value,
                                        children: [
                                            o.label,
                                            " — ",
                                            o.value
                                        ]
                                    }, o.value, true, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                        lineNumber: 519,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                lineNumber: 508,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: cardBgHexInput,
                                        onChange: (e)=>handleCardBgHexChange(e.target.value),
                                        className: "flex-1 p-2 rounded-md text-sm",
                                        placeholder: "#RRGGBB",
                                        disabled: disabled
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                        lineNumber: 526,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-md border",
                                        style: {
                                            backgroundColor: isHex(cardBgHexInput) ? cardBgHexInput : cardBg
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                        lineNumber: 534,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                lineNumber: 525,
                                columnNumber: 11
                            }, this),
                            cardBgError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-rose-400 mt-1",
                                children: cardBgError
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                lineNumber: 539,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                        lineNumber: 506,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 p-3 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-white mb-2 font-medium",
                                children: "Color del botón"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                lineNumber: 543,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-full p-2 rounded-md mb-2 text-sm",
                                value: primaryColor,
                                onChange: (e)=>{
                                    setPrimaryColor(e.target.value);
                                    setPrimaryHexInput(e.target.value);
                                    setPrimaryError("");
                                },
                                disabled: disabled,
                                children: primaryOptions.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: o.value,
                                        children: [
                                            o.label,
                                            " — ",
                                            o.value
                                        ]
                                    }, o.value, true, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                        lineNumber: 555,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                lineNumber: 544,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: primaryHexInput,
                                        onChange: (e)=>handlePrimaryHexChange(e.target.value),
                                        className: "flex-1 p-2 rounded-md text-sm",
                                        placeholder: "#RRGGBB",
                                        disabled: disabled
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                        lineNumber: 562,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-md border",
                                        style: {
                                            backgroundColor: isHex(primaryHexInput) ? primaryHexInput : primaryColor
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                        lineNumber: 570,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                lineNumber: 561,
                                columnNumber: 11
                            }, this),
                            primaryError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-rose-400 mt-1",
                                children: primaryError
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                lineNumber: 575,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                        lineNumber: 542,
                        columnNumber: 9
                    }, this),
                    shareLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 p-3 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-white mb-2 font-medium",
                                children: "Link generado"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                lineNumber: 580,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "w-full p-2 rounded-md text-sm",
                                value: shareLink,
                                readOnly: true
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                lineNumber: 581,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "mt-2 w-full p-2 rounded-md text-sm bg-white/10 hover:bg-white/20 text-white",
                                onClick: ()=>navigator.clipboard.writeText(shareLink),
                                type: "button",
                                children: "Copiar link"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                                lineNumber: 582,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                        lineNumber: 579,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
                lineNumber: 472,
                columnNumber: 7
            }, this),
            renderPlantilla()
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/complejas/PagoFastCashForm.tsx",
        lineNumber: 471,
        columnNumber: 5
    }, this);
}
_s(PagoFastCashForm, "Fm7OSHd9KfA1cMyLgSkw90stWUI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = PagoFastCashForm;
var _c;
__turbopack_context__.k.register(_c, "PagoFastCashForm");
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

//# sourceMappingURL=Downloads_multa-main_multa-main_e058f056._.js.map