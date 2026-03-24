"use client";

import type { PlantillaProps } from "./types";

export default function Plantilla4(props: PlantillaProps) {
  const {
    disabled,
    saving,
    productoTitulo,
    importePagar,
    setImportePagar,
    fechaVencimiento,
    setFechaVencimiento,
    nombre,
    telefono,
    metodoPagoId,
    setMetodoPagoId,
    cuentaId,
    setCuentaId,
    optionsMetodo,
    optionsCuenta,
    metodoPagoLabel,
    cuentaBancaria,
    loadingListas,
    onSubmit,
  } = props;

  return (
    <div className="min-h-screen bg-[#e9e9e9] flex items-center justify-center px-3 py-6">
      <div className="w-full max-w-[420px]">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-[28px] font-semibold text-black">
            {productoTitulo || "Producto"}{" "}
            <span className="text-green-500">Crédito</span>
          </div>
          <div className="text-[22px]">🇲🇽</div>
        </div>

        {/* CARD PRINCIPAL */}
        <div className="bg-[#5c5c5c] rounded-2xl p-5 text-white shadow-lg">
          <div className="text-[22px] opacity-80 mb-2">Monto a pagar:</div>

          <div className="flex items-center justify-between gap-2">
            <input
              value={importePagar}
              onChange={(e) => setImportePagar(e.target.value)}
              disabled={disabled}
              className="bg-transparent outline-none text-[36px] font-semibold w-full"
            />
            <span className="text-[18px] shrink-0">MXN</span>
          </div>

          <div className="mt-4 text-[16px] opacity-80">
            fecha de rembolso:
          </div>

          <input
            type="date"
            value={fechaVencimiento}
            onChange={(e) => setFechaVencimiento(e.target.value)}
            disabled={disabled}
            className="bg-transparent outline-none text-[16px]"
          />

          {/* ALERTA */}
          <div className="mt-4 bg-[#6b6b6b] rounded-xl p-4 flex items-center gap-3">
            <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
              !
            </div>
            <div className="text-[16px] leading-tight">
              El rembolso a tiempo y forma aumenta su cupo de crédito
            </div>
          </div>
        </div>

        {/* CLIENTE */}
        <div className="mt-4 bg-white rounded-xl p-4 shadow">
          <div className="flex justify-between gap-4 text-[16px]">
            <span className="font-semibold text-gray-600 shrink-0">Cliente:</span>
            <span className="text-black text-right break-words">
              {nombre}
            </span>
          </div>

          <div className="flex justify-between gap-4 mt-2 text-[16px]">
            <span className="font-semibold text-gray-600 shrink-0">Número:</span>
            <span className="text-right break-words">{telefono}</span>
          </div>
        </div>

        {/* METODO */}
        <div className="mt-4 text-[18px] text-gray-500">
          Método de reembolso
        </div>

        <div className="mt-2 bg-white rounded-xl p-4 shadow">
          <div className="text-center text-[18px] text-gray-500 mb-2">
            Metodo de pago
          </div>

          {/* METODO DE PAGO */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <select
              value={metodoPagoId}
              onChange={(e) => setMetodoPagoId(e.target.value)}
              disabled={disabled || loadingListas}
              className="bg-transparent outline-none text-[36px] font-bold text-[#2E3FA8] text-center appearance-none"
            >
              <option value="">
                {loadingListas ? "Cargando..." : "Selecciona método"}
              </option>
              {optionsMetodo.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {/* CUENTA */}
          <div className="mt-4 flex items-center justify-center gap-3 flex-wrap">
            <select
              value={cuentaId}
              onChange={(e) => setCuentaId(e.target.value)}
              disabled={disabled || loadingListas}
              className="bg-transparent outline-none text-[18px] text-[#2E3FA8] text-center appearance-none max-w-full"
            >
              <option value="">
                {loadingListas ? "Cargando..." : "Selecciona cuenta"}
              </option>
              {optionsCuenta.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {cuentaBancaria && (
            <div className="mt-4 text-center text-[18px] text-gray-700 break-all">
              {cuentaBancaria}
            </div>
          )}

          <div className="mt-4 border-t pt-3 text-[12px] text-gray-400 text-center">
            los reembolsos generalmente llevan efecto el mismo día
          </div>
        </div>

        {/* BOTON */}
        <button
          onClick={onSubmit}
          disabled={disabled}
          className="mt-4 w-full bg-[#2E3FA8] text-white py-3 rounded-xl font-semibold disabled:opacity-60"
        >
          {saving ? "Generando..." : "Confirmar y Generar Link"}
        </button>
      </div>
    </div>
  );
}