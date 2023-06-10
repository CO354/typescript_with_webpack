export class Condutor {
  private _carro: Carro | null = null;
  constructor(private _nome: string) {}

  set nome(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }

  set carro(carro: Carro | null) {
    this._carro = carro;
  }

  get carro(): Carro | null {
    return this._carro;
  }

  dirigir(): void {
    if (this.carro === null) {
      console.log('Voce nao esta permitido para dirigir');
      return;
    }

    this.carro?.dirigir();
  }
}

export abstract class Carro {
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }
  abstract dirigir(): void;
}

export class Chave extends Carro {
  dirigir(): void {
    console.log('A chave esta no carro');
  }
}

export class Gasolina extends Carro {
  dirigir(): void {
    console.log('A gasolina deve ser comprado');
  }
}

const condutor = new Condutor('Anselmo');
const chave = new Chave('Toyota Tb');
const gasolina = new Gasolina('Toptal V8');

console.log(condutor.nome);
console.log(chave.nome);
console.log(gasolina.nome);

condutor.dirigir();
