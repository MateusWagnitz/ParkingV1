
export class Financeiro {
  ticketId?: number;
  carroId: string;
  horaEntrada: string;
  horaSaida: string;
  valorFinal: number;

  constructor(){
    this.ticketId = 0;
    this.carroId = null;
    this.horaEntrada = null;
    this.horaSaida = null;
    this.valorFinal = 0;
  }
}
