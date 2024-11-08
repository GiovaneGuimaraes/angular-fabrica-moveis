import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/Cliente';
import { ComposicaoClienteArteDeco } from '../models/ComposicaoClienteArteDeco';
import { ComposicaoClienteModerno } from '../models/ComposicaoClienteModerno';
import { ComposicaoClienteVitoriano } from '../models/ComposicaoClienteVitoriano';
import { Cadeira } from '../models/Cadeira';
import { Sofa } from '../models/Sofa';
import { MesaCentro } from '../models/MesaCentro';

@Component({
  selector: 'app-fabrica-moveis',
  templateUrl: './fabrica-moveis.component.html',
  styleUrls: ['./fabrica-moveis.component.css'],
})
export class FabricaMoveisComponent implements OnInit {
  cliente: Cliente;
  logMensagens: string[] = [];

  constructor() {
    this.cliente = new Cliente('Décio', 'IFSP', '333333333', 'decio@email.com');
  }

  ngOnInit(): void {
    this.logMensagens.push('.::Fabrica Moveis::.');
  }

  adicionarCadeiraArteDeco(): void {
    const cadeira: Cadeira =
      new ComposicaoClienteArteDeco().CriarCadeiraArteDeco();
    this.cliente.adicionarNoCarrinho(cadeira);
    this.logMensagens.push('Cadeira ArteDeco adicionada ao carrinho.');
  }

  adicionarCadeiraModerno(): void {
    const cadeira: Cadeira =
      new ComposicaoClienteModerno().CriarCadeiraModerno();
    this.cliente.adicionarNoCarrinho(cadeira);
    this.logMensagens.push('Cadeira Moderna adicionada ao carrinho.');
  }

  adicionarCadeiraVitoriano(): void {
    const cadeira: Cadeira =
      new ComposicaoClienteVitoriano().CriarCadeiraVitoriana();
    this.cliente.adicionarNoCarrinho(cadeira);
    this.logMensagens.push('Cadeira Vitoriana adicionada ao carrinho.');
  }

  adicionarSofaArteDeco(): void {
    const sofa: Sofa = new ComposicaoClienteArteDeco().CriarSofaArteDeco();
    this.cliente.adicionarNoCarrinho(sofa);
    this.logMensagens.push('Sofá ArteDeco adicionado ao carrinho.');
  }

  adicionarSofaModerno(): void {
    const sofa: Sofa = new ComposicaoClienteModerno().CriarSofaModerno();
    this.cliente.adicionarNoCarrinho(sofa);
    this.logMensagens.push('Sofá Moderno adicionado ao carrinho.');
  }

  adicionarSofaVitoriano(): void {
    const sofa: Sofa = new ComposicaoClienteVitoriano().CriarSofaVitoriano();
    this.cliente.adicionarNoCarrinho(sofa);
    this.logMensagens.push('Sofá Vitoriano adicionado ao carrinho.');
  }

  adicionarMesaCentroArteDeco(): void {
    const mesa: MesaCentro =
      new ComposicaoClienteArteDeco().CriarMesaCentroArteDeco();
    this.cliente.adicionarNoCarrinho(mesa);
    this.logMensagens.push('Mesa ArteDeco adicionada ao carrinho.');
  }

  adicionarMesaCentroModerno(): void {
    const mesa: MesaCentro =
      new ComposicaoClienteModerno().CriarMesaCentroModerno();
    this.cliente.adicionarNoCarrinho(mesa);
    this.logMensagens.push('Mesa Moderna adicionada ao carrinho.');
  }

  adicionarMesaCentroVitoriano(): void {
    const mesa: MesaCentro =
      new ComposicaoClienteVitoriano().CriarMesaCentroVitoriano();
    this.cliente.adicionarNoCarrinho(mesa);
    this.logMensagens.push('Mesa Vitoriana adicionada ao carrinho.');
  }

  listarCarrinho(): void {
    this.logMensagens.push('Itens no carrinho:');
    this.cliente
      .listarCarrinho()
      .forEach((item) => this.logMensagens.push(JSON.stringify(item)));
  }

  finalizarCompra(): void {
    this.cliente.carrinho.forEach((produto) => {
      this.cliente.comprarProduto(produto);
    });

    this.logMensagens.push('Compra finalizada.');
    this.listarComprasFinalizadas();
  }

  listarComprasFinalizadas(): void {
    this.logMensagens.push('Compras finalizadas:');

    if (this.cliente.listarListaComprasFinalizadas().length === 0) {
      return;
    }
    this.cliente
      .listarListaComprasFinalizadas()
      .forEach((item) => this.logMensagens.push(JSON.stringify(item)));
  }

  isNotString(item: any): boolean {
    return typeof item !== 'string';
  }
}
