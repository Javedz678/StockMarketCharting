import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  private baseUrl = 'http://localhost:8080/';  

   constructor(private http:HttpClient) { }  

   createExchange(stockexchange: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'add-exchange', stockexchange);  
  }
  getExchangeList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'exchange-list');  
  }  
}
