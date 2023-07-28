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
    { id: 1, nome: 'Casa Moderna', descricao: 'Uma casa com design moderno e amplo espaço.', imagem: 'https://www.plantapronta.com.br/projetos/161/02.jpg' },
    { id: 2, nome: 'Casa Aconchegante', descricao: 'Uma casa charmosa e aconchegante para a família.', imagem: 'https://s2.glbimg.com/POQby3wH-uCdqwb7wufczPaBlMY=/620x455/e.glbimg.com/og/ed/f/original/2018/10/24/casa-nasce-uma-estrela-sala.jpg' },
    { id: 3, nome: 'Casa de Praia', descricao: 'Uma casa de praia com vista para o mar e piscina privativa.', imagem: 'https://cdnm.westwing.com.br/glossary/uploads/br/2021/05/12044039/casa-de-praia-no-brasil-PINTEREST-VRBO-c-a612.jpg' }
  ];
  comidas: ItemVenda[] = [
    { id: 1, nome: 'Pizza', descricao: 'Uma deliciosa pizza de diversos sabores.', imagem: 'https://media.gazetadopovo.com.br/2023/07/10171212/bigstock-Wood-Fire-Cheesy-Pizza-Slice-I-458241689-960x540.jpg' },
    { id: 2, nome: 'Hambúrguer', descricao: 'Um hambúrguer suculento e saboroso.', imagem: 'https://moinhoglobo.com.br/wp-content/uploads/2019/05/16-hamburguer.jpeg' },
    { id: 3, nome: 'Sorvete', descricao: 'Um sorvete refrescante para os dias quentes.', imagem: 'https://polosulsc.com.br/wp-content/webp-express/webp-images/uploads/2018/03/Tr%C3%AAs-tipos-e-sabores-de-sorvete-diferentes-1.jpg.webp' }
  ];

  brinquedos: ItemVenda[] = [ // Atualizando os vetores para incluir a propriedade "imagem"
    { id: 1, nome: 'Bicicleta', descricao: 'Uma bicicleta divertida para passeios ao ar livre.', imagem: 'https://a-static.mlcdn.com.br/450x450/bicicleta-infantil-feminina-aro-16-rosa-personagem-samy/olimpicabike/15971752252/5d2bc74926cdf46aa781f597d545f116.jpg' },
    { id: 2, nome: 'Bola de Futebol', descricao: 'Uma bola de futebol para brincar com os amigos.', imagem: 'https://static.lojaodosesportes.com.br/product_images/1500x1500/q/587/nike-1-81408.jpg' },
    { id: 3, nome: 'Boneca de Pelúcia', descricao: 'Uma boneca de pelúcia fofinha para abraçar.', imagem: 'https://img.elo7.com.br/product/zoom/3C59D30/boneca-annabelle-pelucia-em-feltro-presente.jpg' }

  ];
  
  tecnologias: ItemVenda[] = [
    { id: 1, nome: 'Smartphone', descricao: 'Um smartphone de última geração.', imagem: 'https://m.media-amazon.com/images/I/61sr3hnxv-L._AC_UF1000,1000_QL80_.jpg' },
    { id: 2, nome: 'Notebook', descricao: 'Um notebook potente e portátil.', imagem: 'https://images.tcdn.com.br/img/img_prod/740836/180_notebook_samsung_book_x20_np550_core_i5_10210u_ram_12gb_hd_1tb_ssd_240gb_tela_15_6_fhd_windows_10_ho_6727_1_8e834b0f82445d1f5c27ade615f62915.jpg' },
    { id: 3, nome: 'Fone de Ouvido', descricao: 'Um fone de ouvido com excelente qualidade de som.', imagem: 'https://images-americanas.b2w.io/produtos/7371413357/imagens/fone-de-ouvido-sem-fio-jbl-t520bt-bluetooth-5-0-com-microfone-e-bateria-40h/7371413373_1_large.jpg' }
  ];

  esportes: ItemVenda[] = [
    { id: 1, nome: 'Bicicleta', descricao: 'Uma bicicleta para passeios e exercícios.', imagem: 'https://cdn.awsli.com.br/600x450/70/70030/produto/92205910/fc6ab408af.jpg' },
    { id: 2, nome: 'Bola de Futebol', descricao: 'Uma bola de futebol para prática esportiva.', imagem: 'https://a-static.mlcdn.com.br/450x450/bola-futebol-gremio-oficial-tradicional-junior-numero-4/g3multimarcasloja/gr712bl/9a77d386937e0d1fcbf9153989163559.jpeg' },
    { id: 3, nome: 'Tênis de Corrida', descricao: 'Um tênis confortável e adequado para corridas.', imagem: 'https://i.zst.com.br/thumbs/12/39/37/1585128076.jpg' }
  ];

  construcoes: ItemVenda[] = [
    { id: 1, nome: 'Casa Moderna', descricao: 'Uma casa com design moderno e amplo espaço.', imagem: 'https://www.tuacasa.com.br/wp-content/uploads/2015/06/fachadas-de-casas-000.jpg' },
    { id: 2, nome: 'Apartamento', descricao: 'Um apartamento bem localizado e aconchegante.', imagem: 'https://i.pinimg.com/736x/f8/f5/d4/f8f5d42c9e2c1b25dd7b455813033a04.jpg' },
    { id: 3, nome: 'Escritório Comercial', descricao: 'Um escritório espaçoso e funcional para negócios.', imagem: 'https://i.pinimg.com/736x/3c/f5/d5/3cf5d5015e57282fb8cffaa91924ccdc.jpg' }
  ];

  saudes: ItemVenda[] = [
    { id: 1, nome: 'Esteira Elétrica', descricao: 'Uma esteira para atividades físicas e cuidados com a saúde.', imagem: 'https://images.tcdn.com.br/img/img_prod/645555/evox_x400_esteira_profissional_de_grande_porte_com_inclinacao_eletronica_110v_180kg_corrente_continu_115_1_67c81f307ba3a07867e676c94405c3df.jpeg' },
    { id: 2, nome: 'Medicamentos', descricao: 'Medicamentos para cuidar da saúde e bem-estar.', imagem: 'https://www.redebrasilatual.com.br/wp-content/uploads/2022/05/medicamentos.jpg' },
    { id: 3, nome: 'Suplementos Alimentares', descricao: 'Suplementos para uma dieta balanceada.', imagem: 'https://giassi.vtexassets.com/arquivos/ids/520397/Suplemento-Alimentar-Hipercalorico-Chocolate-Integralmedica-Sinister-Mass-Pouch-3kg.png?v=637995475688100000' }
  ];
}
