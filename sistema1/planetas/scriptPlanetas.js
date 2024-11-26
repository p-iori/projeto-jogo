const avanca = document.querySelectorAll('.btn-proximo');
var aText = new Array(
    ">>> INICIALIZANDO......",
">>> Obtendo dados......",
">>> Impossível obter: logs_seguranca",
">>> Impossível obter: dados_funcao",
">>> Impossível obter: logs_formacao",
">>> Impossível obter: logs_comunicacao",
">>> Impossível obter: mapas_navegacao",
"#########################################",
">>> SEJA BEM_VINDO user_rafalindo123!",
">>> "
    );
var iSpeed = 45; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines     
var iTextPos = 0; // começa em 0, pois primeiro devemos escrever o caractere na posição 0 da string, uma vez que a função é acionada novamente, através de um if, seu valor aumenta em 1, e o caractere escrito será aquele na posição igual ao novo valor da variável
var sContents = ''; // vai assumir o valor daquilo que precisa já estar escrito uma vez que a função é acionada
var iRow; // linha atual do array


function terminal()
{

 sContents =  ' '; //começa vazio pois inicialmente não precisa assumir valor nenhum
 iRow = Math.max(0, iIndex-iScrollAt); //faz com que o valor do iRow comece sendo 0
 var destination = document.getElementById("terminal");
console.log(iRow);

 //inicialmente o valor do iRow vai ser 0, então esse while vai ser falso e o sContent não vai receber nenhum conteudo
 while ( iRow < iIndex ) {
    console.log("aconteceu: " + iRow);
  sContents += aText[iRow++] + '<br />';
    console.log("ja foi: " + iRow);
 }

 //faz com que o conteúdo do terminal seja preenchido com o valor de sContents + o os caracteres desde a posicao 0 até a posicao "iTextPos" da string na posicao "iIndex" do array "aText"
 //como o sContent não possui valor nenhum, inicialmente, nada vai ser concatenado]
 //como o iTextPos começa zerado o metodo substring retornará apenas o caractere na posicao 0 da string na posicao "iIndex" do array
 //como o iIndex comeca zerado, o caractere retornado será o primeiro da primeira string do array
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 

 //o if aumenta o valor do iTextPOs
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;

  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("terminal()", 500);
  }
  console.log(iTextPos + " iTextPos");

 } 
 
 else {
  setTimeout("terminal()", iSpeed);  
 }

}
     
//mostrar o próximo passo ao clicar num botão
avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.toggle('ativo');
        document.getElementById(proximoPasso).classList.toggle('ativo');
    })
})

//função para voltar para a órbita
function sairDoPlaneta() {
    location.replace('../planetasIndex.html');
}

terminal();