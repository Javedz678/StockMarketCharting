import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8084/';  
  private url=this.baseUrl+"getUser";
  private url2=this.baseUrl+"getUserList";
  private url3=this.baseUrl+"updateUser";
   constructor(private http:HttpClient) { }  

   createUser(user: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'add-user', user);  
  }
    login(name: String,password:String,type:String): Observable<any>{
      return this.http.get(`${this.url}/${name}/${password}/${type}`); 
    }
    updateUser(name: String,password:String,newPassword:String,email:String,mobileNumber:String,type:String): Observable<any>{
      return this.http.get(`${this.url3}/${name}/${password}/${newPassword}/${email}/${mobileNumber}/${type}`); 
    }
    getUserList():Observable<any>{
      return this.http.get(`${this.url2}`); 
    }
     
}
