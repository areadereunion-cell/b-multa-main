import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { error: "Token requerido" },
        { status: 400 }
      );
    }

    // 🔥 ACTUALIZA EL ESTADO
    await pool.query(
      `
      UPDATE plantillas_temporales
      SET pagado = 'si'
      WHERE token = $1
      `,
      [token]
    );

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: "Error actualizando pago" },
      { status: 500 }
    );
  }
}