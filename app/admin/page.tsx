"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

type Phase = "login" | "otp";

export default function LandingPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [phase, setPhase] = useState<Phase>("login");
  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  const router = useRouter();

  const canSubmitLogin = useMemo(
    () => username.trim().length > 0 && password.trim().length > 0 && !loading,
    [username, password, loading]
  );

  const canSubmitOtp = useMemo(() => {
    const clean = otp.replace(/\D/g, "");
    return clean.length === 6 && !loading;
  }, [otp, loading]);

  async function handleSubmitLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmitLogin) return;

    setLoading(true);
    setError("");
    setInfo("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data?.error || "Error desconocido");
        setLoading(false);
        return;
      }

      if (!data?.requiresOtp) {
        router.push("/gestion");
        return;
      }

      const loginTimeISO = new Date().toISOString();

      const sendRes = await fetch("/api/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          loginTimeISO,
        }),
        credentials: "include",
      });

      const sendData = await sendRes.json().catch(() => ({}));

      if (!sendRes.ok) {
        setError(sendData?.error || "No se pudo enviar el OTP");
        setLoading(false);
        return;
      }

      setPhase("otp");
      setInfo("Se envió un código OTP. Revisa tu correo.");
      setLoading(false);
    } catch {
      setError("No se pudo conectar con el servidor");
      setLoading(false);
    }
  }

  async function handleSubmitOtp(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmitOtp) return;

    setLoading(true);
    setError("");
    setInfo("");

    const cleanOtp = otp.replace(/\D/g, "").slice(0, 6);

    try {
      const res = await fetch("/api/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, otp: cleanOtp }),
        credentials: "include",
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data?.error || "OTP inválido");
        setLoading(false);
        return;
      }

      router.push("/gestion");
    } catch {
      setError("No se pudo conectar con el servidor");
      setLoading(false);
    }
  }

  function backToLogin() {
    setPhase("login");
    setOtp("");
    setError("");
    setInfo("");
    setLoading(false);
  }

  return (
    <main
      className={`${inter.variable} min-h-screen flex items-center justify-center bg-[#e0ccb1] px-4 py-6 sm:px-6 sm:py-8`}
    >
      <section
        className="w-full max-w-[900px] min-h-[520px] rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.75)] relative"
        style={{
          backgroundImage: "url(/fondo.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay leve para legibilidad */}
        <div className="absolute inset-0 bg-black/15" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
          {/* IZQUIERDA: ADMIN */}
          <div className="relative flex items-center justify-center px-6 py-10 sm:px-8 md:px-10 md:py-0 lg:px-12">
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative w-full max-w-md text-white">
              <h1 className="font-[var(--font-inter)] font-semibold tracking-wide text-[28px] sm:text-[32px] md:text-[34px] text-center md:text-left">
                Administrador
              </h1>

              {phase === "login" ? (
                <form onSubmit={handleSubmitLogin} className="mt-8 sm:mt-10 md:mt-12 space-y-8 sm:space-y-10">
                  {error && (
                    <div className="rounded-xl bg-red-500/20 border border-red-200/20 px-4 py-3 text-sm">
                      {error}
                    </div>
                  )}
                  {info && (
                    <div className="rounded-xl bg-white/15 border border-white/20 px-4 py-3 text-sm">
                      {info}
                    </div>
                  )}

                  {/* Usuario */}
                  <div>
                    <label className="block text-white/90 text-[15px] sm:text-[16px] mb-2">
                      Usuario
                    </label>
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      autoComplete="off"
                      className="
                        w-full
                        bg-transparent
                        border-0
                        border-b
                        border-white/90
                        rounded-none
                        px-0
                        py-2
                        text-white
                        text-[15px] sm:text-[16px]
                        outline-none
                        focus:border-white
                        focus:ring-0
                      "
                    />
                  </div>

                  {/* Contraseña */}
                  <div>
                    <label className="block text-white/90 text-[15px] sm:text-[16px] mb-2">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="new-password"
                      className="
                        w-full
                        bg-transparent
                        border-0
                        border-b
                        border-white/90
                        rounded-none
                        px-0
                        py-2
                        text-white
                        text-[15px] sm:text-[16px]
                        outline-none
                        focus:border-white
                        focus:ring-0
                      "
                    />
                  </div>

                  <button
                    disabled={!canSubmitLogin}
                    className="
                      w-full mt-2
                      rounded-2xl
                      py-3.5 sm:py-4
                      text-[16px] sm:text-[18px]
                      font-medium
                      text-white
                      bg-white/35
                      hover:bg-white/45
                      active:scale-[0.99]
                      transition
                      disabled:opacity-60 disabled:cursor-not-allowed
                    "
                  >
                    {loading ? "Entrando..." : "Ingresar"}
                  </button>

                  <p className="text-xs text-white/70 text-center md:text-left">
                    Acceso administrativo
                  </p>
                </form>
              ) : (
                <form onSubmit={handleSubmitOtp} className="mt-8 sm:mt-10 md:mt-12 space-y-8 sm:space-y-10">
                  {error && (
                    <div className="rounded-xl bg-red-500/20 border border-red-200/20 px-4 py-3 text-sm">
                      {error}
                    </div>
                  )}
                  {info && (
                    <div className="rounded-xl bg-white/15 border border-white/20 px-4 py-3 text-sm">
                      {info}
                    </div>
                  )}

                  {/* OTP */}
                  <div>
                    <label className="block text-white/90 text-[15px] sm:text-[16px] mb-2">
                      Código OTP (6 dígitos)
                    </label>
                    <input
                      value={otp}
                      onChange={(e) =>
                        setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                      }
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      className="
                        w-full
                        bg-transparent
                        border-0
                        border-b
                        border-white/90
                        rounded-none
                        px-0
                        py-2
                        text-white
                        text-[15px] sm:text-[16px]
                        outline-none
                        focus:border-white
                        focus:ring-0
                        tracking-[0.2em] sm:tracking-[0.35em]
                      "
                      placeholder="••••••"
                    />
                    <p className="mt-3 text-xs text-white/70">
                      Usuario: <span className="text-white/90">{username}</span>
                    </p>
                  </div>

                  <button
                    disabled={!canSubmitOtp}
                    className="
                      w-full mt-2
                      rounded-2xl
                      py-3.5 sm:py-4
                      text-[16px] sm:text-[18px]
                      font-medium
                      text-white
                      bg-white/35
                      hover:bg-white/45
                      active:scale-[0.99]
                      transition
                      disabled:opacity-60 disabled:cursor-not-allowed
                    "
                  >
                    {loading ? "Verificando..." : "Verificar OTP"}
                  </button>

                  <button
                    type="button"
                    onClick={backToLogin}
                    className="w-full text-sm text-white/80 hover:text-white transition"
                    disabled={loading}
                  >
                    Volver
                  </button>

                  <p className="text-xs text-white/70 text-center md:text-left">
                    Validación administrativa
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* DERECHA: ASESOR (OPCIÓN 2) */}
          <div className="relative flex items-center justify-center px-6 py-10 sm:px-8 md:px-10 md:py-0 lg:px-12">
            <div className="absolute inset-0 bg-white/25" />

            <div className="relative w-full max-w-md text-center text-white">
              <p className="text-[28px] sm:text-[32px] md:text-[34px] font-semibold tracking-wide">
                ¿Eres asesor?
              </p>

              <p className="mt-8 sm:mt-10 text-[18px] sm:text-[20px] md:text-[22px] text-white/90">
                Ingresa aquí
              </p>

              <Link
                href="/asesor"
                className="
                  inline-flex items-center justify-center
                  w-full mt-8 sm:mt-10 md:mt-12
                  rounded-2xl
                  py-3.5 sm:py-4
                  text-[16px] sm:text-[18px]
                  font-medium
                  text-white
                  bg-black/35
                  hover:bg-black/45
                  active:scale-[0.99]
                  transition
                "
              >
                Presiona aquí
              </Link>

              <p className="mt-4 text-xs text-white/80">Acceso para asesores</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}