export const perguntas = [
{
enunciado:
"Você encontra uma nova inteligência artificial capaz de conversar, criar imagens e ajudar nos estudos. Qual é sua primeira reação?",

    alternativas: [
        {
            texto: "Fico curioso e quero descobrir como ela funciona.",
            pontos: 2
        },

        {
            texto: "Fico preocupado com os possíveis problemas.",
            pontos: 1
        }
    ]
},

{
    enunciado:
        "Sua professora permite utilizar IA para ajudar em um trabalho. O que você faz?",

    alternativas: [
        {
            texto: "Uso a IA como ferramenta e verifico as informações.",
            pontos: 2
        },

        {
            texto: "Copio a resposta da IA sem verificar.",
            pontos: 0
        }
    ]
},

{
    enunciado:
        "A inteligência artificial começa a transformar algumas profissões. Como você encara essa situação?",

    alternativas: [
        {
            texto: "Aprendo novas habilidades para acompanhar as mudanças.",
            pontos: 2
        },

        {
            texto: "Acredito que nada precisa mudar.",
            pontos: 0
        }
    ]
},

{
    enunciado:
        "Você precisa criar uma imagem para um projeto escolar. Qual ferramenta escolheria?",

    alternativas: [
        {
            texto: "Uma ferramenta de IA para gerar uma ideia inicial.",
            pontos: 2
        },

        {
            texto: "Prefiro criar tudo manualmente.",
            pontos: 1
        }
    ]
},

{
    enunciado:
        "Um colega apresenta um trabalho totalmente produzido por IA. O que você recomenda?",

    alternativas: [
        {
            texto: "Revisar o conteúdo e colocar ideias próprias.",
            pontos: 2
        },

        {
            texto: "Entregar exatamente como a IA produziu.",
            pontos: 0
        }
    ]
}


];
export function numeroAleatorio(maximo) {
return Math.floor(Math.random() * maximo);
}

export function escolherPergunta(perguntas) {

const indice = numeroAleatorio(perguntas.length);

return perguntas[indice];


}

export function limparTexto(texto) {

return texto
    .replace(/\s+/g, " ")
    .replace("IA", "Inteligência Artificial")
    .trim();


}

export function mensagemFinal(pontos) {

if (pontos >= 8) {

    return "Você acredita em um futuro onde a Inteligência Artificial pode ampliar as capacidades humanas.";

} else if (pontos >= 5) {

    return "Você vê a Inteligência Artificial com curiosidade, mas acredita que devemos utilizá-la com responsabilidade.";

} else {

    return "Você prefere um futuro mais cuidadoso, onde a tecnologia seja utilizada com bastante atenção.";

}


}
import { perguntas } from "./perguntas.js";

import {
escolherPergunta,
limparTexto,
mensagemFinal
} from "./utils.js";

const caixaPerguntas =
document.querySelector(".caixa-perguntas");

const caixaAlternativas =
document.querySelector(".caixa-alternativas");

const caixaResultado =
document.querySelector(".caixa-resultado");

const textoResultado =
document.querySelector(".texto-resultado");

const progressoTexto =
document.querySelector("#progresso-texto");

const barraProgresso =
document.querySelector("#barra-progresso");

const botaoReiniciar =
document.querySelector("#botao-reiniciar");

let perguntaAtual = 0;

let pontos = 0;

let perguntasSelecionadas = [];

// Seleciona perguntas aleatórias sem repetir
function prepararJogo() {

perguntasSelecionadas = [];

while (
    perguntasSelecionadas.length < perguntas.length
) {

    const pergunta =
        escolherPergunta(perguntas);

    if (
        !perguntasSelecionadas.includes(pergunta)
    ) {

        perguntasSelecionadas.push(pergunta);
    }
}


}

// Mostra uma pergunta na tela
function mostrarPergunta() {

if (
    perguntaAtual >= perguntasSelecionadas.length
) {

    mostrarResultado();

    return;
}


const pergunta =
    perguntasSelecionadas[perguntaAtual];


caixaPerguntas.textContent =
    limparTexto(pergunta.enunciado);


caixaAlternativas.textContent = "";


progressoTexto.textContent =
    `Pergunta ${perguntaAtual + 1} de ${perguntasSelecionadas.length}`;


const progresso =
    ((perguntaAtual + 1) /
        perguntasSelecionadas.length) * 100;


barraProgresso.style.width =
    `${progresso}%`;


mostrarAlternativas(pergunta);


}

// Utiliza for...of para percorrer as alternativas
function mostrarAlternativas(pergunta) {

for (const alternativa of pergunta.alternativas) {

    const botao =
        document.createElement("button");


    botao.textContent =
        limparTexto(alternativa.texto);


    botao.addEventListener(
        "click",
        () => selecionarResposta(alternativa)
    );


    caixaAlternativas.appendChild(botao);
}


}

// Processa a resposta
function selecionarResposta(alternativa) {

pontos += alternativa.pontos;

perguntaAtual++;

mostrarPergunta();


}

// Mostra o resultado final
function mostrarResultado() {

caixaPerguntas.textContent =
    "Em 2049...";


caixaAlternativas.textContent = "";


textoResultado.textContent =
    mensagemFinal(pontos);


caixaResultado.classList.add("mostrar");


}

// Reinicia o jogo
function reiniciarJogo() {

perguntaAtual = 0;

pontos = 0;

caixaResultado.classList.remove("mostrar");

prepararJogo();

mostrarPergunta();


}

// Botão de reiniciar
botaoReiniciar.addEventListener(
"click",
reiniciarJogo
);

// Inicia o jogo
prepararJogo();

mostrarPergunta();