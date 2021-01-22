import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.scss']
})
export class CarroComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Tabela de Carros',
      icon: 'time_to_leave',
      routeUrl: '/carros'
    };
  }

  ngOnInit() {
  }

  novoCarro(): void {
    this.router.navigate(['/carros/create']);
  }

}
