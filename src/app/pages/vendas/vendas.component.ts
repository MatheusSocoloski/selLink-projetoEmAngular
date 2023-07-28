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
  categorias: { [key: string]: ItemVenda[] } = {};
  filtro: string = ''; 
  itensFiltrados: ItemVenda[] = []; 

  constructor(private route: ActivatedRoute, private vendasService: VendasService) { }

  ngOnInit(): void {
    this.categorias = {
      carros: this.vendasService.carros,
      casas: this.vendasService.casas,
      comidas: this.vendasService.comidas,
      tecnologias: this.vendasService.tecnologias,
      esportes: this.vendasService.esportes,
      brinquedos: this.vendasService.brinquedos,
      construcoes: this.vendasService.construcoes,
      saudes: this.vendasService.saudes
    };

    this.route.paramMap.subscribe(params => {
      this.categoriaSelecionada = params.get('categoria')!;
    });
  }


  aplicarFiltro() {
    this.itensFiltrados = this.categorias[this.categoriaSelecionada].filter(item =>
      item.nome.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
  
  limparFiltro() {
    this.filtro = '';
    this.aplicarFiltro();
  }
}
