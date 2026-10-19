
import { perguntas } from "./perguntas.js";

import {
    escolherPergunta,
    limparTexto,
    mensagemFinal
} from "./utils.js";

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const progressoTexto = document.querySelector("#progresso-texto");
const barraProgresso = document.querySelector("#barra-progresso");
const botaoReiniciar = document.querySelector("#botao-reiniciar");

let perguntaAtual = 0;
let pontos = 0;
let perguntasSelecionadas = [];

function prepararJogo() {
    // Cria uma cópia para não modificar as perguntas originais.
    perguntasSelecionadas = [...perguntas];

    // Embaralha as perguntas sem repetir nenhuma.
    for (let i = perguntasSelecionadas.length - 1; i > 0; i--) {
        const j = escolherPergunta(
            Array.from({ length: i + 1 }, (_, indice) => indice)
        );

        // escolherPergunta retorna um elemento do array.
        [perguntasSelecionadas[i], perguntasSelecionadas[j]] =
            [perguntasSelecionadas[j], perguntasSelecionadas[i]];
    }
}

function mostrarPergunta() {
    if (perguntaAtual >= perguntasSelecionadas.length) {
        mostrarResultado();
        return;
    }

    const pergunta = perguntasSelecionadas[perguntaAtual];

    caixaPerguntas.textContent = limparTexto(pergunta.enunciado);
    caixaAlternativas.replaceChildren();

    progressoTexto.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntasSelecionadas.length}`;

    const progresso =
        (perguntaAtual / perguntasSelecionadas.length) * 100;

    barraProgresso.style.width = `${progresso}%`;
    barraProgresso.setAttribute("aria-valuenow", progresso);

    mostrarAlternativas(pergunta);
}

function mostrarAlternativas(pergunta) {
    for (const alternativa of pergunta.alternativas) {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.textContent = limparTexto(alternativa.texto);

        botao.addEventListener("click", () => {
            selecionarResposta(alternativa);
        });

        caixaAlternativas.appendChild(botao);
    }
}

function selecionarResposta(alternativa) {
    pontos += alternativa.pontos;
    perguntaAtual++;

    mostrarPergunta();
}

function mostrarResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    caixaAlternativas.replaceChildren();

    progressoTexto.textContent = "Quiz concluído!";
    barraProgresso.style.width = "100%";
    barraProgresso.setAttribute("aria-valuenow", "100");

    textoResultado.textContent =
        `${mensagemFinal(pontos)} Sua pontuação foi ${pontos} de 10.`;

    caixaResultado.classList.add("mostrar");
}

function reiniciarJogo() {
    perguntaAtual = 0;
    pontos = 0;

    caixaResultado.classList.remove("mostrar");

    prepararJogo();
    mostrarPergunta();
}

botaoReiniciar.addEventListener("click", reiniciarJogo);

prepararJogo();
mostrarPergunta();
