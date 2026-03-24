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
"[project]/Downloads/multa-main/multa-main/app/api/plantillas-personalizadas/config/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/multa-main/multa-main/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const runtime = "nodejs";
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["Pool"]({
    connectionString: process.env.DATABASE_URL
});
function toInt(v) {
    const n = Number(v);
    return Number.isInteger(n) ? n : null;
}
async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const plantillaIdRaw = searchParams.get("plantilla_id");
        if (!plantillaIdRaw) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "plantilla_id es obligatorio"
            }, {
                status: 400
            });
        }
        const plantilla_id = toInt(plantillaIdRaw);
        if (!plantilla_id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "plantilla_id inválido"
            }, {
                status: 400
            });
        }
        const { rows } = await pool.query(`
      SELECT
        plantilla_id,
        subproducto_lista_id,
        metodo_pago_lista_id,
        producto_lista_id,
        liga_pago_lista_id
      FROM plantillas_personalizadas_config
      WHERE plantilla_id = $1
      LIMIT 1
      `, [
            plantilla_id
        ]);
        if (rows.length === 0) return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(null, {
            status: 200
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(rows[0], {
            status: 200
        });
    } catch (e) {
        console.error("❌ GET config error:", e);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Error interno obteniendo configuración"
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    try {
        const body = await req.json().catch(()=>({}));
        const plantilla_id = toInt(body?.plantilla_id);
        const subproducto_lista_id = toInt(body?.subproducto_lista_id);
        const metodo_pago_lista_id = toInt(body?.metodo_pago_lista_id);
        const producto_lista_id = toInt(body?.producto_lista_id);
        const liga_pago_lista_id = toInt(body?.liga_pago_lista_id);
        // ✅ validación fuerte
        if (!plantilla_id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "plantilla_id inválido"
            }, {
                status: 400
            });
        }
        if (!subproducto_lista_id || !metodo_pago_lista_id || !producto_lista_id || !liga_pago_lista_id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Faltan lista_id: subproducto/metodo_pago/producto/liga_pago"
            }, {
                status: 400
            });
        }
        // ✅ Validar que cada id corresponde a su tipo correcto en tabla listas
        const ids = [
            subproducto_lista_id,
            metodo_pago_lista_id,
            producto_lista_id,
            liga_pago_lista_id
        ];
        const { rows: listas } = await pool.query(`SELECT id, tipo FROM listas WHERE id = ANY($1::int[])`, [
            ids
        ]);
        const mapTipo = new Map();
        for (const r of listas)mapTipo.set(Number(r.id), String(r.tipo));
        // faltantes
        for (const id of ids){
            if (!mapTipo.has(id)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: `La lista_id=${id} no existe en tabla listas`
                }, {
                    status: 400
                });
            }
        }
        // mismatch (esto evita que te guarde producto=liga_pago)
        const expected = [
            {
                key: "subproducto_lista_id",
                id: subproducto_lista_id,
                tipo: "subproducto"
            },
            {
                key: "metodo_pago_lista_id",
                id: metodo_pago_lista_id,
                tipo: "metodo_pago"
            },
            {
                key: "producto_lista_id",
                id: producto_lista_id,
                tipo: "producto"
            },
            {
                key: "liga_pago_lista_id",
                id: liga_pago_lista_id,
                tipo: "liga_pago"
            }
        ];
        const mismatches = expected.map((x)=>{
            const real = mapTipo.get(x.id);
            return real !== x.tipo ? {
                campo: x.key,
                id: x.id,
                esperado: x.tipo,
                real
            } : null;
        }).filter(Boolean);
        if (mismatches.length > 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Config inválida: estás mandando IDs que no corresponden al tipo",
                mismatches
            }, {
                status: 400
            });
        }
        // ✅ Upsert: si ya existe config para plantilla, actualiza. Si no, inserta.
        // IMPORTANTE: esto requiere UNIQUE(plantilla_id) en plantillas_personalizadas_config.
        const { rows } = await pool.query(`
      INSERT INTO plantillas_personalizadas_config
        (plantilla_id, subproducto_lista_id, metodo_pago_lista_id, producto_lista_id, liga_pago_lista_id)
      VALUES
        ($1, $2, $3, $4, $5)
      ON CONFLICT (plantilla_id)
      DO UPDATE SET
        subproducto_lista_id = EXCLUDED.subproducto_lista_id,
        metodo_pago_lista_id = EXCLUDED.metodo_pago_lista_id,
        producto_lista_id = EXCLUDED.producto_lista_id,
        liga_pago_lista_id = EXCLUDED.liga_pago_lista_id
      RETURNING *
      `, [
            plantilla_id,
            subproducto_lista_id,
            metodo_pago_lista_id,
            producto_lista_id,
            liga_pago_lista_id
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(rows[0], {
            status: 200
        });
    } catch (e) {
        console.error("❌ POST config error:", e);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Error interno guardando configuración"
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f75f1715._.js.map