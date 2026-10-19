
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
        .replace(/\bIA\b/g, "Inteligência Artificial")
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
