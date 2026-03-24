import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(req: Request) {
  const client = await pool.connect();

  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { error: "token requerido" },
        { status: 400 }
      );
    }

    // 🔥 actualizar plantillas_temporales
    await client.query(
      `
      UPDATE plantillas_temporales
      SET pagado = true
      WHERE token = $1
      `,
      [token]
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al actualizar" },
      { status: 500 }
    );
  } finally {
    client.release();
  }
}