export class Pessoa{
    constructor(
        public nome: string,
         public sobrenome: string, 
         private idade: number,
          protected cpf: string){}

          getIdade(): number{
            return this.idade;
          }
          getCpfg(): string{
            return this.cpf;
          }

          getNomeCompleto():string{
            return this.nome + ' ' + this.sobrenome;
          }
}


export class Aluno extends Pessoa {
    getNomeCompleto():string{
        return this.nome + ' ' + this.sobrenome;
      }
}
export class Cliente extends Pessoa {
    getNomeCompleto():string{
        return this.nome + ' ' + this.sobrenome;
      }
}

const pessoa = new Pessoa('Luiz', 'Anselmo', 24, '000.000.000.00');
const aluno = new Aluno('Luiz', 'Anselmo', 24, '000.000.000.00');
const cliente = new Cliente('Luiz', 'Anselmo', 24, '000.000.000.00');

