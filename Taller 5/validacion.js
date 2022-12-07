const form = document.getElementById('form');
const inputs = document.querySelectorAll("#form input");
const icons = document.querySelectorAll("#form i");
const message = document.querySelectorAll("#form h6");

//Se utilizan algunas expresiones regulares para verificar los campos
const expresiones = {
    direccion: /^(cll|cra|av|anv|trans)/, // Comienza con cll, cra, av, anv o trans
    ccusuario: /^\d{10,20}$/, // El número de identificación debe tener entre 10 a 20 caracteres y no contener caracteres extraños (solo números)
    icon: /^(b|incorrect)/,
    message:  /^m/
}

 // Verificar que los campos estén correctos
const campos = {
    nombre: false,
    apellido: false,
    password: false,
    email: false,
    ccusuario: false,
}
const fechaNacimiento = document.getElementById("fecha");
const edad = document.getElementById("edad");

const calcularEdad = (fechaNacimiento) => {
    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    // 2016-07-11
    const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

    let edad = anoActual - anoNacimiento;
    if (mesActual < mesNacimiento) {
        edad--;
    } else if (mesActual === mesNacimiento) {
        if (diaActual < diaNacimiento) {
            edad--;
        }
    }
    return edad;
};

window.addEventListener('load', function () {

    fechaNacimiento.addEventListener('change', function () {
        if (this.value) {
            edad.innerText = ` Tu edad es: ${calcularEdad(this.value)} años`;
        }
    });

});


const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            const nombre = document.getElementById('nombre');
            const nombreV = nombre.value.trim();
            if(nombreV.length == 0 ){
                document.getElementById("m1").style.display="block";
                document.getElementById("b1").style.display="none";
                document.getElementById("incorrect1").style.display="block";
                document.getElementById("m2").style.display="none";
                campos.nombre = false;
            }
            else if (nombreV.length > 0 && nombreV.length < 25 ) {
                document.getElementById("m1").style.display="none";
                document.getElementById("b1").style.display="block";
                document.getElementById("m2").style.display="none";
                document.getElementById("incorrect1").style.display="none";
                campos.nombre = true;
            }

            else if (nombreV.length > 25 ) {
                document.getElementById("m1").style.display="none";
                document.getElementById("m2").style.display="block";
                document.getElementById("b1").style.display="none";
                document.getElementById("incorrect1").style.display="block";
                campos.nombre = false;
            }
        break;
        case "apellido":
            const apellido = document.getElementById('apellido');
            const apellidoV = apellido.value.trim();
            if(apellidoV.length == 0 ){
                document.getElementById("m3").style.display="block";
                document.getElementById("b2").style.display="none";
                document.getElementById("incorrect2").style.display="block";
                document.getElementById("m4").style.display="none";
                campos.apellido = false;
            }
            else if (apellidoV.length > 0 && apellidoV.length < 25 ) {
                document.getElementById("m3").style.display="none";
                document.getElementById("b2").style.display="block";
                document.getElementById("m4").style.display="none";
                document.getElementById("incorrect2").style.display="none";
                campos.apellido = true;
            }

            else if (apellidoV.length > 25 ) {
                document.getElementById("m3").style.display="none";
                document.getElementById("m4").style.display="block";
                document.getElementById("b2").style.display="none";
                document.getElementById("incorrect2").style.display="block";
                campos.apellido = false;
            }
        break;
        case "direccion":
            const direccion = document.getElementById('direccion');
            const direccionV = direccion.value.trim();
            if(expresiones.direccion.test(direccionV) ){
                document.getElementById("m5").style.display="none";
                document.getElementById("b3").style.display="block";
                document.getElementById("incorrect3").style.display="none";
            }
            
            else{
                document.getElementById("m5").style.display="block";
                document.getElementById("b3").style.display="none";
                document.getElementById("incorrect3").style.display="block";
            }
            
        break;
        case "CCUsuario":
            const CCusuario = document.getElementById('CCUsuario');
            const ccusuarioV = CCusuario.value.trim();
            if(expresiones.ccusuario.test(ccusuarioV) ){
                document.getElementById("m6").style.display="none";
                document.getElementById("m7").style.display="none";
                document.getElementById("b4").style.display="block";
                document.getElementById("incorrect4").style.display="none";
                campos.ccusuario = true;
            }

            else if(ccusuarioV.length == 0 ){
                document.getElementById("m6").style.display="none";
                document.getElementById("m7").style.display="block";
                document.getElementById("b4").style.display="none";
                document.getElementById("incorrect4").style.display="block";
                campos.ccusuario = false;
            } 
            
            else{
                document.getElementById("m7").style.display="none";
                document.getElementById("m6").style.display="block";
                document.getElementById("b4").style.display="none";
                document.getElementById("incorrect4").style.display="block";
                campos.ccusuario = false;
            }
        break;
 
        case "password2":
            validarCampo(expresiones.correo, e.target, 'password2');
        break;
        case "email":
            validarCampo(expresiones.correo, e.target, 'email');
        break;
        
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

 //Verificación al enviar el formulario

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if(campos.nombre && campos.apellido && campos.ccusuario){
       alert ("Se enviará el formulario") 
    }

    else{
        alert("Por favor complete correctamente los campos")
    }
});


// Ocultar los íconos y los mensajes al presionar el botón "borrar"
form.addEventListener("reset", (e) => {
    icons.forEach((i) => {
        if(expresiones.icon.test(i.id))
        i.style.display="none";
    });

    message.forEach((h6) => {
        if(expresiones.message.test(h6.id))
        h6.style.display="none"
    });
});


function mostrar(){
  document.getElementById("senfermedades").style.display="block"  ;
};

function mostrar1(){
    document.getElementById("enfermedadesc").style.display="block"  ;
  };

function ocultar(){
    document.getElementById("enfermedadesc").style.display="none"  ;
    document.getElementById("senfermedades").style.display="none" ;
};

function ocultar1(){
    document.getElementById("enfermedadesc").style.display="none"  ;
};
  


    
      // Or with jQuery
    
      $(document).ready(function(){
        $('.datepicker').datepicker();
      });

