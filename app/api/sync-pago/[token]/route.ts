import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

type RouteContext = {
  params: Promise<{ token: string }>;
};

export async function POST(
  _req: NextRequest,
  context: RouteContext
): Promise<Response> {
  const client = await pool.connect();

  try {
    const { token } = await context.params;

    await client.query("BEGIN");

    // Solo verificar que exista la plantilla, pero NO marcar pagado
    const plantilla = await client.query(
      `
      SELECT id, token, pagado
      FROM plantillas_temporales
      WHERE token = $1
      LIMIT 1
      `,
      [token]
    );

    if ((plantilla.rowCount ?? 0) === 0) {
      await client.query("ROLLBACK");
      return NextResponse.json(
        { error: "Plantilla no encontrada" },
        { status: 404 }
      );
    }

    await client.query("COMMIT");

    return NextResponse.json({
      ok: true,
      token,
      pagado: plantilla.rows[0].pagado ?? false,
    });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error en /api/sync-pago/[token]:", error);

    return NextResponse.json(
      { error: "Error sync" },
      { status: 500 }
    );
  } finally {
    client.release();
  }
}