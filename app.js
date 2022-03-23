let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");
let linguagem = prompt("Qual é o sua Linguagem?");

let resultado = document.getElementById('resultado')
    /*let link = document.getElementById('link');*/

resultado.innerHTML = "Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + " !"


document.addEventListener("DOMContentLoaded", function(event) {
    var x;

    var voto = prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO.");

    if (voto == 1) {
        x = "Muito bom! Continue estudando e você terá muito sucesso."
        document.getElementById("voto").innerHTML = x;
    } else if (x == 2) {
        x = " tentou aprender outras linguagens ?"
        document.getElementById("voto").innerHTML = x;
    }
})