import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';

import { FinanceiroComponent } from './views/financeiro/ticket.component';
import { FinanceiroReadComponent } from './components/financeiro/ticket-read/ticket-read.component';
import { FinanceiroCreateComponent } from './components/financeiro/ticket-create/ticket-create.component';
import { FinanceiroDeleteComponent } from './components/financeiro/ticket-delete/ticket-delete.component';
import { FinanceiroUpdateComponent } from './components/financeiro/ticket-update/ticket-update.component';

import { CarroComponent } from './views/carro/carro.component';
import { CarroReadComponent } from './components/carro/carro-read/carro-read.component';
import { CarroCreateComponent } from './components/carro/carro-create/carro-create.component';
import { CarroDeleteComponent } from './components/carro/carro-delete/carro-delete.component';
import { CarroUpdateComponent } from './components/carro/carro-update/carro-update.component';

import { ClienteComponent } from './views/cliente/cliente.component';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,

    FinanceiroComponent,
    FinanceiroReadComponent,
    FinanceiroCreateComponent,

    CarroComponent,
    CarroReadComponent,
    CarroCreateComponent,
    CarroDeleteComponent,
    CarroUpdateComponent,

    ClienteComponent,
    ClienteReadComponent,
    ClienteCreateComponent,
    ClienteDeleteComponent,
    ClienteUpdateComponent,
    FinanceiroDeleteComponent,
    FinanceiroUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
  ],
  providers: [
    MatFormFieldModule,
    MatDatepickerModule,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
