// NAO USE any para qualquer tipo porque é nao te deixar cair no erro facil
// USE o unknown porque ele vai ele te deixar primeiro fazer a verificao no codigo primeiro, vai te forçar a fazer checagem do tipox                                                                                        
let x: unknown;

x = 100;
x = 'Los';
x = 900;
x = 10;

const y = 800;

if(typeof x === 'number') console.log(x + y);