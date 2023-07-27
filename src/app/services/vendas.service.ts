import { Injectable } from '@angular/core';

export interface ItemVenda {
  id: number;
  nome: string;
  descricao: string;
  imagem: string; // Adicionando a propriedade "imagem" à interface ItemVenda
}

@Injectable({
  providedIn: 'root'
})
export class VendasService {
  carros: ItemVenda[] = [ // Atualizando os vetores para incluir a propriedade "imagem"
    { id: 1, nome: 'Carro Esportivo', descricao: 'Este carro é veloz e emocionante de dirigir.', imagem: 'https://materiaincognita.com.br/wp-content/uploads/2011/06/Kombi-VW-Tuning.jpg' },
    { id: 2, nome: 'SUV Familiar', descricao: 'Um SUV espaçoso perfeito para viagens em família.', imagem: 'https://s.glbimg.com/jo/g1/f/original/2011/05/06/fusca_.jpg' },
    { id: 3, nome: 'Carro Ecológico', descricao: 'Um carro que se preocupa com o meio ambiente e economiza combustível.', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqVSGJJRdwoLs3_fNH4cBsFujZV-Bs80C8Y6lRBRIReG4boXDt6I3uatyDYk5LvHy1_E&usqp=CAU' }
  ];

  casas: ItemVenda[] = [ // Atualizando os vetores para incluir a propriedade "imagem"
    { id: 1, nome: 'Casa Moderna', descricao: 'Uma casa com design moderno e amplo espaço.', imagem: 'caminho/para/imagem-casas-1.jpg' },
    { id: 2, nome: 'Casa Aconchegante', descricao: 'Uma casa charmosa e aconchegante para a família.', imagem: 'caminho/para/imagem-casas-2.jpg' },
    { id: 3, nome: 'Casa de Praia', descricao: 'Uma casa de praia com vista para o mar e piscina privativa.', imagem: 'caminho/para/imagem-casas-3.jpg' }
  ];
  comidas: ItemVenda[] = [
    { id: 1, nome: 'Pizza', descricao: 'Uma deliciosa pizza de diversos sabores.', imagem: 'caminho/para/imagem-comidas-1.jpg' },
    { id: 2, nome: 'Hambúrguer', descricao: 'Um hambúrguer suculento e saboroso.', imagem: 'caminho/para/imagem-comidas-2.jpg' },
    { id: 3, nome: 'Sorvete', descricao: 'Um sorvete refrescante para os dias quentes.', imagem: 'caminho/para/imagem-comidas-3.jpg' }
  ];

  brinquedos: ItemVenda[] = [ // Atualizando os vetores para incluir a propriedade "imagem"
    { id: 1, nome: 'Bicicleta', descricao: 'Uma bicicleta divertida para passeios ao ar livre.', imagem: 'caminho/para/imagem-brinquedos-1.jpg' },
    { id: 2, nome: 'Bola de Futebol', descricao: 'Uma bola de futebol para brincar com os amigos.', imagem: 'caminho/para/imagem-brinquedos-2.jpg' },
    { id: 3, nome: 'Boneca de Pelúcia', descricao: 'Uma boneca de pelúcia fofinha para abraçar.', imagem: 'caminho/para/imagem-brinquedos-3.jpg' }

  ];
  
  tecnologias: ItemVenda[] = [
    { id: 1, nome: 'Smartphone', descricao: 'Um smartphone de última geração.', imagem: 'caminho/para/imagem-tecnologias-1.jpg' },
    { id: 2, nome: 'Notebook', descricao: 'Um notebook potente e portátil.', imagem: 'caminho/para/imagem-tecnologias-2.jpg' },
    { id: 3, nome: 'Fone de Ouvido', descricao: 'Um fone de ouvido com excelente qualidade de som.', imagem: 'caminho/para/imagem-tecnologias-3.jpg' }
  ];

  esportes: ItemVenda[] = [
    { id: 1, nome: 'Bicicleta', descricao: 'Uma bicicleta para passeios e exercícios.', imagem: 'caminho/para/imagem-esportes-1.jpg' },
    { id: 2, nome: 'Bola de Futebol', descricao: 'Uma bola de futebol para prática esportiva.', imagem: 'caminho/para/imagem-esportes-2.jpg' },
    { id: 3, nome: 'Tênis de Corrida', descricao: 'Um tênis confortável e adequado para corridas.', imagem: 'caminho/para/imagem-esportes-3.jpg' }
  ];

  construcoes: ItemVenda[] = [
    { id: 1, nome: 'Casa Moderna', descricao: 'Uma casa com design moderno e amplo espaço.', imagem: 'caminho/para/imagem-construcoes-1.jpg' },
    { id: 2, nome: 'Apartamento', descricao: 'Um apartamento bem localizado e aconchegante.', imagem: 'caminho/para/imagem-construcoes-2.jpg' },
    { id: 3, nome: 'Escritório Comercial', descricao: 'Um escritório espaçoso e funcional para negócios.', imagem: 'caminho/para/imagem-construcoes-3.jpg' }
  ];

  saudes: ItemVenda[] = [
    { id: 1, nome: 'Esteira Elétrica', descricao: 'Uma esteira para atividades físicas e cuidados com a saúde.', imagem: 'caminho/para/imagem-saude-1.jpg' },
    { id: 2, nome: 'Medicamentos', descricao: 'Medicamentos para cuidar da saúde e bem-estar.', imagem: 'caminho/para/imagem-saude-2.jpg' },
    { id: 3, nome: 'Suplementos Alimentares', descricao: 'Suplementos para uma dieta balanceada.', imagem: 'caminho/para/imagem-saude-3.jpg' }
  ];
}
