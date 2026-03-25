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
"[project]/Downloads/b-multa-main/multa-main/lib/mailer.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendMail",
    ()=>sendMail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/b-multa-main/multa-main/node_modules/nodemailer/lib/nodemailer.js [app-route] (ecmascript)");
;
async function sendMail(opts) {
    const port = Number(process.env.SMTP_PORT || 465);
    const secure = String(process.env.SMTP_SECURE || "true").toLowerCase() === "true";
    const user = process.env.SMTP_USER;
    const pass = (process.env.SMTP_PASS || "").replaceAll(" ", "");
    const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
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
"[project]/Downloads/b-multa-main/multa-main/lib/otp.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decryptOtp",
    ()=>decryptOtp,
    "encryptOtp",
    ()=>encryptOtp,
    "generateOtp6",
    ()=>generateOtp6,
    "hashOtp",
    ()=>hashOtp,
    "otpTtlMinutes",
    ()=>otpTtlMinutes
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
function generateOtp6() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
function hashOtp(otp) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash("sha256").update(otp).digest("hex");
}
function getEncKey() {
    const b64 = process.env.OTP_ENC_KEY_BASE64;
    if (!b64) throw new Error("Falta OTP_ENC_KEY_BASE64");
    const key = Buffer.from(b64, "base64");
    if (key.length !== 32) throw new Error("OTP_ENC_KEY_BASE64 debe ser 32 bytes (base64)");
    return key;
}
function encryptOtp(otp) {
    const key = getEncKey();
    const iv = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(12);
    const cipher = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createCipheriv("aes-256-gcm", key, iv);
    const enc = Buffer.concat([
        cipher.update(otp, "utf8"),
        cipher.final()
    ]);
    const tag = cipher.getAuthTag();
    return {
        otp_enc: enc.toString("base64"),
        otp_iv: iv.toString("base64"),
        otp_tag: tag.toString("base64")
    };
}
function decryptOtp(payload) {
    const key = getEncKey();
    const iv = Buffer.from(payload.otp_iv, "base64");
    const tag = Buffer.from(payload.otp_tag, "base64");
    const enc = Buffer.from(payload.otp_enc, "base64");
    const decipher = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createDecipheriv("aes-256-gcm", key, iv);
    decipher.setAuthTag(tag);
    const dec = Buffer.concat([
        decipher.update(enc),
        decipher.final()
    ]);
    return dec.toString("utf8");
}
function otpTtlMinutes() {
    const n = Number(process.env.OTP_TTL_MINUTES || 10);
    return Number.isFinite(n) && n > 0 ? n : 10;
}
}),
"[project]/Downloads/b-multa-main/multa-main/lib/admin-rules.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAlanEmail",
    ()=>getAlanEmail,
    "getAlanIdentifier",
    ()=>getAlanIdentifier,
    "getFabricioEmail",
    ()=>getFabricioEmail,
    "isAlanUser",
    ()=>isAlanUser,
    "normalizeUser",
    ()=>normalizeUser
]);
function normalizeUser(u) {
    return String(u || "").trim().toLowerCase();
}
function getAlanIdentifier() {
    return normalizeUser(process.env.ALAN_IDENTIFIER || "alan");
}
function isAlanUser(username) {
    return normalizeUser(username) === getAlanIdentifier();
}
function getAlanEmail() {
    return process.env.ALAN_EMAIL || "areadereunion@gmail.com";
}
function getFabricioEmail() {
    return process.env.FABRICIO_EMAIL || "anahijsb04@gmail.com";
}
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/Downloads/b-multa-main/multa-main/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comparePassword",
    ()=>comparePassword,
    "signToken",
    ()=>signToken,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/b-multa-main/multa-main/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/b-multa-main/multa-main/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
