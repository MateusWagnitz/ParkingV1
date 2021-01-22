import { Cliente } from 'src/app/models/Cliente';
import { Component, OnInit } from '@angular/core';
import { Carros } from 'src/app/models/Carros';
import { Financeiro } from 'src/app/models/Financeiro';
import { ClienteService } from 'src/app/services/cliente.service';
import { CarroService } from 'src/app/services/carro.service';
import { FinanceiroService } from 'src/app/services/financeiro.service';
import { MensagemService } from 'src/app/services/mensagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.scss']
})
export class ClienteUpdateComponent implements OnInit {

  carros: Carros[];
  financeiro: Financeiro[];
  cliente: Cliente;

  dataSaida: Date = new Date();


  constructor(
    private clienteServico: ClienteService,
    private carroServico: CarroService,
    private financeiroServico: FinanceiroService,
    private mensagemServico: MensagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.clienteServico.getById(id).subscribe((cliente) => {
      this.cliente = cliente;

    });
    this.carregarCarros();
    this.carregarFinanceiro();
  }

  carregarCarros(): void {
    this.carroServico.getAll().subscribe(prob => {
      this.carros = prob;
    });
  }

  carregarFinanceiro(): void {
    this.financeiroServico.getAll().subscribe(prob => {
      this.financeiro = prob;
    });
  }

  atualizarFinanceiro(): void {
    this.clienteServico.put(this.cliente).subscribe(() => {
      this.mensagemServico.showMessage('Financeiro atualizado com sucesso!');

      this.router.navigate(['/cliente']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/cliente']);
  }

}
