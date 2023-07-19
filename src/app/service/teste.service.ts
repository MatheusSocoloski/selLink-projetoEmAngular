import { Injectable } from '@angular/core';
import { Time } from '../Time';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor() { }

  remove(times: Time[], time: Time){
    return times.filter((a) => time.nome !== a.nome);
  }

}
