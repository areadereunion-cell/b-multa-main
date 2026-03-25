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
"[project]/Downloads/b-multa-main/multa-main/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getClient",
    ()=>getClient,
    "poolInstance",
    ()=>poolInstance,
    "query",
    ()=>query
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
}
const pool = global.pgPool ?? new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["Pool"]({
    connectionString: process.env.DATABASE_URL,
    max: 5
});
if ("TURBOPACK compile-time truthy", 1) {
    global.pgPool = pool;
}
const query = (text, params)=>pool.query(text, params);
const getClient = ()=>pool.connect();
const poolInstance = pool;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/Downloads/b-multa-main/multa-main/app/api/collection/assignable-users/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/b-multa-main/multa-main/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/b-multa-main/multa-main/lib/db.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
const runtime = "nodejs";
;
;
async function getAuth(req) {
    const role = req.headers.get("x-role") || "admin";
    return {
        role
    };
}
// ✅ Ya sabemos la real (pero dejo fallback por si luego agregas otra)
const TABLES = [
    "public.users",
    "public.bd_users",
    "public.usuarios"
];
// posibles nombres de columna de rol
const ROLE_COLS = [
    "role",
    "rol",
    "tipo",
    "perfil",
    "cargo"
];
async function GET(req) {
    const { role } = await getAuth(req);
    if (role !== "admin") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: "No autorizado"
        }, {
            status: 403
        });
    }
    const client = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["poolInstance"].connect();
    try {
        // 1) ¿Qué tablas existen?
        const exist = await client.query(`
      SELECT table_schema, table_name
      FROM information_schema.tables
      WHERE table_schema='public'
        AND table_name IN ('users','bd_users','usuarios')
      ORDER BY table_name
    `);
        const existingTables = exist.rows.map((r)=>`public.${r.table_name}`);
        if (existingTables.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "No existe users/bd_users/usuarios en public."
            }, {
                status: 500
            });
        }
        const table = TABLES.find((t)=>existingTables.includes(t)) ?? existingTables[0];
        // 2) ¿Qué columnas tiene?
        const colsRes = await client.query(`
      SELECT column_name
      FROM information_schema.columns
      WHERE table_schema='public' AND table_name=$1
      ORDER BY ordinal_position
      `, [
            table.replace("public.", "")
        ]);
        const cols = colsRes.rows.map((r)=>r.column_name);
        const colset = new Set(cols);
        const idCol = colset.has("id") ? "id" : null;
        // ✅ tu tabla usa username
        const usernameCol = colset.has("username") ? "username" : colset.has("nombre") ? "nombre" : colset.has("name") ? "name" : null;
        const roleCol = ROLE_COLS.find((c)=>colset.has(c)) ?? null;
        // 3) Validación mínima (no pedimos email porque no existe en tu tabla)
        if (!idCol || !usernameCol) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "Faltan columnas requeridas (id/username).",
                debug: {
                    table,
                    columns: cols
                }
            }, {
                status: 500
            });
        }
        if (!roleCol) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "No encontré columna de rol (role/rol/tipo/perfil/cargo).",
                debug: {
                    table,
                    columns: cols
                }
            }, {
                status: 500
            });
        }
        // 4) Filtrar asesores
        const sql = `
      SELECT ${idCol}::text AS id,
             ${usernameCol}::text AS username
      FROM ${table}
      WHERE LOWER(${roleCol}::text) = 'asesor'
      ORDER BY ${usernameCol} ASC
      LIMIT 500
    `;
        const r = await client.query(sql);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            users: r.rows,
            debug: {
                table,
                roleCol
            }
        });
    } catch (e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: e?.message || "Error BD",
            detail: e?.detail,
            code: e?.code
        }, {
            status: 500
        });
    } finally{
        client.release();
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a4d4442f._.js.map