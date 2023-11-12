import { Dispositivos } from "./dispositivo";

export type Orcamentos = {
    id: number;
    defeito: string;
    valor: number;
    autorizado: boolean;
    descricao: string;
    dispositivo: Dispositivos;  
   
  }
  