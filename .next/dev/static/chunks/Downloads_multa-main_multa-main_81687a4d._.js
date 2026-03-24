(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PagoFastCashForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PagoFastCashForm({ data = {} }) {
    _s();
    // =========================
    // Helpers
    // =========================
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
    const mergeDefined = (base, override)=>{
        const out = {
            ...base
        };
        for (const [k, v] of Object.entries(override ?? {})){
            if (v !== undefined && v !== null && v !== "") out[k] = v;
        }
        return out;
    };
    // =========================
    // 1) ID: primero del URL, luego del prop data
    // =========================
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const idFromUrl = params?.id ? String(params.id) : null;
    const idFromData = data?.["plantilla_pago_id"] ?? data?.["plantillas_pago_id"] ?? data?.["plantilla_id"] ?? data?.["id_plantilla"] ?? data?.["plantillaPagoId"] ?? data?.["plantillaId"] ?? data?.["id"] ?? null;
    const plantillaId = idFromUrl ?? (idFromData ? String(idFromData) : null);
    // =========================
    // 2) Traer plantilla desde BD por ID
    // =========================
    const [plantillaBD, setPlantillaBD] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingPlantilla, setLoadingPlantilla] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [errorPlantilla, setErrorPlantilla] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            let cancel = false;
            async function fetchPlantilla() {
                setLoadingPlantilla(true);
                setErrorPlantilla("");
                try {
                    const url = plantillaId ? `/api/plantillas/${encodeURIComponent(plantillaId)}` : `/api/plantilla-pago`;
                    const res = await fetch(url, {
                        cache: "no-store"
                    });
                    const json = await res.json().catch({
                        "PagoFastCashForm.useEffect.fetchPlantilla": ()=>({})
                    }["PagoFastCashForm.useEffect.fetchPlantilla"]);
                    const j = json ?? {};
                    if (!res.ok) {
                        const errMsg = j?.["error"] ?? "No se pudo cargar la plantilla";
                        throw new Error(errMsg);
                    }
                    const plantilla = j?.["data"] ?? j;
                    if (!cancel) setPlantillaBD(plantilla ?? null);
                } catch (e) {
                    console.error("❌ Error cargando plantilla:", e);
                    const msg = e instanceof Error ? e.message : "Error cargando plantilla";
                    if (!cancel) {
                        setPlantillaBD(null);
                        setErrorPlantilla(msg);
                    }
                } finally{
                    if (!cancel) setLoadingPlantilla(false);
                }
            }
            fetchPlantilla();
            return ({
                "PagoFastCashForm.useEffect": ()=>{
                    cancel = true;
                }
            })["PagoFastCashForm.useEffect"];
        }
    }["PagoFastCashForm.useEffect"], [
        plantillaId
    ]);
    // =========================
    // 2.1) Traer CONFIG personalizada (para obtener ORIGEN = nombre)
    // =========================
    const [configListas, setConfigListas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingConfig, setLoadingConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            if (!plantillaId) return;
            const pid = String(plantillaId);
            let cancel = false;
            async function fetchConfig() {
                setLoadingConfig(true);
                try {
                    const res = await fetch(`/api/plantillas-personalizadas/config?plantilla_id=${encodeURIComponent(pid)}`, {
                        cache: "no-store"
                    });
                    const json = await res.json().catch({
                        "PagoFastCashForm.useEffect.fetchConfig": ()=>null
                    }["PagoFastCashForm.useEffect.fetchConfig"]);
                    if (!res.ok) {
                        console.log("ℹ️ Sin config personalizada", res.status, json || "");
                        if (!cancel) setConfigListas(null);
                        return;
                    }
                    if (!cancel) setConfigListas(json);
                } catch (e) {
                    console.error("❌ Error cargando config personalizada:", e);
                    if (!cancel) setConfigListas(null);
                } finally{
                    if (!cancel) setLoadingConfig(false);
                }
            }
            fetchConfig();
            return ({
                "PagoFastCashForm.useEffect": ()=>{
                    cancel = true;
                }
            })["PagoFastCashForm.useEffect"];
        }
    }["PagoFastCashForm.useEffect"], [
        plantillaId
    ]);
    // =========================
    // 3) Merge BD + temporal (data)
    // =========================
    const merged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PagoFastCashForm.useMemo[merged]": ()=>mergeDefined(plantillaBD ?? {}, data ?? {})
    }["PagoFastCashForm.useMemo[merged]"], [
        plantillaBD,
        data
    ]);
    // =========================
    // 4) Labels desde BD (tu BD)
    // =========================
    const pickLabel = (fieldKey, fallback)=>{
        const labels = merged?.["labels"];
        const campos = merged?.["campos_labels"];
        if (labels && labels[fieldKey]) return String(labels[fieldKey]);
        if (campos && campos[fieldKey]) return String(campos[fieldKey]);
        return fallback;
    };
    const labelSubproductoListaId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PagoFastCashForm.useMemo[labelSubproductoListaId]": ()=>pickLabel("subproducto_lista_id", "Subproducto")
    }["PagoFastCashForm.useMemo[labelSubproductoListaId]"], [
        merged
    ]);
    const labelMetodoPagoListaId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PagoFastCashForm.useMemo[labelMetodoPagoListaId]": ()=>pickLabel("metodo_pago_lista_id", "Método de pago")
    }["PagoFastCashForm.useMemo[labelMetodoPagoListaId]"], [
        merged
    ]);
    const labelProductoListaId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PagoFastCashForm.useMemo[labelProductoListaId]": ()=>pickLabel("producto_lista_id", "Producto")
    }["PagoFastCashForm.useMemo[labelProductoListaId]"], [
        merged
    ]);
    const labelLigaPagoListaId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PagoFastCashForm.useMemo[labelLigaPagoListaId]": ()=>pickLabel("liga_pago_lista_id", "Liga de pago")
    }["PagoFastCashForm.useMemo[labelLigaPagoListaId]"], [
        merged
    ]);
    const [optionsSubproducto, setOptionsSubproducto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [optionsMetodoPago, setOptionsMetodoPago] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [optionsProducto, setOptionsProducto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [optionsLigaPago, setOptionsLigaPago] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const normalizeItem = (o)=>{
        const obj = o ?? {};
        return {
            id: String(obj?.["id"] ?? ""),
            label: String(obj?.["label"] ?? ""),
            cuenta: obj?.["value"] != null ? String(obj["value"]) : "",
            url: obj?.["url_imagen"] ?? null,
            raw: obj
        };
    };
    async function loadLista(listaId, setter) {
        if (!listaId) {
            setter([]);
            return;
        }
        const res = await fetch(`/api/listas/items/por-lista/${encodeURIComponent(String(listaId))}`, {
            cache: "no-store"
        });
        const json = await res.json().catch(()=>[]);
        if (!res.ok) {
            setter([]);
            return;
        }
        const arr = Array.isArray(json) ? json : [];
        setter(arr.map(normalizeItem));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            if (!configListas) return;
            loadLista(configListas["subproducto_lista_id"], setOptionsSubproducto);
            loadLista(configListas["metodo_pago_lista_id"], setOptionsMetodoPago);
            loadLista(configListas["producto_lista_id"], setOptionsProducto);
            loadLista(configListas["liga_pago_lista_id"], setOptionsLigaPago);
        }
    }["PagoFastCashForm.useEffect"], [
        configListas
    ]);
    // =========================
    // 4.2) Estados de selección (ids)
    // =========================
    const [subproductoListaId, setSubproductoListaId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [metodoPagoListaId, setMetodoPagoListaId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [productoListaId, setProductoListaId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ligaPagoListaId, setLigaPagoListaId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // =========================
    // 4.3) Derivados
    // =========================
    const selectedProducto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PagoFastCashForm.useMemo[selectedProducto]": ()=>optionsProducto.find({
                "PagoFastCashForm.useMemo[selectedProducto]": (o)=>o.id === productoListaId
            }["PagoFastCashForm.useMemo[selectedProducto]"]) || null
    }["PagoFastCashForm.useMemo[selectedProducto]"], [
        optionsProducto,
        productoListaId
    ]);
    const selectedSubproducto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PagoFastCashForm.useMemo[selectedSubproducto]": ()=>optionsSubproducto.find({
                "PagoFastCashForm.useMemo[selectedSubproducto]": (o)=>o.id === subproductoListaId
            }["PagoFastCashForm.useMemo[selectedSubproducto]"]) || null
    }["PagoFastCashForm.useMemo[selectedSubproducto]"], [
        optionsSubproducto,
        subproductoListaId
    ]);
    const selectedMetodoPago = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PagoFastCashForm.useMemo[selectedMetodoPago]": ()=>optionsMetodoPago.find({
                "PagoFastCashForm.useMemo[selectedMetodoPago]": (o)=>o.id === metodoPagoListaId
            }["PagoFastCashForm.useMemo[selectedMetodoPago]"]) || null
    }["PagoFastCashForm.useMemo[selectedMetodoPago]"], [
        optionsMetodoPago,
        metodoPagoListaId
    ]);
    const selectedLigaPago = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PagoFastCashForm.useMemo[selectedLigaPago]": ()=>optionsLigaPago.find({
                "PagoFastCashForm.useMemo[selectedLigaPago]": (o)=>o.id === ligaPagoListaId
            }["PagoFastCashForm.useMemo[selectedLigaPago]"]) || null
    }["PagoFastCashForm.useMemo[selectedLigaPago]"], [
        optionsLigaPago,
        ligaPagoListaId
    ]);
    // Titulo (en header): depende de PRODUCTO
    const productoTitulo = selectedProducto?.label ?? String(merged?.["subproducto"] ?? merged?.["ubproducto"] ?? "");
    // Cuenta: viene de LIGA (value)
    const cuentaBancaria = selectedLigaPago?.cuenta ?? String(merged?.["cuenta_bancaria"] ?? "");
    // Foto: viene de PRODUCTO (url_imagen)
    const logoUrlRaw = selectedProducto?.url ?? merged?.["url"] ?? merged?.["logo_url"] ?? merged?.["imagen_url"] ?? merged?.["logoUrl"] ?? merged?.["logo"] ?? null;
    const resolvedLogoUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PagoFastCashForm.useMemo[resolvedLogoUrl]": ()=>normalizeUrl(logoUrlRaw)
    }["PagoFastCashForm.useMemo[resolvedLogoUrl]"], [
        logoUrlRaw
    ]);
    // base listo (solo para debug / tip)
    const baseListo = !!productoTitulo && !!cuentaBancaria;
    // =========================
    // 5) EXTRAS EDITABLES
    // =========================
    const [nombre, setNombre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [telefono, setTelefono] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mostrarExtras, setMostrarExtras] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // =========================
    // 6) EDITABLES
    // =========================
    const [monto, setMonto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [importePagar, setImportePagar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fechaVencimiento, setFechaVencimiento] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [diasVencidos, setDiasVencidos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            if (merged?.["monto"] != null && monto === "") setMonto(String(merged["monto"]));
            if (merged?.["importe_pagar"] != null && importePagar === "") setImportePagar(String(merged["importe_pagar"]));
            if (merged?.["fecha_vencimiento"] && !fechaVencimiento) setFechaVencimiento(String(merged["fecha_vencimiento"]));
            if (typeof merged?.["dias_vencidos"] === "number") setDiasVencidos(merged["dias_vencidos"]);
            if (merged?.["nombre_cliente"] && !nombre) setNombre(String(merged["nombre_cliente"]));
            if (merged?.["telefono_cliente"] && !telefono) setTelefono(String(merged["telefono_cliente"]));
            if (typeof merged?.["mostrar_extras"] === "boolean") setMostrarExtras(merged["mostrar_extras"]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["PagoFastCashForm.useEffect"], [
        merged
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
            if (!fechaVencimiento) return setDiasVencidos(0);
            const hoy = new Date();
            const venc = new Date(fechaVencimiento + "T00:00:00");
            const diff = Math.ceil((venc.getTime() - hoy.getTime()) / 86400000);
            setDiasVencidos(diff);
        }
    }["PagoFastCashForm.useEffect"], [
        fechaVencimiento
    ]);
    // =========================
    // 6.1) IMAGEN - BOTÓN PARA INHABILITAR FOTO
    // =========================
    const [fotoHabilitada, setFotoHabilitada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // =========================
    // 6.2) “Bloquear inspeccionar” (deterrente, NO seguridad real)
    // =========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            const onContextMenu = {
                "PagoFastCashForm.useEffect.onContextMenu": (e)=>e.preventDefault()
            }["PagoFastCashForm.useEffect.onContextMenu"];
            const onKeyDown = {
                "PagoFastCashForm.useEffect.onKeyDown": (e)=>{
                    const key = String(e.key || "").toLowerCase();
                    const ctrl = e.ctrlKey || e.metaKey;
                    const shift = e.shiftKey;
                    if (e.key === "F12") {
                        e.preventDefault();
                        e.stopPropagation();
                        return;
                    }
                    if (ctrl && shift && (key === "i" || key === "j" || key === "c")) {
                        e.preventDefault();
                        e.stopPropagation();
                        return;
                    }
                    if (ctrl && key === "u") {
                        e.preventDefault();
                        e.stopPropagation();
                        return;
                    }
                }
            }["PagoFastCashForm.useEffect.onKeyDown"];
            window.addEventListener("contextmenu", onContextMenu);
            window.addEventListener("keydown", onKeyDown, true);
            return ({
                "PagoFastCashForm.useEffect": ()=>{
                    window.removeEventListener("contextmenu", onContextMenu);
                    window.removeEventListener("keydown", onKeyDown, true);
                }
            })["PagoFastCashForm.useEffect"];
        }
    }["PagoFastCashForm.useEffect"], []);
    // =========================
    // 7) COLORES
    // =========================
    const [cardBg, setCardBg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#ffffff");
    const [cardBgHexInput, setCardBgHexInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#ffffff");
    const [primaryColor, setPrimaryColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#0F56F7");
    const [primaryHexInput, setPrimaryHexInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#0F56F7");
    const [cardBgError, setCardBgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [primaryError, setPrimaryError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            if (merged?.["card_bg_color"] && isHex(merged["card_bg_color"])) {
                setCardBg(String(merged["card_bg_color"]));
                setCardBgHexInput(String(merged["card_bg_color"]));
            }
            if (merged?.["primary_color"] && isHex(merged["primary_color"])) {
                setPrimaryColor(String(merged["primary_color"]));
                setPrimaryHexInput(String(merged["primary_color"]));
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["PagoFastCashForm.useEffect"], [
        merged?.["card_bg_color"],
        merged?.["primary_color"]
    ]);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shareLink, setShareLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
        },
        {
            label: "Very Light Blue",
            value: "#F0F9FF"
        },
        {
            label: "Lavanda",
            value: "#F5F3FF"
        },
        {
            label: "Rosa claro",
            value: "#FFF1F2"
        },
        {
            label: "Verde suave",
            value: "#ECFDF5"
        },
        {
            label: "Amarillo suave",
            value: "#FFFBEB"
        },
        {
            label: "Gris perla",
            value: "#F1F5F9"
        },
        {
            label: "Humo",
            value: "#F3F4F6"
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
        },
        {
            label: "Morado",
            value: "#7C3AED"
        },
        {
            label: "Teal",
            value: "#06B6D4"
        },
        {
            label: "Indigo",
            value: "#4F46E5"
        },
        {
            label: "Cian",
            value: "#0891B2"
        },
        {
            label: "Rosa fuerte",
            value: "#EC4899"
        },
        {
            label: "Amarillo",
            value: "#F59E0B"
        },
        {
            label: "Gris oscuro",
            value: "#374151"
        },
        {
            label: "Negro",
            value: "#111827"
        }
    ];
    const disabled = saving;
    async function crearLinkEstatico() {
        const payload = {
            plantilla_pago_id: plantillaId,
            // IDs de ITEMS elegidos en esta pantalla
            subproducto_lista_id: subproductoListaId || null,
            metodo_pago_lista_id: metodoPagoListaId || null,
            producto_lista_id: productoListaId || null,
            liga_pago_lista_id: ligaPagoListaId || null,
            subproducto: selectedSubproducto?.label ?? String(merged?.["subproducto"] ?? merged?.["ubproducto"] ?? ""),
            cuenta_bancaria: cuentaBancaria,
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
        const res = await fetch("/api/plantillas-temporales", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const json = await res.json().catch(()=>({}));
        const j = json ?? {};
        if (!res.ok) {
            throw new Error(j?.["error"] ?? "No se pudo generar el link");
        }
        return String(j?.["link"]);
    }
    const handleConfirmAndLock = async ()=>{
        if (saving) return;
        setSaving(true);
        try {
            const link = await crearLinkEstatico();
            setShareLink(link);
            window.location.href = link;
        } catch (e) {
            const msg = e instanceof Error ? e.message : "Error generando link";
            alert(msg);
        } finally{
            setSaving(false);
        }
    };
    // =========================
    // UI Estados
    // =========================
    if (loadingPlantilla) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-[#152032] text-white p-6",
            children: [
                "Cargando plantilla ",
                plantillaId ? `#${plantillaId}` : "",
                "…"
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
            lineNumber: 537,
            columnNumber: 9
        }, this);
    }
    if (errorPlantilla) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-[#152032] text-white p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-bold mb-2",
                        children: "No se pudo cargar la plantilla"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                        lineNumber: 547,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm opacity-90",
                        children: errorPlantilla
                    }, void 0, false, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                        lineNumber: 548,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                lineNumber: 546,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
            lineNumber: 545,
            columnNumber: 9
        }, this);
    }
    const showConfigWarning = !loadingConfig && !configListas;
    // =========================
    // Render
    // =========================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen flex items-center justify-center p-6 relative bg-[#152032]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-6 top-16 z-50 flex flex-col gap-4 w-60",
                children: [
                    showConfigWarning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-yellow-500/15 border border-yellow-400/40 text-yellow-100 text-xs p-3 rounded-lg",
                        children: [
                            "Esta plantilla no tiene ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "config personalizada"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 564,
                                columnNumber: 39
                            }, this),
                            " (origen). Los selects filtrados pueden aparecer vacíos."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                        lineNumber: 563,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                children: "Mostrar datos del cliente"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 570,
                                columnNumber: 13
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
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                        lineNumber: 572,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full relative after:content-[''] after:w-5 after:h-5 after:bg-white after:rounded-full after:absolute after:left-1 after:top-0.5 peer-checked:after:translate-x-5 transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                        lineNumber: 579,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 571,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                        lineNumber: 569,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 p-3 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-white mb-2 font-medium",
                                children: "Fondo de la tarjeta"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 588,
                                columnNumber: 13
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
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                        lineNumber: 600,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 589,
                                columnNumber: 13
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
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                        lineNumber: 607,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-md border",
                                        style: {
                                            backgroundColor: isHex(cardBgHexInput) ? cardBgHexInput : cardBg
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                        lineNumber: 615,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 606,
                                columnNumber: 13
                            }, this),
                            cardBgError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-rose-400 mt-1",
                                children: cardBgError
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 620,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                        lineNumber: 587,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 p-3 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-white mb-2 font-medium",
                                children: "Color del botón / burbuja"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 624,
                                columnNumber: 13
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
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                        lineNumber: 636,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 625,
                                columnNumber: 13
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
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                        lineNumber: 643,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-md border",
                                        style: {
                                            backgroundColor: isHex(primaryHexInput) ? primaryHexInput : primaryColor
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                        lineNumber: 651,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 642,
                                columnNumber: 13
                            }, this),
                            primaryError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-rose-400 mt-1",
                                children: primaryError
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 656,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                        lineNumber: 623,
                        columnNumber: 11
                    }, this),
                    shareLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 p-3 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-white mb-2 font-medium",
                                children: "Link generado"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 661,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "w-full p-2 rounded-md text-sm",
                                value: shareLink,
                                readOnly: true
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 662,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "mt-2 w-full p-2 rounded-md text-sm bg-white/10 hover:bg-white/20 text-white",
                                onClick: ()=>navigator.clipboard.writeText(shareLink),
                                type: "button",
                                children: "Copiar link"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 663,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                        lineNumber: 660,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                lineNumber: 561,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[420px] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.45)]",
                style: {
                    backgroundColor: cardBg
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-[160px] flex flex-col items-center pt-6",
                        style: {
                            background: "linear-gradient(180deg,#5CB0FF 0%,#A3D4FF 100%)"
                        },
                        children: [
                            fotoHabilitada ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow",
                                children: resolvedLogoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: resolvedLogoUrl,
                                    className: "w-full h-full object-cover",
                                    alt: "logo",
                                    crossOrigin: "anonymous",
                                    onError: ()=>console.log("❌ NO carga IMG:", resolvedLogoUrl)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                    lineNumber: 684,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-bold text-[#142546]",
                                    children: "IMG"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                    lineNumber: 692,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 682,
                                columnNumber: 15
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "mt-2 text-xs px-3 py-1 rounded-md bg-white/70 hover:bg-white text-[#142546] font-semibold disabled:opacity-60",
                                onClick: ()=>setFotoHabilitada((v)=>!v),
                                disabled: disabled,
                                children: fotoHabilitada ? "Inhabilitar foto" : "Habilitar foto"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 697,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 w-[280px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "w-full p-2 rounded-md text-sm bg-white/90 text-[#142546] font-semibold",
                                    value: productoListaId,
                                    onChange: (e)=>setProductoListaId(e.target.value),
                                    disabled: disabled,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: labelProductoListaId
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                            lineNumber: 714,
                                            columnNumber: 17
                                        }, this),
                                        optionsProducto.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: o.id,
                                                children: o.label
                                            }, o.id, false, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                lineNumber: 716,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                    lineNumber: 708,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 707,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                        lineNumber: 677,
                        columnNumber: 11
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
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 728,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: monto,
                                onChange: (e)=>setMonto(e.target.value),
                                placeholder: "$0.00",
                                className: "w-full bg-transparent text-3xl font-bold outline-none",
                                disabled: disabled
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 729,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                        lineNumber: 724,
                        columnNumber: 11
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
                                        className: "flex justify-between items-center py-3 border-b gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: labelSubproductoListaId
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                lineNumber: 743,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "text-sm text-gray-700 text-right bg-transparent font-semibold outline-none",
                                                value: subproductoListaId,
                                                onChange: (e)=>setSubproductoListaId(e.target.value),
                                                disabled: disabled,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: labelSubproductoListaId
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                        lineNumber: 750,
                                                        columnNumber: 19
                                                    }, this),
                                                    optionsSubproducto.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: o.id,
                                                            children: o.label
                                                        }, o.id, false, {
                                                            fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                            lineNumber: 752,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                lineNumber: 744,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                        lineNumber: 742,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center py-3 border-b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Importe a Pagar"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                lineNumber: 760,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: importePagar,
                                                onChange: (e)=>setImportePagar(e.target.value),
                                                className: "text-gray-400 text-right w-28 bg-transparent font-semibold outline-none",
                                                disabled: disabled
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                lineNumber: 761,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                        lineNumber: 759,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center py-3 border-b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Fecha Vencimiento"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                lineNumber: 771,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: fechaVencimiento,
                                                onChange: (e)=>setFechaVencimiento(e.target.value),
                                                className: "text-gray-400 text-right bg-transparent outline-none",
                                                disabled: disabled
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                lineNumber: 772,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                        lineNumber: 770,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Días vencimiento"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                lineNumber: 782,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-500",
                                                children: [
                                                    diasVencidos,
                                                    " días"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                lineNumber: 783,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                        lineNumber: 781,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 740,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-transparent rounded-xl p-3 shadow-sm",
                                style: {
                                    backgroundColor: cardBg
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-medium text-gray-700 mb-2",
                                        children: labelMetodoPagoListaId
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                        lineNumber: 789,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center bg-[#F8FAFB] p-4 rounded-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "w-full text-center text-xs text-gray-600 bg-transparent outline-none",
                                                    value: metodoPagoListaId,
                                                    onChange: (e)=>setMetodoPagoListaId(e.target.value),
                                                    disabled: disabled,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: labelMetodoPagoListaId
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                            lineNumber: 799,
                                                            columnNumber: 21
                                                        }, this),
                                                        optionsMetodoPago.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: o.id,
                                                                children: o.label
                                                            }, o.id, false, {
                                                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                                lineNumber: 801,
                                                                columnNumber: 23
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                    lineNumber: 793,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "w-full text-center text-lg md:text-xl lg:text-2xl font-extrabold text-gray-700 bg-transparent outline-none",
                                                        value: ligaPagoListaId,
                                                        onChange: (e)=>setLigaPagoListaId(e.target.value),
                                                        disabled: disabled,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: labelLigaPagoListaId
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                                lineNumber: 814,
                                                                columnNumber: 23
                                                            }, this),
                                                            optionsLigaPago.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: o.id,
                                                                    children: o.label
                                                                }, o.id, false, {
                                                                    fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                                    lineNumber: 816,
                                                                    columnNumber: 25
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                        lineNumber: 808,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                    lineNumber: 807,
                                                    columnNumber: 19
                                                }, this),
                                                cuentaBancaria ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-xs text-gray-500",
                                                    children: cuentaBancaria
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                    lineNumber: 823,
                                                    columnNumber: 37
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                            lineNumber: 792,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                        lineNumber: 791,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 788,
                                columnNumber: 13
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
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                lineNumber: 831,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "text-sm text-right bg-transparent outline-none text-gray-700",
                                                placeholder: "Nombre",
                                                value: nombre,
                                                onChange: (e)=>setNombre(e.target.value),
                                                disabled: disabled
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                lineNumber: 832,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                        lineNumber: 830,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Teléfono"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                lineNumber: 842,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "text-sm text-right bg-transparent outline-none text-gray-700",
                                                placeholder: "Teléfono",
                                                value: telefono,
                                                onChange: (e)=>setTelefono(e.target.value),
                                                disabled: disabled
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                                lineNumber: 843,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                        lineNumber: 841,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 829,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleConfirmAndLock,
                                className: "w-full text-white p-3 rounded-xl text-lg font-semibold mt-2 disabled:opacity-60",
                                style: {
                                    backgroundColor: primaryColor
                                },
                                disabled: disabled,
                                type: "button",
                                children: saving ? "Generando link..." : "Confirmar y Generar Link"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 854,
                                columnNumber: 13
                            }, this),
                            !baseListo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-white/70 text-center mt-1",
                                children: [
                                    "Tip: selecciona ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Producto"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                        lineNumber: 866,
                                        columnNumber: 33
                                    }, this),
                                    " y ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Liga"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                        lineNumber: 866,
                                        columnNumber: 51
                                    }, this),
                                    " para que aparezcan título/cuenta."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                                lineNumber: 865,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                        lineNumber: 739,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
                lineNumber: 673,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/multa-main/multa-main/app/gestion/multas/plantillas/personalizada/[id]/page.tsx",
        lineNumber: 560,
        columnNumber: 7
    }, this);
}
_s(PagoFastCashForm, "NyzluWLlqzMrFU7y3nGhWqJFmY0=", false, function() {
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

//# sourceMappingURL=Downloads_multa-main_multa-main_81687a4d._.js.map