"use client";

import Link from "next/link";

// PAGE: /
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#e0ccb1] px-4 py-6 sm:px-6 sm:py-8">
      <section
        className="w-full max-w-[900px] min-h-[520px] grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.75)]"
        style={{
          backgroundImage: "url(/fondo.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Administrador (ANTES derecha, AHORA izquierda) */}
        <div className="flex flex-col items-center justify-center bg-black/35 text-white p-8 sm:p-10 min-h-[260px] md:min-h-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-center">
            ADMINISTRADOR
          </h1>
          <p className="text-sm text-white/80 mb-8 sm:mb-10 text-center">
            Acceso administrativo
          </p>
          <Link
            href="/admin"
            className="px-8 sm:px-10 py-3 rounded-full bg-[#c9a98f] text-black font-medium"
          >
            Entrar
          </Link>
        </div>

        {/* Asesor (ANTES izquierda, AHORA derecha) */}
        <div className="flex flex-col items-center justify-center text-white p-8 sm:p-10 min-h-[260px] md:min-h-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-center">
            ASESOR
          </h1>
          <p className="text-sm text-white/80 mb-8 sm:mb-10 text-center">
            Acceso para asesores
          </p>
          <Link
            href="/asesor"
            className="px-8 sm:px-10 py-3 rounded-full bg-white/70 text-black font-medium"
          >
            Entrar
          </Link>
        </div>
      </section>
    </main>
  );
}
