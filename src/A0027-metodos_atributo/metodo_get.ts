export class Pessoa {
  static idadePadrao = 20;
  static cpfPadrao = '3312312';
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, 231, '341');
  }

  getDadosClasse(): void {
    console.log(Pessoa.criaPessoa, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Luiz', 'Anselmo', 24, '000.000.000.00');
const pessoa2 = new Pessoa('Luiz', 'Anselmo', 24, '000.000.000.00');
console.log(Pessoa.criaPessoa('Emede', 'Anselmo'));
console.log(pessoa1.getDadosClasse());
console.log(Pessoa.cpfPadrao, Pessoa.idadePadrao);
