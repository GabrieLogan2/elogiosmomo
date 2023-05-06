const elogios = [
	"Você é a razão do meu sorriso.",
	"Seus olhos são como duas esmeraldas brilhantes.",
	"Seu senso de humor me faz rir todos os dias.",
	"Seu sorriso ilumina meu dia inteiro.",
	"Você é tão inteligente e perspicaz.",
	"Seu coração é tão bondoso e generoso.",
	"Eu sou tão sortudo de ter você como minha namorada.",
	"Seu abraço é o lugar mais seguro do mundo para mim.",
	"Você é uma inspiração para mim todos os dias.",
	"Seu amor é a melhor coisa que já aconteceu comigo.",
    'Em espanhol: Eres la persona más hermosa que he conocido en mi vida. (Você é a pessoa mais bonita que já conheci em minha vida.)',
    'Em francês: Tu es magnifique, ma chérie. (Você é magnífica, minha querida.)',
    'Em italiano: Sei la mia anima gemella. (Você é minha alma gêmea.)',
    'Em alemão: Ich bin so glücklich, dass ich dich gefunden habe. (Estou tão feliz por ter te encontrado.)',
    'Em japonês: あなたは私の太陽です。 (Você é meu sol.)',
    'Em coreano: 너는 내 삶의 의미입니다. (Você é o significado da minha vida.)',
    'Em chinês: 你是我的一切。 (Você é tudo para mim.)',
	// Adicione mais elogios aqui
];

const elogioDisplay = document.getElementById("elogio");
const novoElogioButton = document.getElementById("novo-elogio");

function exibirElogio() {
	const randomIndex = Math.floor(Math.random() * elogios.length);
	elogioDisplay.textContent = elogios[randomIndex];
}

novoElogioButton.addEventListener("click", exibirElogio);

exibirElogio();
