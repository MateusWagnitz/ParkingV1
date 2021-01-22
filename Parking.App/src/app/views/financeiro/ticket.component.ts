import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class FinanceiroComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Tabela de Tickets',
      icon: 'monetization_on',
      routeUrl: '/financeiro'
    };
  }

  ngOnInit() {
  }

  novoTicket(): void {
    this.router.navigate(['/financeiro/create']);
  }

}
