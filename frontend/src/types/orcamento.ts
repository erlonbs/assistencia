import { Dispositivos } from "./dispositivo";

export type Orcamentos = {
    id: number;
    dispositivoId: Dispositivos;  
    Name: string;
    defeito: string;
    descricao: string;
    valor: number;
    autorizado: boolean;
  
    

   
  }
  