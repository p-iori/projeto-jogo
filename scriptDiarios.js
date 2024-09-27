const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const inativo = document.querySelector('.inativo');
        const proximoPasso = this.getAttribute('data-proximo');

        document.getElementById(proximoPasso - 1).classList.toggle("inativar");
        document.getElementById(proximoPasso).classList.toggle("ativar");

        document.getElementById("objetivos").classList.toggle("inativar");
        document.getElementById("iniciar").classList.toggle("ativar");
    })
})