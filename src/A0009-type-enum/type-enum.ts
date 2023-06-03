// ESTRUTURA DE DADOS NAO ORDENADO\, ENTAO USAMOS O ENUM


enum Palete{
    VERDE = 10, //0
    LARANJA = 100, //1
    MARON = 200, //2
}

enum Palete{
    LEO = 'LEO',
    AMIGO= 201,
    LEONARd = 202
}
// console.lo(TIos)
console.log(Palete.LARANJA);
console.log(Palete[100])


export function colorPalet(cor: Palete): void{
    console.log(Palete[cor]);
}

colorPalet(Palete.LEONARd);