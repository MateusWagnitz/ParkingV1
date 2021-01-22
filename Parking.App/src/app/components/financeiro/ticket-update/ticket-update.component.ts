import { Component, OnInit } from '@angular/core';
import { Financeiro } from 'src/app/models/Financeiro';
import { Carros } from 'src/app/models/Carros';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/services/mensagem.service';
import { FinanceiroService } from 'src/app/services/financeiro.service';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-ticket-update',
  templateUrl: './ticket-update.component.html',
  styleUrls: ['./ticket-update.component.css']
})
export class FinanceiroUpdateComponent implements OnInit {

  //carros: Carros[];
  financeiro: Financeiro = {} as Financeiro


  constructor(
    //private carroServico: CarroService,
    private financeiroServico: FinanceiroService,
    private mensagemServico: MensagemService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.financeiroServico.getById(id).subscribe((financeiro) => {


    this.financeiro = financeiro;
      //this.financeiro.horaSaida = this.horaSaida;
      // this.financeiro.horaSaida = this.horaSaida;
      // this.financeiro.valorFinal = this.valorFinal;

    });
    //this.carregarCarros();
  }

  // carregarCarros(): void {
  //   this.carroServico.getAll().subscribe(prob => {
  //     this.carros = prob;
  //   });
  // }

  atualizarFinanceiro(): void {
    this.financeiroServico.put(this.financeiro).subscribe(() => {
      this.mensagemServico.showMessage('Financeiro atualizado com sucesso!');

      this.router.navigate(['/financeiro']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/financeiro']);
  }

}
