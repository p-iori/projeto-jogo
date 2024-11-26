const avanca = document.querySelectorAll('.btn-proximo');
const mudaTexto = document.querySelectorAll('.btn-subpasso'); 

//mostrar o próximo passo ao clicar num botão
avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.toggle('ativo');
        document.getElementById(proximoPasso).classList.toggle('ativo');
    })
})

//apagar apenas uma parte da div "passo ativo", chamada de subpasso
mudaTexto.forEach(button => {
    button.addEventListener('click', function(){
        const subpassoAtual = document.querySelectorAll('.subpasso');
        const proximoSubpasso = this.getAttribute('data-proximo');
        
        document.getElementById(proximoSubpasso).classList.toggle('ativo');
        document.getElementById(proximoSubpasso - 1).classList.toggle('ativo');
        this.classList.add('inativo');
    })
})

//função para voltar para a órbita
function sairDoPlaneta() {
    location.replace('../planetasIndex.html');
}


