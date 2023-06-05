export abstract class Personagem {
  protected abstract emoji: string;
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }
  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;

    console.log(`${this.nome} agora tem ${this.vida}...`);
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '';
  bordao(): void {
    console.log('Eu sou uma guerreira ferroz');
  }
}
export class Monstro extends Personagem {
  protected emoji = '';
  bordao(): void {
    console.log('Monstro atacando como uma ferra');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
