import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

type Ctx = {
  params: Promise<{ tipo: string }>;
};

export async function GET(
  _req: NextRequest,
  context: Ctx
): Promise<Response> {
  try {
    const { tipo } = await context.params;

    // 1. Obtener la lista por tipo
    const listaRes = await pool.query(
      `
      SELECT id, nombre
      FROM listas
      WHERE tipo = $1
      LIMIT 1
      `,
      [tipo]
    );

    if ((listaRes.rowCount ?? 0) === 0) {
      return NextResponse.json([]);
    }

    const lista = listaRes.rows[0];

    // 2. Obtener los items de esa lista
    const itemsRes = await pool.query(
      `
      SELECT
        id,
        label,
        value,
        url_imagen,
        orden,
        origen
      FROM lista_items
      WHERE lista_id = $1
      ORDER BY orden ASC, id ASC
      `,
      [lista.id]
    );

    return NextResponse.json({
      lista,
      items: itemsRes.rows,
    });

  } catch (error) {
    console.error("ERROR GET listas por tipo:", error);
    return NextResponse.json(
      { error: "Error al obtener listas" },
      { status: 500 }
    );
  }
}     