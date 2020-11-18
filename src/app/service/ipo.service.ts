import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IpoService {
  private baseUrl = 'http://localhost:8080/';  

   constructor(private http:HttpClient) { }  

   createIpo(ipo: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'add-ipo', ipo);  
  }
  getIpoList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'ipo-list');  
  }  
}
