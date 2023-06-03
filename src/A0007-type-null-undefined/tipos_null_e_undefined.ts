let x;


if(typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(firstName: string, lastName?:  string):{
    firstName: string;
    lastName?: string;
}{
    return {
        
        firstName,
        lastName
    }
}


export function meuNome(pNome: string, sNome?:string): {
    pNome: string;
    sNome?: string;
}{
    return {
        pNome,
        sNome,
    };
}