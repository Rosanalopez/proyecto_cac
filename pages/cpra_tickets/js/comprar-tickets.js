

// Defino el valor del tickets

const valorTickets = 200;

// Defino porcentajes de descuento
let  descuentoEstudiante = 80;
let  descuentoTrainee = 50;
let  descuentoJunior = 15;
 
// Elementos variables

let nombre          =     document.getElementById("nombre");
let apellido        =     document.getElementById("apellido");
let email           =     document.getElementById("exampleInputEmail1");
let tickets         =     document.getElementById("cantidadTickets");
let categoría       =     document.getElementById("categoriaSelect");


 // Para determinar si el correo electrónico es válido o no
 const mailValido = email => {
    return/^[^\s@]+@[^\s@]+\. [^\s@]+$/.test(email);
}

// funcion para quitar el estilo de error a los elementos del form

function quitarClaseError(){
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}

function resetTotalAPagar(){
    quitarClaseError();
    TotalPago.innerHTML = "";
 
}



// Calculo total a pagar
function TotalAPagar(){

    quitarClaseError();

    if (nombre.value ===""){

        nombre.classList.add("is-invalid");
        nombre.focus();
        alert("Por favor, escribí tu nombre");
        return;
    }  
    if (apellido.value === ""){
        apellido.classList.add("is-invalid");
        apellido.focus();
        alert("Por favor, escribí tu apellido");
        return;
    }

    if (email.value === "") { 
        email.classList.add("is-invalid");
        email.focus();
        alert("Por favor, escribí tu email");
        return;
    }

    /*if (! mailValido(email.value)) {  
        email.classList.add("is-invalid");
        email.focus();
        alert("Por favor, escribí un correo electrónico válido");
        return;
    }*/

    //Verifico si está ingresado al menos 1 ticket, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if ((tickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        tickets.classList.add("is-invalid");
        tickets.focus();
        alert("Por favor, ingresá correctamente cantidad de tickets");
        return;
    }

    //Verifico que haya seleccionado una categoría, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if (categoría.value == "") {
        categoría.classList.add("is-invalid");
        categoría.focus();
        alert("Por favor, seleccioná una categoría");
        return;
    }

    //Multiplico cantidad de tickets por el valor
   
    let totalValorTickets = (tickets.value) * valorTickets;
 

   //Aplico descuentos según categoría

    if (categoría. valor==0)    {
        totalValorTickets = totalValorTickets;
    }
    else if(categoría. valor==1)    {
        totalValorTickets = totalValorTickets-(descuentoEstudiante/100 * totalValorTickets);
    }
    else if(categoría. valor==2)    {
        totalValorTickets=totalValorTickets-(descuentoTrainee/100 * totalValorTickets);
    }
    else if(categoría. valor==3)    {
        totalValorTickets = totalValorTickets-(descuentoJunior/100 * totalValorTickets);
    }
     


     /*switch(categoría.value){

        case '0':
            totalValorTickets = totalValorTickets;
            break;
        case '1':
            totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
            break;
        case '2':
            totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
            break;
        case '3':
            totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
            break;
            default:
                System.out.printLn("esa categoría no es valida");
  
     }*/
     //Inserto el valor en el HTML 
    TotalPago.innerHTML = totalValorTickets;
}
//Botón Resumen recibe un escuchador y la funcion del cálculo
btnResumen.addEventListener('click', TotalAPagar);

//Función para el botón Borrar para que borre el valor
btnBorrar.addEventListener('click', resetTotalAPagar);












