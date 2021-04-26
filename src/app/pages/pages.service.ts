import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Intern } from '../intern';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private baseUrl="http://localhost:8080/api/v1/interns";
  constructor(private httpClient:HttpClient) { }

  getInterns():Observable<Intern[]>{
    return this.httpClient.get<Intern[]>(`${this.baseUrl}`);
  }
  createInterns(intern:Intern):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,intern);
}
getInternById(id:number|undefined):Observable<Intern>{
  return this.httpClient.get<Intern>(`${this.baseUrl}/${id}`)
}
updateIntern(id:number|undefined,intern:Intern):Observable<Object>{
  return this.httpClient.put(`${this.baseUrl}/${id}`,intern);
}
deleteIntern(id:number|undefined):Observable<Object>{
  return this.httpClient.delete(`${this.baseUrl}/${id}`);
}
}
