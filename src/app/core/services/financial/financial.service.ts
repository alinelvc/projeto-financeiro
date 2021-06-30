import { Financial } from './../../../shared/models/financial-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FinancialService {
  private url = 'http://localhost:3000/financeiro';

  constructor(private http: HttpClient) {}

  getFinance(): Observable<Financial> {
    return this.http.get<Financial>(this.url);
  }
}
