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
"[project]/Downloads/b-multa-main/multa-main/app/api/plantillas-personalizadas/config/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/b-multa-main/multa-main/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const runtime = "nodejs";
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["Pool"]({
    connectionString: process.env.DATABASE_URL,
    ssl: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined
});
function safeInt(value) {
    if (value === null || value === undefined || value === "") return null;
    const n = Number(value);
    return Number.isFinite(n) ? Math.trunc(n) : null;
}
function norm(value) {
    return String(value ?? "").trim().toLowerCase().replace(/\s+/g, "_");
}
async function getListaById(id) {
    if (!id) return null;
    const result = await pool.query(`
    SELECT id, nombre, tipo
    FROM listas
    WHERE id = $1
    LIMIT 1
    `, [
        id
    ]);
    if (result.rows.length === 0) return null;
    return result.rows[0];
}
function matchesExpectedType(lista, expected) {
    if (!lista) return false;
    const tipo = norm(lista.tipo);
    const nombre = norm(lista.nombre);
    if (expected === "subproducto") {
        return tipo === "subproducto" || nombre === "subproducto" || nombre.startsWith("subproducto_") || nombre.includes("subproducto");
    }
    if (expected === "producto") {
        return tipo === "producto" || nombre === "producto" || nombre.startsWith("producto_") || nombre.includes("producto") && !nombre.includes("subproducto");
    }
    if (expected === "metodo_pago") {
        return tipo === "metodo_pago" || nombre === "metodo_pago" || nombre.startsWith("metodo_pago_") || nombre.includes("metodo_pago");
    }
    if (expected === "liga_pago") {
        return tipo === "liga_pago" || tipo === "cuenta_bancaria" || nombre === "liga_pago" || nombre.startsWith("liga_pago_") || nombre.includes("liga_pago") || nombre === "cuenta_bancaria" || nombre.startsWith("cuenta_bancaria_") || nombre.includes("cuenta_bancaria");
    }
    return false;
}
async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const plantillaId = safeInt(searchParams.get("plantilla_id"));
        if (!plantillaId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "plantilla_id requerido"
            }, {
                status: 400
            });
        }
        const result = await pool.query(`
      SELECT
        plantilla_id,
        subproducto_lista_id,
        liga_pago_lista_id,
        metodo_pago_lista_id,
        producto_lista_id
      FROM plantillas_personalizadas_config
      WHERE plantilla_id = $1
      LIMIT 1
      `, [
            plantillaId
        ]);
        if (result.rows.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No existe config para esta plantilla"
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result.rows[0]);
    } catch (e) {
        console.error("❌ ERROR GET config:", e);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: e?.message || "Error interno"
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    try {
        const body = await req.json();
        const plantilla_id = safeInt(body?.plantilla_id);
        const subproducto_lista_id = safeInt(body?.subproducto_lista_id);
        const liga_pago_lista_id = safeInt(body?.liga_pago_lista_id);
        const metodo_pago_lista_id = safeInt(body?.metodo_pago_lista_id);
        const producto_lista_id = safeInt(body?.producto_lista_id);
        if (!plantilla_id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "plantilla_id requerido"
            }, {
                status: 400
            });
        }
        if (!subproducto_lista_id || !liga_pago_lista_id || !metodo_pago_lista_id || !producto_lista_id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Debes enviar subproducto_lista_id, liga_pago_lista_id, metodo_pago_lista_id y producto_lista_id"
            }, {
                status: 400
            });
        }
        const [subproductoLista, ligaPagoLista, metodoPagoLista, productoLista] = await Promise.all([
            getListaById(subproducto_lista_id),
            getListaById(liga_pago_lista_id),
            getListaById(metodo_pago_lista_id),
            getListaById(producto_lista_id)
        ]);
        if (!subproductoLista || !ligaPagoLista || !metodoPagoLista || !productoLista) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Uno o más IDs no existen en la tabla listas",
                debug: {
                    subproducto_lista_id,
                    liga_pago_lista_id,
                    metodo_pago_lista_id,
                    producto_lista_id,
                    subproductoExiste: !!subproductoLista,
                    ligaExiste: !!ligaPagoLista,
                    metodoExiste: !!metodoPagoLista,
                    productoExiste: !!productoLista
                }
            }, {
                status: 400
            });
        }
        const subproductoOk = matchesExpectedType(subproductoLista, "subproducto");
        const ligaPagoOk = matchesExpectedType(ligaPagoLista, "liga_pago");
        const metodoPagoOk = matchesExpectedType(metodoPagoLista, "metodo_pago");
        const productoOk = matchesExpectedType(productoLista, "producto");
        if (!subproductoOk || !ligaPagoOk || !metodoPagoOk || !productoOk) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Config inválida: estás mandando IDs que no corresponden al tipo",
                debug: {
                    subproducto: {
                        recibido: subproductoLista,
                        valido: subproductoOk,
                        esperado: "subproducto / subproducto_*"
                    },
                    liga_pago: {
                        recibido: ligaPagoLista,
                        valido: ligaPagoOk,
                        esperado: "liga_pago / cuenta_bancaria / *_*"
                    },
                    metodo_pago: {
                        recibido: metodoPagoLista,
                        valido: metodoPagoOk,
                        esperado: "metodo_pago / metodo_pago_*"
                    },
                    producto: {
                        recibido: productoLista,
                        valido: productoOk,
                        esperado: "producto / producto_*"
                    }
                }
            }, {
                status: 400
            });
        }
        await pool.query(`DELETE FROM plantillas_personalizadas_config WHERE plantilla_id = $1`, [
            plantilla_id
        ]);
        const insertResult = await pool.query(`
      INSERT INTO plantillas_personalizadas_config
      (
        plantilla_id,
        subproducto_lista_id,
        liga_pago_lista_id,
        metodo_pago_lista_id,
        producto_lista_id
      )
      VALUES ($1,$2,$3,$4,$5)
      RETURNING
        plantilla_id,
        subproducto_lista_id,
        liga_pago_lista_id,
        metodo_pago_lista_id,
        producto_lista_id
      `, [
            plantilla_id,
            subproducto_lista_id,
            liga_pago_lista_id,
            metodo_pago_lista_id,
            producto_lista_id
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            data: insertResult.rows[0]
        });
    } catch (e) {
        console.error("❌ ERROR POST config:", e);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__3deb2a99._.js.map