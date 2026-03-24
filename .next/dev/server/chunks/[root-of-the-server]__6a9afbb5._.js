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
"[project]/Downloads/multa-main/multa-main/app/api/listas/[id]/items/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["Pool"]({
    connectionString: process.env.DATABASE_URL
});
async function GET(req, ctx) {
    const { id } = await ctx.params;
    const plantillaId = Number(id);
    if (!Number.isInteger(plantillaId)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json([]);
    }
    const { searchParams } = new URL(req.url);
    const origenRaw = searchParams.get("origen");
    const origen = typeof origenRaw === "string" && origenRaw.trim() ? origenRaw.trim() : null;
    try {
        // Diagnóstico de conexión real
        const debugConn = await pool.query(`
      SELECT current_database() AS db, current_schema() AS schema
    `);
        console.log("DEBUG DB/SCHEMA GET:", debugConn.rows[0]);
        const debugCols = await pool.query(`
      SELECT column_name
      FROM information_schema.columns
      WHERE table_schema = 'public'
        AND table_name = 'lista_items'
      ORDER BY ordinal_position
    `);
        console.log("DEBUG COLUMNAS public.lista_items GET:", debugCols.rows.map((r)=>r.column_name));
        const query = `
      SELECT
        id,
        label,
        value,
        url_imagen,
        orden,
        origen
      FROM public.lista_items
      WHERE plantilla_id = $1
        AND ($2::text IS NULL OR origen = $2)
      ORDER BY orden ASC NULLS LAST, id ASC
    `;
        const { rows } = await pool.query(query, [
            plantillaId,
            origen
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(rows);
    } catch (err) {
        console.error("GET /api/listas/[id]/items:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json([]);
    }
}
async function POST(req, ctx) {
    const { id } = await ctx.params;
    const plantillaId = Number(id);
    if (!Number.isInteger(plantillaId)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "ID inválido"
        }, {
            status: 400
        });
    }
    try {
        const body = await req.json();
        const label = typeof body?.label === "string" ? body.label.trim() : "";
        const value = typeof body?.value === "string" ? body.value.trim() : "";
        const url_imagen = typeof body?.url_imagen === "string" && body.url_imagen.trim() ? body.url_imagen.trim() : null;
        const origen = typeof body?.origen === "string" && body.origen.trim() ? body.origen.trim() : null;
        if (!label) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "label requerido"
            }, {
                status: 400
            });
        }
        // Diagnóstico de conexión real
        const debugConn = await pool.query(`
      SELECT current_database() AS db, current_schema() AS schema
    `);
        console.log("DEBUG DB/SCHEMA POST:", debugConn.rows[0]);
        const debugCols = await pool.query(`
      SELECT column_name
      FROM information_schema.columns
      WHERE table_schema = 'public'
        AND table_name = 'lista_items'
      ORDER BY ordinal_position
    `);
        console.log("DEBUG COLUMNAS public.lista_items POST:", debugCols.rows.map((r)=>r.column_name));
        const query = `
      INSERT INTO public.lista_items (
        plantilla_id,
        label,
        value,
        url_imagen,
        origen,
        orden
      )
      VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        COALESCE(
          (
            SELECT MAX(li.orden) + 1
            FROM public.lista_items li
            WHERE li.plantilla_id = $1
          ),
          1
        )
      )
      RETURNING
        id,
        label,
        value,
        url_imagen,
        orden,
        origen
    `;
        const { rows } = await pool.query(query, [
            plantillaId,
            label,
            value || label,
            url_imagen,
            origen
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(rows[0], {
            status: 201
        });
    } catch (err) {
        console.error("POST /api/listas/[id]/items:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Error al crear item"
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6a9afbb5._.js.map