export interface Composicion {
  COD: string;
  DESC: string;
  CAPA?: number;
  CANTIDAD?: number;
  UNIDAD?: string;
  TIPO: string;
  ARRAY_COMPOSICION: Composicion[] | null;
}


export interface Producto {
  COD: string;
  DESC: string;
  MARCA: number;
  TIPO: string;
  ELABORACION: string;
  ARRAY_COMPOSICION: Composicion[];
}
