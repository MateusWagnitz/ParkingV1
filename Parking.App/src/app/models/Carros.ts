

export class Carros {
  carroId?: number;
  placa: string;
  marca: string;
  modelo: string;
  clienteId?: number;

  constructor (){
    this.carroId = 0;
    this.placa = null;
    this.marca = null;
    this.modelo = null;
    this.clienteId = 0;
  }
}
