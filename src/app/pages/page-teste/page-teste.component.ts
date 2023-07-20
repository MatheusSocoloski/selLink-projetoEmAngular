import { Component } from '@angular/core';
import { Time } from 'src/app/Time';
import { TesteService } from 'src/app/service/teste.service';

@Component({
  selector: 'app-page-teste',
  templateUrl: './page-teste.component.html',
  styleUrls: ['./page-teste.component.css']
})
export class PageTesteComponent {

  myNumber: number = 0

  camisa: string = ''

  times: Time [] =[];

  constructor(private testeService: TesteService){
    this.getTimes
  }


  onChangeNumber(){
    this.myNumber = Math.floor(Math.random() * 10);
  }


mostrarCorCamisa(time: Time){
    this.camisa = `a cor da camisa do ${time.nome} é ${time.corCamisa}`
  }

  removeTime(time: Time){
    this.times = this.testeService.remove(this.times, time);
  }

    getTimes(): void{
      this.testeService.getAll().subscribe((times) => (this.times = times))
    }
}

