import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

import { FinanceiroComponent } from './views/financeiro/ticket.component';
import { FinanceiroCreateComponent } from './components/financeiro/ticket-create/ticket-create.component';
import { FinanceiroDeleteComponent } from './components/financeiro/ticket-delete/ticket-delete.component';
import { FinanceiroUpdateComponent } from './components/financeiro/ticket-update/ticket-update.component';

import { CarroComponent } from './views/carro/carro.component';
import { CarroCreateComponent } from './components/carro/carro-create/carro-create.component';
import { CarroDeleteComponent } from './components/carro/carro-delete/carro-delete.component';
import { CarroUpdateComponent } from './components/carro/carro-update/carro-update.component';

import { ClienteComponent } from './views/cliente/cliente.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'financeiro', component: FinanceiroComponent },
  { path: 'financeiro/create', component: FinanceiroCreateComponent },
  { path: 'financeiro/delete/:id', component: FinanceiroDeleteComponent },
  { path: 'financeiro/update/:id', component: FinanceiroUpdateComponent },
  { path: 'carros', component: CarroComponent },
  { path: 'carros/create', component: CarroCreateComponent },
  { path: 'carros/delete/:id', component: CarroDeleteComponent },
  { path: 'carros/update/:id', component: CarroUpdateComponent },
  { path: 'cliente', component : ClienteComponent },
  { path: 'cliente/create', component: ClienteCreateComponent },
  { path: 'cliente/delete/:id', component: ClienteDeleteComponent },
  { path: 'cliente/update/:id', component: ClienteUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
