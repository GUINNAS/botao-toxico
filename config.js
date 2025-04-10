const botaoToxico = document.getElementById('botao-toxico');

function moverBotao() {
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 50));

    botaoToxico.style.top = `${y}px`;
    botaoToxico.style.left = `${x}px`;
}

botaoToxico.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Mexeu')
    
    moverBotao();
});

moverBotao();