import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private baseUrl = 'http://localhost:8080/';  
  private url=this.baseUrl+"getCompany";
  private url2=this.baseUrl+"deleteCompany";
  private updateUrl=this.baseUrl+"updateCompany";
   constructor(private http:HttpClient) { }  

  createCompany(company: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'add-company', company);  
  }
  getCompanyList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'company-list');  
  }  
  getCompany(id:String): Observable<any> {  
    return this.http.get(`${this.url}/${id}`);  
  } 
  deleteCompany(id:String): Observable<any> {  
    return this.http.get(`${this.url2}/${id}`);  
  } 
  updateCompany1(name:String, turnover: String,
    CEO: String,
    director: String,
    about: String,
    exchange: String,
    sector: String):Observable<any>{
    return this.http.get(`${this.updateUrl}/${name}/${turnover}/${CEO}/${director}/${about}/${exchange}/${sector}`);  
  }
  updateCompany(id: String, value: any,ceo:String): Observable<Object> {  
    return this.http.post(`${this.updateUrl}/${id}/${ceo}`, value);  
  } 
}
