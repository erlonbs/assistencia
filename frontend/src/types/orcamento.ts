import { Dispositivos } from "./dispositivo";

export type Orcamentos = {
    id: number;
    dispositivoId: Dispositivos;  
    dispositivoName: String;
    defeito: string;
    descricao: string;
    valor: number;
    autorizado: boolean;
  
    

   
  }
  