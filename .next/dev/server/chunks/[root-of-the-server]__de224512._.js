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
"[project]/Downloads/multa-main/multa-main/app/api/plantillas-temporales/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/server.js [app-route] (ecmascript)");
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
function safeBool(v) {
    if (v === true || v === false) return v;
    if (v === "true") return true;
    if (v === "false") return false;
    return null;
}
function safeInt(v) {
    if (v === undefined || v === null || v === "") return null;
    const n = Number(v);
    return Number.isFinite(n) ? Math.trunc(n) : null;
}
async function getLabelById(id) {
    const r = await pool.query(`SELECT label FROM lista_items WHERE id = $1 LIMIT 1`, [
        id
    ]);
    return r.rows[0]?.label ? String(r.rows[0].label) : null;
}
async function getCuentaByLigaId(id) {
    const r = await pool.query(`SELECT value FROM lista_items WHERE id = $1 LIMIT 1`, [
        id
    ]);
    return r.rows[0]?.value != null ? String(r.rows[0].value) : null;
}
async function POST(req) {
    try {
        const body = await req.json().catch(()=>({}));
        // 👇 ID DEL USUARIO (CAMBIA ESTO CUANDO TENGAS LOGIN)
        const usuario_id = 1;
        const producto_lista_id = safeString(body.producto_lista_id);
        const subproducto_lista_id = safeString(body.subproducto_lista_id);
        const metodo_pago_lista_id = safeString(body.metodo_pago_lista_id);
        const liga_pago_lista_id = safeString(body.liga_pago_lista_id);
        /* ===== RESOLVER CAMPOS ===== */ const producto = safeString(body.producto) || (producto_lista_id ? await getLabelById(producto_lista_id) : null);
        if (!producto) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No se pudo resolver 'producto'"
            }, {
                status: 400
            });
        }
        const cuenta_bancaria = safeString(body.cuenta_bancaria) || (liga_pago_lista_id ? await getCuentaByLigaId(liga_pago_lista_id) : null);
        if (!cuenta_bancaria) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No se pudo resolver 'cuenta_bancaria'"
            }, {
                status: 400
            });
        }
        /* ===== TOKEN ===== */ const token = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(16).toString("hex");
        /* ===== INSERT ===== */ await pool.query(`
      INSERT INTO plantillas_temporales (
        token,
        usuario_id,

        producto,
        cuenta_bancaria,

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

        locked
      )
      VALUES (
        $1,$2,
        $3,$4,
        $5,$6,$7,$8,
        $9,$10,$11,$12,
        $13,$14,
        $15,$16,$17,$18,
        true
      )
      `, [
            token,
            usuario_id,
            producto,
            cuenta_bancaria,
            safeInt(producto_lista_id),
            safeInt(subproducto_lista_id),
            safeInt(metodo_pago_lista_id),
            safeInt(liga_pago_lista_id),
            safeString(body.monto),
            safeString(body.importe_pagar),
            safeString(body.fecha_vencimiento),
            safeInt(body.dias_vencidos),
            safeString(body.nombre_cliente),
            safeString(body.telefono_cliente),
            safeBool(body.mostrar_extras) ?? true,
            safeBool(body.foto_habilitada) ?? true,
            safeString(body.card_bg_color),
            safeString(body.primary_color)
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            token,
            link: `/pago/${token}`
        });
    } catch (e) {
        console.error("POST /api/plantillas-temporales error:", e);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: e?.message || "Error interno"
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__de224512._.js.map