import { Tipodocint } from './tipodocint';
export interface Docint {
  id?: number;
  nombre: string;
  distrito: string;
  representante: string;
  institucion: string;
  categoria: string;
  fechaini: string;
  fechafin: string;
  estado: string;
  urldoc: string;
  tipodocint: Tipodocint;
}
