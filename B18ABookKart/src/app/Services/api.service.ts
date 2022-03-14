import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public cartItemList:any=[];
  public productList = new BehaviorSubject<any>([]);
 
  
  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://bookcart.azurewebsites.net/api/Book")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}