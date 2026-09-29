const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                "No início icou co medo do que está tcnologia pode fazer.",
                "Achou assustador pensar na velocidade na qual a tecnologia está avançando."
            ]
            },
            {
                texto: "Isso é maravilhoso!rf",
                afirmacao: [
                    "Quis saber como usar IA no seu ia a dia.",
                    "Foi atrás de vídeos, artigos e mais informaçõe sobre como utilizar essa tecnologia. que IA pode ajudar em tarefas da sua vida."

                ]
            }           
            
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre elaIA. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto:"Utilizar uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento",
                afirmacao:["Consegiu ultilizar a IA para buscar informações úteis.",
                    "Percebeu que a IA pode ajudar a encontrar informaçoes úteis na internet de foma mais rápia e direcionada.",
                    "Pecebeu que a IA consegue explicar termos complicados de forma direcionada e iso ajudou muito suas pesquisa sobre assunto complexos."
                ]
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao:["Sentiu mai facilidade em ultilizar seus proprios recursos para escrever seu trabalho.",
                    "Achou que era muito mais fácil procurar por respostas ultilizando alguns meios mai tradicionais mesmo que levasse mais tempo.",
                    "Sentiu um pouco de medo de quais dados pessoais seus a IA poderia ultilizar e por io prefere fazer suas coisa com pouca promissão a tecnologia."
                ]
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto:"Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao:["Sua preocupação com as pesoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de ultilização de IA de forma ética.",
                    "Criou grupo de ética voltado para IA e busca ativamente reduzir as desigualdades geradas pela automação."
                ]
            },
            {
                texto:"Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao:["Vem inpulsionando a inovação na área de IA e luta para abrir seus caminhos profissionais com a IA.",
                    "Participa ativamentre do desenvolvimento do desenvolvimeno d soluções criativas e na melhoria de procesos em IA."
                ]
            }
            
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto:"Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao:["Notou também que muitas pessoas não sabem ainda utilizar as ferramenta tradicionai e decidiu compartilhar seus conhecimentos de desing ultiliizano ferramentas de pintura digital para iniciantes.",
                    "Ainda acha que meios de desenho tradicionai são mais eficaze para a criatividade, por isso vem estimulando pessoas em suas redes sociais e fazer pintura em aquarela."

                ]
            },
            {
                texto:"Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao:["Acelerou o prcesso de criação de trabalhos ultilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades de desenhar manualmente como ultilizar também!.",
                    "Compartilhou artes em redes sociais como forma de eninar como comunicar através da arte.",
                    ""

                ]
            }
            
        ]
    },
    {
        enunciado: " Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao:"afirmacao"
            },
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio (opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

function aleatorio(Lista){
    const posicao = Math.floor(Math.random()* Lista.length);
    return Lista[posicao];
}

mostraPergunta();