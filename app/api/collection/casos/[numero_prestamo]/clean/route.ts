export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { poolInstance as pool } from "@/lib/db";

type Ctx = {
  params: Promise<{ numero_prestamo: string }>;
};

export async function POST(
  _req: Request,
  context: Ctx
) {
  const client = await pool.connect();

  try {
    const { numero_prestamo } = await context.params;

    // Buscar cliente
    const clienteResult = await client.query(
      `
      SELECT nombre_cliente
      FROM public.cliente
      WHERE numero_prestamo = $1
      LIMIT 1
      `,
      [numero_prestamo]
    );

    if (clienteResult.rows.length === 0) {
      return NextResponse.json(
        {
          ok: false,
          error: "Caso no encontrado",
        },
        { status: 404 }
      );
    }

    const nombreCliente =
      clienteResult.rows[0].nombre_cliente;

    // Borrar todas las ligas generadas
    const deleteResult = await client.query(
      `
      DELETE FROM public.plantillas_temporales
      WHERE nombre_cliente = $1
      `,
      [nombreCliente]
    );

    return NextResponse.json({
      ok: true,
      nombre_cliente: nombreCliente,
      eliminados: deleteResult.rowCount ?? 0,
    });
  } catch (e: any) {
    console.error("ERROR CLEAN:", e);

    return NextResponse.json(
      {
        ok: false,
        error: e.message,
      },
      { status: 500 }
    );
  } finally {
    client.release();
  }
}