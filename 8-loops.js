console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log(`\nDestinos possíveis:`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let contador = 0;

while(contador < 4) {
    if(listaDeDestinos[contador] == destino) {
        console.log('Destino existe!');
    } else {
        console.log('Destino não existe!');
    }
    contador += 1;
}