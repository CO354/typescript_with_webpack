//  UTILIZE O TYPE any EM ULTIMO CASO apenas
// ESTE TIPO VOCE VAI UTILIZAR EM CASO MAIS ESPECIFICO
// TENHA CUIDADO PORQUE ELE PODE DESENCADEIA ERROS TAMBEM 


function showMessage(msg: any){
    return msg
}

console.log(showMessage([2344,4231]));
console.log(showMessage("dsds"));

