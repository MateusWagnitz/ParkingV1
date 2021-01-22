import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Controle de Cliente',
      icon: 'local_parking',
      routeUrl: '/cliente'
    };
  }

  ngOnInit() {
  }

  novoCliente(): void {
    this.router.navigate(['/cliente/create']);
  }

}
