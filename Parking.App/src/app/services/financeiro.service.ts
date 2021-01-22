import { Financeiro } from '../models/Financeiro';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MensagemService } from './mensagem.service';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  baseURL = `${environment.mainUrlAPI}ticket`;

  constructor(
    private http: HttpClient,
    private mensagemServico: MensagemService
  ) { }

  getAll(): Observable<Financeiro[]> {
    return this.http.get<Financeiro[]>(this.baseURL).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getById(ticketId: number): Observable<Financeiro> {
    const url = `${this.baseURL}/${ticketId}`;
    return this.http.get<Financeiro>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  put(financeiro: Financeiro): Observable<Financeiro> {
    const url = `${this.baseURL}/${financeiro.ticketId}`;
    return this.http.put<Financeiro>(url, financeiro).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  post(financeiro: Financeiro): Observable<Financeiro> {
    return this.http.post<Financeiro>(this.baseURL, financeiro).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(ticketId: number): Observable<Financeiro> {
    const url = `${this.baseURL}/${ticketId}`;
    return this.http.delete<Financeiro>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    if (e.status === 409)
    {
      this.mensagemServico.showMessage('Ocorreu um erro com o módulo Financeiro!', true);
    }else
    {
      return EMPTY;
    }
  }

}
