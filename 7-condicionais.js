console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`,
);

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

// if(idadeComprador >= 18) {
//     console.log(`Comprador maior de idade`);
//     listaDeDestinos.splice(1, 1); // remover item
// } else if(estaAcompanhada) {
//     console.log(`Comprador está acompanhado`);
//     listaDeDestinos.splice(1, 1); // remover item
// } else {
//     console.log(`Não é maior de idade e não posso vender`);
// }

if(idadeComprador >= 18 || estaAcompanhada) {
    console.log(`Boa Viagem!`);
    listaDeDestinos.splice(1, 1); // remover item
} else {
    console.log(`Não é maior de idade e não posso vender!`);
}

console.log('Embarque: \n');
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log('Boa viagem!');
} else {
    console.log('Você não pode embarcar!');
}

console.log(listaDeDestinos);