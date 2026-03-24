import { NextResponse } from "next/server";
import { Pool } from "pg";
import crypto from "crypto";

export const runtime = "nodejs";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : undefined,
});

/* =====================
  HELPERS
===================== */
function safeString(v: any) {
  if (v === undefined || v === null) return null;
  const s = String(v).trim();
  return s === "" ? null : s;
}

function safeBool(v: any) {
  if (v === true || v === false) return v;
  if (v === "true") return true;
  if (v === "false") return false;
  return null;
}

function safeInt(v: any) {
  if (v === undefined || v === null || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? Math.trunc(n) : null;
}

async function getLabelById(id: string) {
  const r = await pool.query(
    `SELECT label FROM lista_items WHERE id = $1 LIMIT 1`,
    [id]
  );
  return r.rows[0]?.label ? String(r.rows[0].label) : null;
}

async function getCuentaByLigaId(id: string) {
  const r = await pool.query(
    `SELECT value FROM lista_items WHERE id = $1 LIMIT 1`,
    [id]
  );
  return r.rows[0]?.value != null ? String(r.rows[0].value) : null;
}

/* =====================
  POST
===================== */
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));

    // 👇 ID DEL USUARIO (CAMBIA ESTO CUANDO TENGAS LOGIN)
    const usuario_id = 1;

    const producto_lista_id = safeString(body.producto_lista_id);
    const subproducto_lista_id = safeString(body.subproducto_lista_id);
    const metodo_pago_lista_id = safeString(body.metodo_pago_lista_id);
    const liga_pago_lista_id = safeString(body.liga_pago_lista_id);

    /* ===== RESOLVER CAMPOS ===== */
    const producto =
      safeString(body.producto) ||
      (producto_lista_id ? await getLabelById(producto_lista_id) : null);

    if (!producto) {
      return NextResponse.json(
        { error: "No se pudo resolver 'producto'" },
        { status: 400 }
      );
    }

    const cuenta_bancaria =
      safeString(body.cuenta_bancaria) ||
      (liga_pago_lista_id
        ? await getCuentaByLigaId(liga_pago_lista_id)
        : null);

    if (!cuenta_bancaria) {
      return NextResponse.json(
        { error: "No se pudo resolver 'cuenta_bancaria'" },
        { status: 400 }
      );
    }

    /* ===== TOKEN ===== */
    const token = crypto.randomBytes(16).toString("hex");

    /* ===== INSERT ===== */
    await pool.query(
      `
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
      `,
      [
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
        safeString(body.primary_color),
      ]
    );

    return NextResponse.json({
      ok: true,
      token,
      link: `/pago/${token}`,
    });
  } catch (e: any) {
    console.error("POST /api/plantillas-temporales error:", e);
    return NextResponse.json(
      { error: e?.message || "Error interno" },
      { status: 500 }
    );
  }
}   