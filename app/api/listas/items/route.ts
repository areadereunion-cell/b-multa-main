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

type Ctx = {
  params: Promise<{ id: string }>;
};

export async function GET(_req: Request, ctx: Ctx) {
  try {
    const { id } = await ctx.params;
    const listaId = Number(id);

    if (!Number.isInteger(listaId)) {
      return NextResponse.json([], { status: 400 });
    }

    const result = await pool.query(
      `
      SELECT
        id,
        lista_id,
        COALESCE(label, nombre, value, CONCAT('Item ', id)) AS label,
        value,
        url_imagen,
        orden
      FROM lista_items
      WHERE lista_id = $1
      ORDER BY
        CASE WHEN orden IS NULL THEN 1 ELSE 0 END,
        orden ASC,
        id ASC
      `,
      [listaId]
    );

    return NextResponse.json(result.rows);
  } catch (e: any) {
    console.error("❌ ERROR GET /api/listas/[id]/items:", e);
    return NextResponse.json([], { status: 500 });
  }
}