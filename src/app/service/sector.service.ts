import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sectors } from '../classes/sectors';


@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private baseUrl = 'http://localhost:8080/';  
   url=this.baseUrl+"getSector";
   constructor(private http:HttpClient) { }  

  getSector(id:number): Observable<any> {  
    return this.http.get(`${this.url}/${id}`);
    
  } 
  getSectorlist(): Observable<any> {  
    return this.http.get(`${this.url}`);
    
  }  
}