;
;
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error("JWT_SECRET no está definido");
}
async function comparePassword(password, hash) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, hash);
}
function signToken(payload) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(payload, JWT_SECRET, {
        expiresIn: "1d"
    });
}
function verifyToken(token) {
    // jwt.verify lanza error si es inválido o expirado
    const decoded = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
    // jwt puede devolver string | JwtPayload → forzamos objeto
    if (!decoded || typeof decoded !== "object") {
        throw new Error("Token inválido");
    }
    return decoded;
}
}),
"[project]/Downloads/b-multa-main/multa-main/app/api/otp/send/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/b-multa-main/multa-main/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/b-multa-main/multa-main/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$mailer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/b-multa-main/multa-main/lib/mailer.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$otp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/b-multa-main/multa-main/lib/otp.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$admin$2d$rules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/b-multa-main/multa-main/lib/admin-rules.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/b-multa-main/multa-main/lib/auth.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
const runtime = "nodejs";
;
;
;
;
;
;
function isPreTokenPayload(v) {
    return !!(v && typeof v === "object" && "username" in v && "role" in v && typeof v.username === "string" && typeof v.role === "string");
}
async function POST(req) {
    try {
        const body = await req.json().catch(()=>null);
        const usernameBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$admin$2d$rules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeUser"])(String(body?.username ?? ""));
        const loginTimeISO = String(body?.loginTimeISO ?? "").trim();
        if (!usernameBody) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Falta username"
            }, {
                status: 400
            });
        }
        const preToken = req.cookies.get("pre_token")?.value;
        if (!preToken) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Sesión OTP no iniciada"
            }, {
                status: 401
            });
        }
        let payload;
        try {
            const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyToken"])(preToken);
            if (!isPreTokenPayload(decoded)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "pre_token inválido o expirado"
                }, {
                    status: 401
                });
            }
            payload = decoded;
        } catch  {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "pre_token inválido o expirado"
            }, {
                status: 401
            });
        }
        const usernameToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$admin$2d$rules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeUser"])(payload.username || "");
        const role = String(payload.role || "").toLowerCase();
        if (usernameToken !== usernameBody) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Usuario no coincide con sesión OTP"
            }, {
                status: 403
            });
        }
        if (role !== "admin") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "OTP no aplica para este usuario"
            }, {
                status: 403
            });
        }
        const otp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$otp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateOtp6"])();
        const otpHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$otp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashOtp"])(otp);
        const enc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$otp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encryptOtp"])(otp);
        const ttl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$otp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["otpTtlMinutes"])();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`
      UPDATE otp_tokens
      SET used_at = NOW()
      WHERE username = $1
        AND used_at IS NULL
      `, [
            usernameBody
        ]);
        const inserted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`
      INSERT INTO otp_tokens (
        username,
        otp_hash,
        otp_enc,
        otp_iv,
        otp_tag,
        expires_at
      )
      VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        NOW() + ($6 || ' minutes')::interval
      )
      RETURNING id, username, created_at, expires_at, used_at
      `, [
            usernameBody,
            otpHash,
            enc.otp_enc,
            enc.otp_iv,
            enc.otp_tag,
            String(ttl)
        ]);
        const insertedRow = inserted.rows[0];
        console.log("OTP INSERTADO:", insertedRow);
        const ownRows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`
      SELECT username, created_at, expires_at, used_at
      FROM otp_tokens
      WHERE username = $1
      ORDER BY created_at DESC
      LIMIT 5
      `, [
            usernameBody
        ]);
        console.log("OTP DEL USUARIO:", ownRows.rows);
        const activeRows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["query"])(`
      SELECT username, otp_enc, otp_iv, otp_tag, created_at, expires_at
      FROM otp_tokens
      WHERE used_at IS NULL
        AND expires_at > NOW()
      ORDER BY created_at DESC
      LIMIT 25
      `);
        const activeList = activeRows.rows.map((r)=>{
            let otpPlain = "******";
            try {
                otpPlain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$otp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decryptOtp"])({
                    otp_enc: r.otp_enc,
                    otp_iv: r.otp_iv,
                    otp_tag: r.otp_tag
                });
            } catch  {}
            return {
                username: String(r.username),
                otp: otpPlain,
                created_at: new Date(r.created_at).toISOString(),
                expires_at: new Date(r.expires_at).toISOString()
            };
        });
        const alanEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$admin$2d$rules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAlanEmail"])();
        const fabricioEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$admin$2d$rules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFabricioEmail"])();
        const brandonEmail = process.env.BRANDON_EMAIL || "";
        const alanRecipients = [
            alanEmail,
            brandonEmail
        ].filter(Boolean);
        const expiresAtISO = new Date(insertedRow.expires_at).toISOString();
        const nowServerISO = new Date().toISOString();
        const textToAlan = `OTP ADMIN\n\n` + `Usuario: ${usernameBody}\n` + `Hora inicio sesión (front): ${loginTimeISO || "(no enviada)"}\n` + `Hora inicio sesión (server): ${nowServerISO}\n` + `OTP: ${otp}\n` + `Expira: ${expiresAtISO}\n\n` + `OTP activos:\n` + activeList.map((x)=>`- ${x.username}: ${x.otp} (creado ${x.created_at}, expira ${x.expires_at})`).join("\n");
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$admin$2d$rules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAlanUser"])(usernameBody)) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$mailer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendMail"])({
                to: alanRecipients.join(","),
                subject: `OTP ADMIN - ${usernameBody}`,
                text: textToAlan
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$mailer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendMail"])({
            to: fabricioEmail,
            subject: "OTP de acceso",
            text: `Tu OTP es: ${otp}\nExpira: ${expiresAtISO}`
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$lib$2f$mailer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendMail"])({
            to: alanRecipients.join(","),
            subject: `Auditoría OTP - ${usernameBody}`,
            text: textToAlan
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true
        });
    } catch (error) {
        console.error("OTP SEND ERROR:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b$2d$multa$2d$main$2f$multa$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Error interno del servidor"
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0a1c6f48._.js.map