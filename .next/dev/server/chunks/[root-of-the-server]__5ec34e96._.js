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
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[project]/multas/multas/lib/reports/generateDailyReport.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/reports/generateDailyReport.ts
__turbopack_context__.s([
    "generateDailyReport",
    ()=>generateDailyReport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/xlsx/xlsx.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/os [external] (os, cjs)");
;
;
;
;
async function getReportRows(reportDateYMD) {
    // REEMPLAZA por tu query real; debe devolver array
    return [
        {
            Cliente: "Juan",
            Total: 10,
            Fecha: reportDateYMD
        },
        {
            Cliente: "Ana",
            Total: 20,
            Fecha: reportDateYMD
        }
    ];
}
async function generateDailyReport({ reportDateYMD }) {
    const rowsRaw = await getReportRows(reportDateYMD);
    if (!Array.isArray(rowsRaw)) {
        throw new Error("La data del reporte no es un array (rowsRaw inválido)");
    }
    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["utils"].book_new();
    const ws = rowsRaw.length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(rowsRaw) : __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet([
        [
            "Sin datos para esta fecha"
        ]
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, "Reporte");
    const fileName = `reporte_clientes_${reportDateYMD}.xlsx`;
    // ✅ temp real del SO (Windows/Mac/Linux/Vercel)
    const tmpDir = __TURBOPACK__imported__module__$5b$externals$5d2f$os__$5b$external$5d$__$28$os$2c$__cjs$29$__["default"].tmpdir();
    const tmpPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(tmpDir, fileName);
    // ✅ writeFile es sync
    __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeFile"](wb, tmpPath);
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(tmpPath)) {
        throw new Error(`xlsx no creó el archivo en ${tmpPath}`);
    }
    return {
        ok: true,
        reportDateYMD,
        fileName,
        tmpPath,
        file_path: `/api/reportes/download?date=${encodeURIComponent(reportDateYMD)}`
    };
}
}),
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
"[project]/multas/multas/lib/mailer.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendMail",
    ()=>sendMail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/nodemailer/lib/nodemailer.js [app-route] (ecmascript)");
;
async function sendMail(opts) {
    const port = Number(process.env.SMTP_PORT || 465);
    const secure = String(process.env.SMTP_SECURE || "true").toLowerCase() === "true";
    const user = process.env.SMTP_USER;
    const pass = (process.env.SMTP_PASS || "").replaceAll(" ", "");
    const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port,
        secure,
        auth: {
            user,
            pass
        }
    });
    await transporter.verify(); // falla aquí si hay problema de SMTP
    return transporter.sendMail({
        from: process.env.SMTP_FROM || user,
        to: opts.to,
        subject: opts.subject,
        text: opts.text,
        html: opts.html,
        attachments: opts.attachments
    });
}
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[project]/multas/multas/app/api/reportes/manual/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/reportes/manual/route.ts
__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$lib$2f$reports$2f$generateDailyReport$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/lib/reports/generateDailyReport.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$lib$2f$mailer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/lib/mailer.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
const runtime = "nodejs";
;
;
;
;
function todayYMDInGuayaquil() {
    return new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Guayaquil",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).format(new Date());
}
function ensureAdmin(req) {
    const role = req.headers.get("x-role");
    if (role !== "admin") throw new Error("No autorizado");
}
async function POST(req) {
    try {
        ensureAdmin(req);
        const url = new URL(req.url);
        const q = (url.searchParams.get("date") || "").trim();
        const reportDateYMD = /^\d{4}-\d{2}-\d{2}$/.test(q) ? q : todayYMDInGuayaquil();
        const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$lib$2f$reports$2f$generateDailyReport$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateDailyReport"])({
            reportDateYMD,
            mode: "manual"
        });
        const fileBuffer = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(r.tmpPath);
        const to = process.env.ALAN_EMAIL;
        if (!to) throw new Error("ALAN_EMAIL no configurado");
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$lib$2f$mailer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendMail"])({
            to,
            subject: `Reporte diario - ${reportDateYMD}`,
            text: `Adjunto el reporte del día ${reportDateYMD}. Descarga: ${r.file_path}`,
            attachments: [
                {
                    filename: r.fileName,
                    content: fileBuffer,
                    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                }
            ]
        });
        // (opcional) borrar del /tmp después de enviar correo
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].unlink(r.tmpPath).catch(()=>{});
        return __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            ...r,
            emailedTo: to
        });
    } catch (e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: e?.message || "Error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5ec34e96._.js.map