const menuFechado = document.getElementById('MFechado')
const menuAberto = document.getElementById('MAberto')
const nav = document.getElementById('nav')
var largura = window.screen.width;

function mostrarNav () {
        nav.setAttribute('class', 'cabecalho-navMobile')
        menuAberto.style.display = 'block'
        menuFechado.style.display = 'none'
        console.log ('Menu aberto')
}

function esconderNav () {
        nav.setAttribute('class', 'cabecalho-nav')
        menuAberto.style.display = 'none'
        menuFechado.style.display = 'block'
        console.log ('Menu fechado')
}


menuFechado.addEventListener ('click', mostrarNav)
menuAberto.addEventListener ('click', esconderNav)


if (largura > 500) {
    menuFechado.style.display = 'none'
    menuAberto.style.display = 'none'
}

