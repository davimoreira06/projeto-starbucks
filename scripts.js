let img = document.querySelector(".starbucks")
let circulo = document.querySelector(".circulo")

function trocaImg(endereco) {
    img.src = endereco
}

function trocaCor(cor) {
    circulo.style.background = cor
}