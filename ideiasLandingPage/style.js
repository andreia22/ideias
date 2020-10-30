
var imagens=[];
var fotos;
var fotoAtual;
var maxFoto;
var tempo;
var tempoFoto;

function pCarregamento(){
    var f=1;
    for(var i=0; i<12; i++){
        imagens[i]=new Image();
        imagens[i].src="imagens/f"+f+".jpg";
        f++;
    }
}
function carregaImagens(img){
    fotos.style.backgroundImage="url('"+imagens[img].src+"')";
}
function comeca(){
    pCarregamento();
    fotoAtual=0;
    maxFoto=imagens.length-1;
    fotos=document.getElementById("slideFoto");
    carregaImagens(fotoAtual);
    tempoFoto=3000;
    tempo=setInterval(trocaFoto, tempoFoto);
}
function trocaFoto(){
    fotoAtual++;
    if(fotoAtual>maxFoto){
        fotoAtual=0;
    }
        carregaImagens(fotoAtual);
}

window.addEventListener("load",comeca);