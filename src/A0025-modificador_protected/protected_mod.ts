export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

class Udemy extends Empresa {
  constructor() {
    super('Udemy', '000.000.00/231');
  }

  pop(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(public readonly nome: string, public sobrenome: string) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Luiz', 'Jornal');
const colaborador2 = new Colaborador('Edson', 'Gustavo');
const colaborador3 = new Colaborador('Elisa', 'Interna');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

const colaboradorRemovido = empresa1.pop();
console.log(colaboradorRemovido);
console.log(empresa1);
