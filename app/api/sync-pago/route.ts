import { NextResponse } from "next/server";
import { Pool } from "pg";

export const runtime = "nodejs";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : undefined,
});

export async function POST(req: Request) {
  try {
    let token: string | null = null;

    try {
      const body = await req.json();
      if (body?.token != null) {
        token = String(body.token).trim();
      }
    } catch {}

    if (!token) {
      const { searchParams } = new URL(req.url);
      const queryToken = searchParams.get("token");
      if (queryToken) {
        token = queryToken.trim();
      }
    }

    if (!token) {
      return NextResponse.json(
        { error: "Token requerido" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      `
      UPDATE plantillas_temporales
      SET pagado = true
      WHERE token = $1
      `,
      [token]
    );

    if ((result.rowCount ?? 0) === 0) {
      return NextResponse.json(
        { error: "Token no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ok: true,
      token,
      updated: result.rowCount ?? 0,
    });
  } catch (error: any) {
    console.error("❌ Error actualizando pago:", error);
    return NextResponse.json(
      { error: error?.message || "Error actualizando pago" },
      { status: 500 }
    );
  }
}