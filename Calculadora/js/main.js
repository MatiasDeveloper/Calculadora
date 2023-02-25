
const bolita = document.getElementById("inicio__bolita");
const bolitaContainer = document.getElementById("inicio");

window.addEventListener("load", ()=> { 
    // Espero a que se cargue la página completa para hacer la animacion del loader que se abre.
    bolita.style.cssText = "animation: abrir .6s; "
    setTimeout(() => {
        bolitaContainer.style.cssText = "display: none; ";
    },600);


    // Obtengo la pantalla y transformo la HTMLCollection de los botones a Array.
    const display = document.querySelector(".calculadora__pantalla");
    const keypadButtons = document.getElementsByClassName("botones__boton");
    const keypadButtonsArray = Array.from(keypadButtons);

    keypadButtonsArray.forEach((button) => {
        button.addEventListener("click", ()=> {
            calculadora(button, display);
        })
    })

    // Hago la función principal de la calculadora
    function calculadora(button, display) {
        switch (button.innerHTML) {
            case "C":
                borrar(display);
                break;
            case "=": 
                calcular(display);
                break;
            default:
                actualizar(display, button);
                break;
        }
    }

    // Funcion de borrar, transforma el display a "0".
    function borrar(display) {
        display.innerHTML = 0;
    }
    // Funcion de actualizar, si el display esta en "0", no suma otro "0". Luego le suma al display, el botón que es presionado. 
    function actualizar(display, button) {
        if (display.innerHTML == 0) {
            display.innerHTML = "";
        }
        display.innerHTML += button.innerHTML;
    }
    // Funcion de calcular, transforma el display al resultado de la operación escrita en el display por el usuario.
    function calcular(display) {
        display.innerHTML = eval(display.innerHTML)
    }
    

});






