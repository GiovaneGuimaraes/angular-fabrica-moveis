import { Cadeira } from './Cadeira';
import { MesaCentro } from './MesaCentro';
import { Sofa } from './Sofa';

export class Cliente {
  finalizarCompra() {
    throw new Error('Method not implemented.');
  }
  nome: string;
  endereco: string;
  telefone: string;
  email: string;
  carrinho: (Sofa | Cadeira | MesaCentro)[];
  listaDeCompraFinalizada: (Sofa | Cadeira | MesaCentro)[];

  constructor(nome: string, endereco: string, telefone: string, email: string) {
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    this.carrinho = [];
    this.listaDeCompraFinalizada = [];
  }

  adicionarNoCarrinho(objeto: Cadeira | Sofa | MesaCentro) {
    const primeiroItem = this.carrinho[0];

    if (primeiroItem !== undefined) {
      if (primeiroItem.estilo === objeto.estilo) {
        this.carrinho.push(objeto);
        console.log(`Produto adicionado no carrinho!`);
      } else {
        const confirmacao = window.confirm(
          `O estilo dos objetos são diferentes. Você tem certeza que deseja adicionar produtos de estilos diferentes no carrinho?`
        );

        if (confirmacao) {
          this.carrinho.push(objeto);
          console.log(`Produto adicionado no carrinho!`);
        } else {
          console.log(`Cliente optou por não comprar com estilos diferentes.`);
        }
      }
    } else {
      this.carrinho.push(objeto);
      console.log(`Produto adicionado no carrinho!`);
    }
  }

  adicionarNaListaCompraFinalizada(objeto: Cadeira | Sofa | MesaCentro) {
    this.listaDeCompraFinalizada.push(objeto);
    console.log(`produto adicionado na lista de compras finalizadas!`);
  }

  comprarProduto(objeto: Cadeira | Sofa | MesaCentro) {
    if (this.carrinho.find((item) => item.id === objeto.id)) {
      /**
       * altera o status de compra para aprovado
       */
      objeto.statusComprado = 'APROVED';
      console.log(`------ Produto comprado! ------`);
      console.log(
        `${objeto.constructor.name} id: ${objeto.id}\nstatus compra: ${objeto.statusComprado}`
      );

      /**
       * adiciona produto na lista de compra finalizada
       */
      this.adicionarNaListaCompraFinalizada(objeto);

      /**
       * remove o produto do carrinho
       */
      this.carrinho = this.carrinho.filter((item) => {
        return (
          item.id !== objeto.id ||
          item.constructor.name !== objeto.constructor.name
        );
      });
    } else {
      console.log('adicione o produto no carrinho antes de comprar!');
    }
  }

  listarCarrinho(): (Sofa | Cadeira | MesaCentro)[] {
    console.log(`--------- Produtos adicionados no carrinho ---------`);
    if (this.carrinho[0] === undefined) {
      console.log(`carrinho vazio...`);
      return [];
    } else {
      this.carrinho.forEach((objeto) => {
        console.log('--------------------------');
        console.log(
          `${objeto.constructor.name} id: ${objeto.id}\ncor: ${objeto.cor},\nmaterial: ${objeto.material},\ntamanho: ${objeto.tamanho},\nestilo: ${objeto.estilo},`
        );
      });
    }

    return this.carrinho;
  }

  listarListaComprasFinalizadas(): (Sofa | Cadeira | MesaCentro)[] {
    console.log(`--------- Lista de produtos comprados ---------`);
    this.listaDeCompraFinalizada.forEach((objeto) => {
      console.log('--------------------------');
      console.log(
        `${objeto.constructor.name} id: ${objeto.id}: \ncor: ${objeto.cor},\nmaterial: ${objeto.material},\ntamanho: ${objeto.tamanho},\nestilo: ${objeto.estilo},`
      );
    });

    return this.listaDeCompraFinalizada;
  }
}
