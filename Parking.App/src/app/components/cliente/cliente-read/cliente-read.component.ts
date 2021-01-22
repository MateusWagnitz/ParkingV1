import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../models/Cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.scss']
})
export class ClienteReadComponent implements OnInit {

  cliente: Cliente[];

  displayedColumns = ['clienteId', 'cpf', 'nomeCompleto'];


  constructor(
    private clienteServico: ClienteService
  ) { }

  ngOnInit() {
    this.clienteServico.getAll().subscribe(cliente => {
      this.cliente = cliente;
      console.log(cliente);
    });
  }

}
