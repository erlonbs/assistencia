import { Clientes } from "./cliente";

export type Dispositivos = {
  dispositivoId: number;
  dispositivoName: string;
  marca: string;
  modelo: string;
  cor: string;
  serial: string;
  descricao: string;
  clienteId: number;
  clienteName:string;
  orcamentoId: number
 
}
