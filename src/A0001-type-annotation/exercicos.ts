/*  eslint-disable */

// ARRYAS
let numbersValues: number[] = [1,2,3,4,5,6];

// OBJECT ENTER HERE
let objectPeople: {nome: string, sobrenome: string, idade: number, altura?: boolean } = {
    nome: 'Edson',
    sobrenome: 'Anselmo',
    idade: 25
}

// WRITE FUNCTION NORMAL
function sumValue(x: number, y: number):number{
    return x + y;
}
const resultado = sumValue(1, 2)

// WRITE FUNCTION FOR RECEIVED ALIAS

let objectNames: {nome: string, idade: number, altura?: boolean} = {
    nome: 'Agust',
    idade: 2321
}

let numberesVa: number[]= [2,3,4,5,6]

function nomesT(nomes: string, sobrenome: string):string{
    return nomes + ' ' + sobrenome;
}


const nomesTwithAlias: (x: number, y: number) => number = (x,y) => x + y



const vector1: Number[] = [14,25,6,7,9,10]

const object: {nome: string;  idade: number} = {
    nome: 'Jornal',
    idade: 1
}

function nomes(nome: string, idade: number){
    return nome + "" + idade
};








const arrowFuncion: (x:number, y: number) => number = (x,y) => x + y