import PagoFastCashStatic from "./static";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const h = await headers();
  const host = h.get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  let tipoPlantilla: string = "1";

  try {
    // 🔥 1. sincronizar
    await fetch(`${baseUrl}/api/sync-pago/${token}`, {
      method: "POST",
      cache: "no-store",
    });

    // 🔥 2. obtener data
    const res = await fetch(
      `${baseUrl}/api/plantillas-temporales-3/${token}`,
      {
        cache: "no-store",
      }
    );

    const json = await res.json().catch(() => null);

    if (json) {
      const data = json?.data ?? json;

      // 🔥 AQUI LEEMOS LA PLANTILLA
      tipoPlantilla = data?.tipo_plantilla || "1";

      const pagado = data?.pagado;

      if (pagado === true) {
        redirect("/gracias");
      }
    }
  } catch (e) {
    console.error("Error verificando pago:", e);
  }

  // 🔥 PASAMOS LA PLANTILLA AL STATIC
  return <PagoFastCashStatic token={token} tipoPlantilla={tipoPlantilla} />;
}