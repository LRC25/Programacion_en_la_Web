const form = document.getElementById('form');
const inputs = document.querySelectorAll("#form input");
const icons = document.querySelectorAll("#form i");
const message = document.querySelectorAll("#form h6");

//Se utilizan algunas expresiones regulares para verificar los campos
const expresiones = {
	nombre:/^[a-zA-Z0-9\_\-]{1,25}$/,
    apellido:/^[a-zA-Z0-9\_\-]{1,25}$/,
    direccion:/^(cra|cll|av|anv|trans)(\s)?([a-zA-Z]{0,15}|[0-9]{1,3})(\s)?[a-zA-Z]?(\s)?(Este|Norte|Occidente|Oeste|Sur)?(\s)?([a-zA-Z]{0,15}|[0-9]{1,3})?(\s)?(#(\s)?[0-9]{1,2}(\s)?[a-zA-Z]?(\s)?(Este|Norte|Occidente|Oeste|Sur)?(\s)?(-)?(\s)?(Este|Norte|Occidente|Oeste|Sur)?)?((\s)?[1-9][0-9]{0,3})*$/   ,
    usuario:/\w{10,20}/,
    contraseña:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*.#&])[A-Za-z\d@$!%*?&]{10,20}$/im,
    email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono:/^[0-9]{7,10}$/
}

 // Verificar que los campos estén correctos
const campos = {
	nombre: false,
	apellido: false,
	password: false,
	email: false,
	ccusuario: false,
}

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
				
			}
		break;
		case "password":
			;
		break;
        case "password2":
	function verificar_pass()
 {
    var c1 = document.getElementById('password').value
    var c2 = document.getElementById('password2').value

    if (c1 != c2){
        document.getElementById("m7").style.display="none";
	document.getElementById("m8").style.display="none";
	document.getElementById("b6").style.display="block";
	document.getElementById("incorrect6").style.display="none";
	campos.password = true;

    } else {
        document.getElementById("m7").style.display="none";
	document.getElementById("m8").style.display="block";
	document.getElementById("b6").style.display="none";
	document.getElementById("incorrect6").style.display="block";
	campos.passsword = false;
    }
}
		break;
        case "email":
				const direccion = document.getElementById('email');
            const emailV = email.value.trim();
			if(expresiones.email.test(emailV) ){
				document.getElementById("m9").style.display="none";
				document.getElementById("b7").style.display="block";
				document.getElementById("incorrect7").style.display="none";
			}
			
			else{
				document.getElementById("m9").style.display="block";
				document.getElementById("b7").style.display="none";
				document.getElementById("incorrect7").style.display="block";
			};
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


