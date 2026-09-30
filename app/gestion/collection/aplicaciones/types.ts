export const LISTS = [
  { key: "cuenta_bancaria_mexico", label: "Cuenta bancaria", country: "México" },
  { key: "metodo_pago_mexico", label: "Método de pago", country: "México" },
  { key: "producto_mexico", label: "Productos", country: "México" },

  { key: "cuenta_bancaria_colombia", label: "Cuenta bancaria", country: "Colombia" },
  { key: "metodo_pago_colombia", label: "Método de pago", country: "Colombia" },
  { key: "producto_colombia", label: "Productos", country: "Colombia" },

  { key: "cuenta_bancaria_peru", label: "Cuenta bancaria", country: "Perú" },
  { key: "metodo_pago_peru", label: "Método de pago", country: "Perú" },
  { key: "producto_peru", label: "Productos", country: "Perú" },
] as const;

export type ListKey = (typeof LISTS)[number]["key"];

export type AnyItem = {
  id: number;
  list_key: ListKey;
  label?: string | null;
  value: string;
  image_url?: string | null;
  active?: boolean;
};