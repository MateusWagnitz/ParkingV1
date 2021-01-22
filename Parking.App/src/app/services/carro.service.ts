import { Carros } from '../models/Carros';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MensagemService } from './mensagem.service';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  baseURL = `${environment.mainUrlAPI}carros`;

  constructor(
    private http: HttpClient,
    private mensagemServico: MensagemService
  ) { }

  getAll(): Observable<Carros[]> {
    return this.http.get<Carros[]>(this.baseURL).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }


  getById(carroId: number): Observable<Carros> {
    const url = `${this.baseURL}/id=${carroId}`;
    console.log(url);
    return this.http.get<Carros>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getByPlaca(placa: string): Observable<Carros> {
    const url = `${this.baseURL}/${placa}`;
    console.log(url);
    return this.http.get<Carros>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  put(carro: Carros): Observable<Carros> {
    const url = `${this.baseURL}/${carro.carroId}`;
    return this.http.put<Carros>(url, carro).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  post(carro: Carros): Observable<Carros> {
    return this.http.post<Carros>(this.baseURL,  {
      placa: carro.placa,
      marca: carro.marca,
      modelo: carro.modelo
    }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(carroId: number): Observable<Carros> {
    const url = `${this.baseURL}/${carroId}`;
    console.log(url);
    return this.http.delete<Carros>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.mensagemServico.showMessage('Ocorreu um erro com o módulo Carro!', true);
    return EMPTY;
  }
}
