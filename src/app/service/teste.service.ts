import { Injectable } from '@angular/core';
import { Time } from '../Time';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesteService {
  private apiUrl = 'http://localhost:3000/posts'

  constructor(private http: HttpClient) { }

  remove(times: Time[], time: Time){
    return times.filter((a) => time.nome !== a.nome);
  }

  getAll(): Observable<Time[]>{
    return this.http.get<Time[]>(this.apiUrl)
  }

}
