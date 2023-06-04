export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  set cpf(valor: string) {
    console.log('Consetter Colocado');
    this._cpf = valor;
  }

  get cpf(): string {
    console.log('Passando no getter');
    return this._cpf;
  }
}

const pessoa = new Pessoa('Luiz', 'Anselmo', 24, '000.000.000.00');

pessoa.cpf = '111.233.123.99';
console.log(pessoa.cpf);
