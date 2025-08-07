import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.maestropizza.pizzagest.com/api/';

  constructor(private http: HttpClient) {}

  getProductoPorId(id: string): Observable<Producto> {
  const language = this.getCurrentLanguage(); // Obtenemos el idioma actual del localStorage
  const url = `${this.apiUrl}saleItems/${id}?language=${language}`;
  return this.http.get<Producto>(url);
}

getProductoConParametros(id: string, loading: string, language: string): Observable<Producto> {
  const url = `${this.apiUrl}saleItems/${id}`;

  const params = new HttpParams()
    .set('loading', loading)
    .set('language', language);

  return this.http.get<Producto>(url, { params });
}
getTicketDetail(
  branchID: number,
  orderNumber: number,
  source: string,
  token: string,
  loading = false,
  language = this.getCurrentLanguage()
): Observable<any> {
  const url = `${this.apiUrl}tickets/details?loading=${loading}&language=${language}`;
  const headers = new HttpHeaders({
    'accept': 'application/json, text/plain, */*',
    'authorization': `Bearer ${token}`,
    'content-type': 'application/json'
  });

  const body = { branchID, orderNumber, source };

  return this.http.post(url, body, { headers });
}

getCurrentLanguage(): 'en' | 'ar' {
  const lang = localStorage.getItem('language');
  return lang === 'ar' ? 'ar' : 'en';
}



}
