"use client";

import { useState } from "react";
import type { ListKey } from "../types";

const COUNTRIES = [
  {
    key: "mexico",
    label: "México",
    flag: "🇲🇽",
    lists: [
      {
        key: "cuenta_bancaria_mexico",
        label: "Cuenta bancaria",
      },
      {
        key: "metodo_pago_mexico",
        label: "Método de pago",
      },
      {
        key: "producto_mexico",
        label: "Productos",
      },
    ],
  },
  {
    key: "colombia",
    label: "Colombia",
    flag: "🇨🇴",
    lists: [
      {
        key: "cuenta_bancaria_colombia",
        label: "Cuenta bancaria",
      },
      {
        key: "metodo_pago_colombia",
        label: "Método de pago",
      },
      {
        key: "producto_colombia",
        label: "Productos",
      },
    ],
  },
  {
    key: "peru",
    label: "Perú",
    flag: "🇵🇪",
    lists: [
      {
        key: "cuenta_bancaria_peru",
        label: "Cuenta bancaria",
      },
      {
        key: "metodo_pago_peru",
        label: "Método de pago",
      },
      {
        key: "producto_peru",
        label: "Productos",
      },
    ],
  },
] as const;

export default function AplicacionesTabs({
  value,
  onChange,
}: {
  value: ListKey;
  onChange: (k: ListKey) => void;
}) {
  const getCountryFromListKey = (listKey: ListKey) => {
    if (listKey.endsWith("_mexico")) return "mexico";
    if (listKey.endsWith("_colombia")) return "colombia";
    if (listKey.endsWith("_peru")) return "peru";

    return "mexico";
  };

  const [openCountry, setOpenCountry] = useState(
    getCountryFromListKey(value)
  );

  function handleCountryClick(countryKey: string) {
    setOpenCountry((current) =>
      current === countryKey ? "" : countryKey
    );
  }

  return (
    <div className="space-y-3">
      {/* Países */}
      <div className="flex flex-wrap gap-2">
        {COUNTRIES.map((country) => {
          const isOpen = openCountry === country.key;

          return (
            <button
              key={country.key}
              type="button"
              onClick={() => handleCountryClick(country.key)}
              className={[
                "flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition",
                isOpen
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white/70 border-slate-200/70 hover:bg-white",
              ].join(" ")}
            >
              <span>{country.flag}</span>
              <span>{country.label}</span>

              <svg
                className={[
                  "w-4 h-4 transition-transform",
                  isOpen ? "rotate-180" : "",
                ].join(" ")}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          );
        })}
      </div>

      {/* Opciones del país */}
      {COUNTRIES.map((country) => {
        if (openCountry !== country.key) return null;

        return (
          <div
            key={country.key}
            className="
              flex flex-wrap gap-2
              rounded-2xl
              border border-slate-200/70
              bg-white/50
              p-2
            "
          >
            {country.lists.map((list) => {
              const isSelected = value === list.key;

              return (
                <button
                  key={list.key}
                  type="button"
                  onClick={() => onChange(list.key)}
                  className={[
                    "px-3 py-2 rounded-xl border text-sm transition",
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white/70 border-slate-200/70 hover:bg-white",
                  ].join(" ")}
                >
                  {list.label}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}