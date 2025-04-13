const botaoToxico = document.getElementById('botao-toxico');

function moverBotao() {
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 50));

    botaoToxico.style.top = `${y}px`;
    botaoToxico.style.left = `${x}px`;
}

botaoToxico.addEventListener('click', (e) => {
    e.preventDefault();
    
    moverBotao();
});

const botaoAceite = document.getElementById('botao-normal');
const mensagem = document.getElementById('mensagem');
const botoes = document.getElementById('botoes');

botaoAceite.addEventListener('click', (e) => {
    e.preventDefault();
    mensagem.style.display = 'block';
    botoes.style.display = 'none';
});