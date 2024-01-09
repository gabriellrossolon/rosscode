var menu = document.getElementById("menu");

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
