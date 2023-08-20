 alert("estare actualizando mi pagina cada semana") 

let logo = document.getElementById("perfil")
let mainMenu = document.getElementById("menu")

logo.addEventListener("click", function (){
    if(mainMenu.classList.contains("menuDesplegable")){
        mainMenu.classList.add("menuDesplegable2")
        mainMenu.classList.remove("menuDesplegable")
        }
        else{
            mainMenu.classList.remove("menuDesplegable2")
            mainMenu.classList.add("menuDesplegable")
        }
})