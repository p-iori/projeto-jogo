const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.toggle('ativo');
        document.getElementById(proximoPasso).classList.toggle('ativo');
    })
})

function sairDoPlaneta() {
    location.replace('../planetasIndex.html');
}