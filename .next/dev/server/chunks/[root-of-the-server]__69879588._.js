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
"[project]/multas/multas/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/multas/multas/app/api/collection/casos/import/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/xlsx/xlsx.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$sync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/csv-parse/lib/sync.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/nodemailer/lib/nodemailer.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
const runtime = "nodejs";
;
;
;
;
;
function normKey(s) {
    return String(s ?? "").trim().toLowerCase().replace(/\s+/g, " ").replace(/[^\p{L}\p{N}\s]/gu, "");
}
const HEADER_MAP = {
    "nombre del cliente": "nombre_cliente",
    "nombre cliente": "nombre_cliente",
    "nombre_cliente": "nombre_cliente",
    "cliente": "nombre_cliente",
    "numero de telefono movil": "telefono_cliente",
    "número de telefono movil": "telefono_cliente",
    "número de teléfono móvil": "telefono_cliente",
    "telefono movil": "telefono_cliente",
    "telefono": "telefono_cliente",
    "teléfono": "telefono_cliente",
    "telefono_cliente": "telefono_cliente",
    "importe adeudado": "valor_deuda",
    "valor deuda": "valor_deuda",
    "valor_deuda": "valor_deuda",
    "adeudado": "valor_deuda",
    "importe": "valor_deuda",
    "producto": "producto"
};
function parseMoneyLike(v) {
    const raw = String(v ?? "").trim();
    if (!raw) return NaN;
    const cleaned = raw.replace(/[^\d.,-]/g, "");
    const hasComma = cleaned.includes(",");
    const hasDot = cleaned.includes(".");
    let normalized = cleaned;
    if (hasComma && hasDot) {
        const lastComma = cleaned.lastIndexOf(",");
        const lastDot = cleaned.lastIndexOf(".");
        normalized = lastComma > lastDot ? cleaned.replace(/\./g, "").replace(/,/g, ".") : cleaned.replace(/,/g, "");
    } else if (hasComma && !hasDot) {
        const commas = (cleaned.match(/,/g) || []).length;
        normalized = commas > 1 ? cleaned.replace(/,/g, "") : cleaned.replace(/,/g, ".");
    } else {
        const dots = (cleaned.match(/\./g) || []).length;
        normalized = dots > 1 ? cleaned.replace(/\./g, "") : cleaned;
    }
    const num = Number(normalized);
    return Number.isFinite(num) ? num : NaN;
}
function mapRow(raw) {
    const out = {};
    for (const [k, v] of Object.entries(raw)){
        const nk = normKey(k);
        const mapped = HEADER_MAP[nk];
        if (!mapped) continue;
        if (mapped === "valor_deuda") out.valor_deuda = parseMoneyLike(v);
        else out[mapped] = String(v ?? "").trim();
    }
    if (!out.nombre_cliente) throw new Error("Falta 'Nombre del Cliente'.");
    if (!out.telefono_cliente) throw new Error("Falta 'Número de teléfono móvil'.");
    if (!out.producto) throw new Error("Falta 'Producto'.");
    if (out.valor_deuda === undefined || Number.isNaN(out.valor_deuda)) {
        throw new Error("Falta o es inválido 'Importe Adeudado'.");
    }
    return out;
}
function parseExcel(buffer) {
    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["read"](buffer, {
        type: "buffer"
    });
    const sheetName = wb.SheetNames[0];
    if (!sheetName) return [];
    const ws = wb.Sheets[sheetName];
    return __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(ws, {
        defval: ""
    });
}
function parseCSV(buffer) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$csv$2d$parse$2f$lib$2f$sync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(buffer.toString("utf8"), {
        columns: true,
        skip_empty_lines: true,
        trim: true
    });
}
async function insertBatch(client, rows) {
    const values = [];
    const chunks = [];
    rows.forEach((r, i)=>{
        const base = i * 4;
        chunks.push(`($${base + 1}, $${base + 2}, $${base + 3}, $${base + 4})`);
        values.push(r.nombre_cliente, r.telefono_cliente, r.valor_deuda, r.producto);
    });
    const sql = `
    INSERT INTO public.cliente (nombre_cliente, telefono_cliente, valor_deuda, producto)
    VALUES ${chunks.join(",")}
    RETURNING numero_prestamo
  `;
    const r = await client.query(sql, values);
    return {
        createdPrestamos: r.rows.map((x)=>x.numero_prestamo),
        rowCount: r.rowCount ?? r.rows.length
    };
}
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
async function sendMailWithAttachment(opts) {
    const secure = String(process.env.SMTP_SECURE || "").toLowerCase() === "true";
    const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || (secure ? 465 : 587)),
        secure,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: opts.to.join(","),
        subject: opts.subject,
        text: opts.text,
        attachments: [
            {
                filename: opts.filename,
                content: opts.content,
                contentType: opts.contentType
            }
        ]
    });
}
async function POST(req) {
    const client = await __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["poolInstance"].connect();
    try {
        const form = await req.formData();
        const file = form.get("file");
        if (!file || !(file instanceof File)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No se recibió archivo."
            }, {
                status: 400
            });
        }
        const name = file.name.toLowerCase();
        const bytes = Buffer.from(await file.arrayBuffer());
        let rawRows = [];
        if (name.endsWith(".csv")) rawRows = parseCSV(bytes);
        else if (name.endsWith(".xlsx") || name.endsWith(".xls")) rawRows = parseExcel(bytes);
        else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Formato no soportado. Usa .csv, .xlsx o .xls"
            }, {
                status: 400
            });
        }
        const good = [];
        const bad = [];
        rawRows.forEach((r, idx)=>{
            try {
                good.push(mapRow(r));
            } catch (e) {
                bad.push({
                    index: idx + 2,
                    reason: e?.message || "Fila inválida"
                });
            }
        });
        await client.query("BEGIN");
        const BATCH_SIZE = 250;
        const created = [];
        let insertedTotal = 0;
        for(let i = 0; i < good.length; i += BATCH_SIZE){
            const slice = good.slice(i, i + BATCH_SIZE);
            const r = await insertBatch(client, slice);
            insertedTotal += r.rowCount;
            created.push(...r.createdPrestamos);
        }
        await client.query("COMMIT");
        // ✅ Enviar correo a 2 correos: ALAN_EMAIL + FABRICIO_EMAIL
        const emails = [
            (process.env.ALAN_EMAIL || "").trim(),
            (process.env.BRANDON_EMAIL || "").trim()
        ].filter((e)=>e && isValidEmail(e));
        let mail = {
            ok: false,
            error: "No hay correos válidos (ALAN_EMAIL / FABRICIO_EMAIL)."
        };
        if (emails.length > 0) {
            try {
                await sendMailWithAttachment({
                    to: emails,
                    subject: `Archivo importado: ${file.name}`,
                    text: `Se importó "${file.name}".\n\nInsertados: ${insertedTotal}\nSaltados: ${bad.length}`,
                    filename: file.name,
                    content: bytes,
                    contentType: file.type || "application/octet-stream"
                });
                mail = {
                    ok: true,
                    to: emails
                };
            } catch (err) {
                mail = {
                    ok: false,
                    error: err?.message || "Error enviando correo"
                };
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            imported: rawRows.length,
            inserted: insertedTotal,
            skipped: bad.length,
            bad,
            numero_prestamo_creados: created,
            mail
        });
    } catch (e) {
        await client.query("ROLLBACK").catch(()=>{});
        return __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: e?.message,
            detail: e?.detail
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

//# sourceMappingURL=%5Broot-of-the-server%5D__69879588._.js.map