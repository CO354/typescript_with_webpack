export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => {
      return soma + produto.preco;
    }, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Revista', 31);
const produto2 = new Produto('Pls', 53);
const produto3 = new Produto('Bolsa', 24);

const carrinohoDecompra = new CarrinhoDeCompras();
carrinohoDecompra.inserirProdutos(produto1, produto2, produto3);

console.log(carrinohoDecompra);
console.log(carrinohoDecompra.quantidadeProdutos());
