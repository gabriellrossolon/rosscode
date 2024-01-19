var menu = document.getElementById("menu");
var formulario = document.getElementById("formulario");
var navItens = document.getElementById("navItens");


function clickMenu() {
    if(navItens.style.display == 'block') {
        navItens.style.display = 'none'
    } else {
        navItens.style.display = 'block'
    }
}

function changeIcon() {
    if (menu.classList.contains("fa-bars")){
        menu.classList.remove("fa-bars") || menu.classList.add("fa-bars-staggered")
    } else {
        menu.classList.remove("fa-bars-staggered") || menu.classList.add("fa-bars") 
    } 
}  


/////

AOS.init();

/////

function fecharMenu() {
    navItens.style.display = 'none',
    menu.classList.remove("fa-bars-staggered") || menu.classList.add("fa-bars"),

    console.log("Click registrado")
}

