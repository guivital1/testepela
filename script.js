const botaoNao = document.getElementById('nao');

botaoNao.addEventListener('mouseover', () => {
    botaoNao.style.position = 'absolute';
    botaoNao.style.left = Math.random() * (window.innerWidth - botaoNao.offsetWidth) + 'px';
    botaoNao.style.top = Math.random() * (window.innerHeight - botaoNao.offsetHeight) + 'px';
});