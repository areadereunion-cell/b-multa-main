module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/pg [external] (pg, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("pg");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/Downloads/b-multa-main/multa-main/app/api/plantillas-temporales/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/b-multa-main/multa-main/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const runtime = "nodejs";
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["Pool"]({
    connectionString: process.env.DATABASE_URL,
    ssl: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined
});
/* =====================
   HELPERS
===================== */ function safeString(v) {
    if (v === undefined || v === null) return null;
    const s = String(v).trim();
    return s === "" ? null : s;
}
function safeInt(v) {
    if (v === undefined || v === null || v === "") return null;
    const n = Number(v);
    return Number.isFinite(n) ? Math.trunc(n) : null;
}
function safeBool(v) {
    if (v === true || v === false) return v;
    if (v === "true") return true;
    if (v === "false") return false;
    return null;
}
async function getItemById(id) {
    const r = await pool.query(`SELECT label, value, url_imagen FROM lista_items WHERE id = $1 LIMIT 1`, [
        id
    ]);
    return r.rows[0] || null;
}
async function POST(req) {
    try {
        const body = await req.json().catch(()=>({}));
        console.log("BODY:", body);
        const usuario_id = 1;
        const producto_lista_id = safeInt(body.producto_lista_id);
        const subproducto_lista_id = safeInt(body.subproducto_lista_id);
        const metodo_pago_lista_id = safeInt(body.metodo_pago_lista_id);
        const cuenta_lista_id = safeInt(body.cuenta_bancaria_lista_id);
        const liga_pago_lista_id = safeInt(body.liga_pago_lista_id);
        /* =====================
       PRODUCTO
    ===================== */ let producto = safeString(body.producto);
        if (!producto && producto_lista_id) {
            const item = await getItemById(producto_lista_id);
            producto = item?.label;
        }
        if (!producto && subproducto_lista_id) {
            const item = await getItemById(subproducto_lista_id);
            producto = item?.label;
        }
        if (!producto) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Producto no enviado ni resoluble"
            }, {
                status: 400
            });
        }
        /* =====================
       MÉTODO DE PAGO
    ===================== */ let metodo_pago = safeString(body.metodo_pago);
        if (!metodo_pago && metodo_pago_lista_id) {
            const item = await getItemById(metodo_pago_lista_id);
            metodo_pago = item?.label;
        }
        /* =====================
       CUENTA BANCARIA
    ===================== */ let cuenta_bancaria = safeString(body.cuenta_bancaria);
        if (!cuenta_bancaria && cuenta_lista_id) {
            const item = await getItemById(cuenta_lista_id);
            cuenta_bancaria = item?.value;
        }
        // fallback (si no mandas cuenta explícita)
        if (!cuenta_bancaria && liga_pago_lista_id) {
            const item = await getItemById(liga_pago_lista_id);
            cuenta_bancaria = item?.value;
        }
        if (!cuenta_bancaria) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Cuenta bancaria no resoluble"
            }, {
                status: 400
            });
        }
        /* =====================
       LOGO (del producto)
    ===================== */ let logo_url = safeString(body.logo_url);
        if (!logo_url && producto_lista_id) {
            const item = await getItemById(producto_lista_id);
            logo_url = item?.url_imagen;
        }
        /* =====================
       TOKEN
    ===================== */ const token = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(16).toString("hex");
        /* =====================
       INSERT
    ===================== */ await pool.query(`
      INSERT INTO plantillas_temporales (
        token,
        usuario_id,
        producto,
        cuenta_bancaria,
        metodo_pago,
        logo_url,
        producto_lista_id,
        subproducto_lista_id,
        metodo_pago_lista_id,
        liga_pago_lista_id,
        monto,
        importe_pagar,
        fecha_vencimiento,
        dias_vencidos,
        nombre_cliente,
        telefono_cliente,
        mostrar_extras,
        foto_habilitada,
        card_bg_color,
        primary_color,
        tipo_plantilla,
        locked,
        pagado
      )
      VALUES (
        $1,$2,
        $3,$4,$5,$6,
        $7,$8,$9,$10,
        $11,$12,$13,$14,
        $15,$16,
        $17,$18,$19,$20,
        $21,$22,$23
      )
      `, [
            token,
            usuario_id,
            producto,
            cuenta_bancaria,
            metodo_pago,
            logo_url,
            producto_lista_id,
            subproducto_lista_id,
            metodo_pago_lista_id,
            liga_pago_lista_id,
            safeString(body.monto),
            safeString(body.importe_pagar),
            safeString(body.fecha_vencimiento),
            safeInt(body.dias_vencidos),
            safeString(body.nombre_cliente),
            safeString(body.telefono_cliente),
            safeBool(body.mostrar_extras) ?? true,
            safeBool(body.foto_habilitada) ?? true,
            safeString(body.card_bg_color) ?? "#FFFFFF",
            safeString(body.primary_color) ?? "#1D4ED8",
            safeString(body.tipo_plantilla) ?? "1",
            true,
            false
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            token,
            link: `/pay/${token}`
        });
    } catch (e) {
        console.error(e);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: e?.message || "Error interno"
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dcfb3c16._.js.map