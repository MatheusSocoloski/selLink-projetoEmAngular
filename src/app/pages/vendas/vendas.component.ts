import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendasService, ItemVenda } from 'src/app/services/vendas.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {
  categoriaSelecionada!: string;
  carros: ItemVenda[] = [];
  casas: ItemVenda[] = [];
  comidas: ItemVenda[] = [];
  brinquedos: ItemVenda[] = [];
  tecnologias: ItemVenda[] = [];
  esportes: ItemVenda[] = [];
  saudes: ItemVenda[] = [];
  construcoes: ItemVenda[] = [];
 

  constructor(private route: ActivatedRoute, private vendasService: VendasService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoriaSelecionada = params.get('categoria')!;
      this.carros = this.vendasService.carros;
      this.casas = this.vendasService.casas;
      this.comidas = this.vendasService.comidas;
      this.tecnologias = this.vendasService.tecnologias;
      this.esportes = this.vendasService.esportes;
      this.brinquedos = this.vendasService.brinquedos;
      this.construcoes = this.vendasService.construcoes;
      this.saudes = this.vendasService.saudes;
      
    });
  }
}
