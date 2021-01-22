import { Component, OnInit } from '@angular/core';
import { Financeiro } from 'src/app/models/Financeiro';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/services/mensagem.service';
import { FinanceiroService } from 'src/app/services/financeiro.service';

@Component({
  selector: 'app-ticket-delete',
  templateUrl: './ticket-delete.component.html',
  styleUrls: ['./ticket-delete.component.css']
})
export class FinanceiroDeleteComponent implements OnInit {

  financeiro: Financeiro = {} as Financeiro;


  constructor(private financeiroServico: FinanceiroService,
    private mensagemServico: MensagemService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.financeiroServico.getById(id).subscribe((financeiro) => {
      this.financeiro = financeiro;
    });
  }

  apagarTicket(): void {
    this.financeiroServico.delete(this.financeiro.ticketId).subscribe(() => {
      this.mensagemServico.showMessage('Ticket excluido com sucesso!');

      this.router.navigate(['/financeiro']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/financeiro']);
  }

}
