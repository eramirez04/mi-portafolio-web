let maizena = document.getElementById("harinaPolvo");
let cocaina = true;

function convertir(){
    if(cocaina){
        maizena.setAttribute("src", "img/coca.jpeg");
    } 
    else {
        maizena.setAttribute("src", "img/maizena.jpg");
    }
    cocaina = !cocaina;

    console.log("conversion de harina a cocaina");
};

// 
/* let maizena = document.getElementById("harinaPolvo");
        let cocaina = true;

        function convertir() {
            if (cocaina) maizena.setAttribute("src", "img/coca.jpeg");
            else maizena.setAttribute("src", "img/maizena.jpg");
            cocaina = !cocaina;
             console.log(cocaina); 
        } */