var coll = document.getElementsByClassName("menu-objetivos");
var i;

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

/*

//Mostra o modal ao carregar a página
$(window).on('load', function () {
    $('#myModal').modal('show');
});

*/