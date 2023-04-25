import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseURL: string = "https://newsapi20221108120432.azurewebsites.net/api/Categories"
  serviceCall() {
    console.log("Service was called");
   }
   readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
   constructor(private httpClient: HttpClient) { }

   getCategories():Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.baseURL,this.httpOptions);
   }

   getCategoriesById(id:string) :Observable<Category>{
    return this.httpClient.get<Category>(this.baseURL + '/' +id,this.httpOptions);
   }
  }
