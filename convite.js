let dataAtual = new Date('10/18/2021');
let dataEvento = new Date('11/25/2021');

let participantes = 99;
//Máximo  de Participantes = 100;

let idade = 19;
//Maiores de 18 anos;

let listaParticipantes = ["João Silva", "Marcelo Alves", "Carla Santos", "José Souza", "Paulo Amorim", "Erico Silva"];

let contador = 0;

const palestranteEvento1 = ["Palestrante Evento 1 = Carlos Silveira"];
const palestranteEvento2 = ["Palestrante Evento 2 = Sonia Antunes"];

if (dataAtual < dataEvento) {
 console.log("Informe Sua Idade");
} else {console.log("Inscrições Encerradas");
}
if (participantes < 100) {
    console.log("Informe Sua Idade");
} else {console.log("Inscrições Encerradas");
}
if (idade > 18) {
    console.log("Nome Completo do Participante");
} else {console.log("Inscrições para Maiores de 18 Anos");
}
while (contador < listaParticipantes.length) {

    if (contador == 0) {
        console.log(contador + listaParticipantes[contador]);
    } else if (contador % 2 == 1) {
        console.log(`${contador} ${listaParticipantes[contador]}`);
    } else {
        console.log(`${contador} ${listaParticipantes[contador]}`)
    }
contador++;
}
console.log(palestranteEvento1);
console.log(palestranteEvento2);