var coll = document.getElementsByClassName("menu-objetivos");
var i;

//Confere as coordenadas
document.getElementById("enter").addEventListener("click", confereCoord);

function confereCoord(){
    let coordInput = document.getElementById("coordenadas");
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

//Mostra o menu de coordenadas
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("ativo");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

//Mostra o modal ao carregar a página
$(window).on('load', function () {
    $('#myModal').modal('show');
});
