import { Docint } from './docint';
import { Ep } from './ep';
import { Semestre } from './semestre';
import { Tipopy } from './tipopy';

export interface Proyecto {
  id?: number;
  nombre: string;
  pbeneficiaria: string;
  zintervencion: string;
  responsable: string;
  descripcion: string;
  objetivo: string;
  fechaini: string;
  fechafin: string;
  presupuesto: number;
  urldiagnostico: string;
  urlrecurso: string;
  estado: string;
  ep: Ep;
  docint:Docint;
  semestre: Semestre;
  tipopro: Tipopy;
}
