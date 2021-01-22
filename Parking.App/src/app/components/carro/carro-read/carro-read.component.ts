import { CarroService } from '../../../services/carro.service';
import { Carros } from '../../../models/Carros';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carro-read',
  templateUrl: './carro-read.component.html',
  styleUrls: ['./carro-read.component.scss']
})
export class CarroReadComponent implements OnInit {

  carros: Carros[];

  displayedColumns = ['placa', 'marca', 'modelo', 'carroId'];

  constructor(
    private carroServico: CarroService
  ) { }

  ngOnInit() {
    this.carroServico.getAll().subscribe(carros => {
      this.carros = carros;
      console.log(carros);
    });
  }
}
