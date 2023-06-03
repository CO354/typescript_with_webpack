export class Empresa{
    public readonly nome: string;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj:string;

    constructor(nome: string, cnpj: string){
        this.nome = nome;
        this.cnpj = cnpj;
    }

    /** 
    * name
    * para assecar os atributos privados criamos um metodo public
    */

    adicionaColaborador(colaborador: Colaborador):void{
        this.colaboradores.push(colaborador);
    }

    mostrarColaboradores(): void{
        for( const colaborador of this.colaboradores){
            console.log(colaborador);
        }
    }
}

export class Colaborador{
    constructor(public readonly nome: string, public sobrenome: string){

    }

}

const empresa1 = new Empresa('BemEstar', '11.1111.112/2123');
const colaborador1 = new Colaborador('Luiz', 'Jornal');
const colaborador2 = new Colaborador('Edson', 'Gustavo');
const colaborador3 = new Colaborador('Elisa', 'Interna');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

console.log(empresa1);
