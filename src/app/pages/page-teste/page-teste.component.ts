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

  times: Time [] =[
    {nome:'Grêmio', classificacao: 3, corCamisa:'Azul e branca'},
    {nome:'Botafogo', classificacao: 1, corCamisa:'Preto'},
    {nome:'Flamengo', classificacao: 2, corCamisa:'Vermelha e preto'},
    {nome:'Internacional', classificacao: 20, corCamisa:'Vermelha e branca'},
  ];

  constructor(private testeService: TesteService){}


  onChangeNumber(){
    this.myNumber = Math.floor(Math.random() * 10);
  }


mostrarCorCamisa(time: Time){
    this.camisa = `a cor da camisa do ${time.nome} é ${time.corCamisa}`
  }

  removeTime(time: Time){
    this.times = this.testeService.remove(this.times, time);
  }

}

