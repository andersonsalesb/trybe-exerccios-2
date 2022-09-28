let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let base = 0; base < numbers.length; base++ );

console.log(numbers * base);

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won"

let player1;
let player2;

let valorJogado1 = ['pedra', 'papel', 'tesoura'];
let valorJogado2 = ['pedra', 'papel', 'tesoura'];

let resultado;

if (valorJogado1 === valorJogado2){
    console.log ("A Ties");
}
if (valorJogado1 === 'pedra' && valorJogado2 === 'tesoura'){
    console.log("Player 1 won" );
}
if (valorJogado1 === 'pedra' && valorJogado2 === 'papel'){
    console.log("Player 2 won" );
}
if (valorJogado1 === 'papel' && valorJogado2 === 'tesoura'){
    console.log("Player 2 won" );
}
if (valorJogado1 === 'papel' && valorJogado2 === 'tesoura'){
    console.log("Player 1 won" );
}