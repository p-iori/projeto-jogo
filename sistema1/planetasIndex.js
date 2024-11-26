const btnPlanetas = document.querySelectorAll('.planeta-ind');
var coll = document.getElementsByClassName('menu-objetivos');
var i;

//Mostra o menu de coordenadas
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
        this.classList.toggle("ativo");
        var content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
}

//Mostra o modal ao carregar a página
$(window).on('load', function () {
    $('#myModal').modal('show');
});

//Redireciona o usuário para o planeta escolhido


 btnPlanetas.forEach(button => {
    button.addEventListener('click', function(){
     const dataPlaneta = this.getAttribute('data-ind');

     if(dataPlaneta == 1){
        location.replace('./planetas/planeta1.html');
     } else if(dataPlaneta == 2){
        location.replace('./planetas/planeta2.html');
     } else if(dataPlaneta == 3){
        location.replace('./planetas/planeta3.html');
     } else if(dataPlaneta == 4){
        location.replace('./planetas/planeta4.html');
     } else if(dataPlaneta == 5){
        location.replace('./planetas/planeta5.html');
     } else {
        console.log("alguma coisa deu muito errado")
     }
    })
 })

//Confere as coordenadas
document.getElementById('enter').addEventListener('click', confereCoord);

document.getElementById('coordenadas').addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        confereCoord()
    }
});

function confereCoord(){
    let coordInput = document.getElementById('coordenadas');
    let coord = coordInput.value;

    if(coord == ""){
        alert("Preencha o campo antes de dar enter!");
    }
    if(coord == "314-mark-21"){
        location.replace('./planetas/planeta1.html');
        console.log("devia ter ido mas vc é burro");
    } else if(coord !== "314-mark-21" && coord !== ""){
        alert("Essas coordenadas não levam a lugar algum!");
    }
}
