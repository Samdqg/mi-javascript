(function () {
    
   var formulario = document.formulario_registro;
   console.log(formulario);
   var elementos = formulario.elements;
   console.log(elementos);

        //funciones
        
        var validarInputs = function(){
          for(var i = 0; i < elementos.length; i++){
            if(elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password"){
                if(elementos[i].value == 0){
                    console.log('El campo '+elementos[i].name + ' esta incompleto');
                    elementos[i].className= elementos[i].className + " error";
                    return false;
                }else{
                    elementos[i].className= elementos[i].className.replace(" error", "");
                    
                }
            }
          }
          
          // Comprobando que las contraseñas coincidan
	if (elementos.pass.value !== elementos.pass2.value) {
		elementos.pass.value = "";
		elementos.pass2.value = "";
		elementos.pass.className = elementos.pass.className + " error";
		elementos.pass2.className = elementos.pass2.className + " error";
        return false;
	} else {
		elementos.pass.className = elementos.pass.className.replace(" error", "");
		elementos.pass2.className = elementos.pass2.className.replace(" error", "");
	}

	return true;
            
        };
      var validarRadios = function(){
	var opciones = document.getElementsByName('sexo'),
		resultado = false;
  var tamaño=  opciones.length-1;
			for (var i = 0; i <= tamaño; i++) {
				if (opciones[i].checked) {
                    opciones[i].parentNode.className =opciones[i].parentNode.className.replace(" error", "");
                    resultado=true;
                        break;
				}else{
                    if(i == tamaño){
                        	opciones[i].parentNode.className = opciones[i].parentNode.className + " error";
				        console.log('El campo radio esta incompleto');
                    }
                }
			}
            
            return resultado;
};


var validarCheckbox = function(){
	var opciones = document.getElementsByName('terminos'),
		resultado = false;

	for (var i = 0; i < elementos.length; i++) {
		if(elementos[i].type == "checkbox"){
			for (var o = 0; o < opciones.length; o++) {
				if (opciones[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
				console.log('El campo checkbox esta incompleto');
				return false;
			} else {
				// Eliminamos la clase Error del checkbox
				elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
				return true;
			}
		}
	}
};

var seleccionarRadio= function(){
     this.parentNode.className = this.parentNode.className.replace(" error", "");
}

       var enviar = function(e){
          if(!validarInputs()){
                console.log('falto validar los inputs');
                e.preventDefault();
          }  else if(!validarRadios()){
              console.log('falto validar los radios');
                e.preventDefault();
        
          }  else if(!validarCheckbox()){
              console.log('falto validar los checkbox');
                e.preventDefault();
        
          } else{
                console.log('Envia los datos correctamente');
                //Comentarlinea cuando tengamos el formulario listo
          }
             e.preventDefault();
          
       };
       
       // funciones blur and focus
       
       var focusInput = function(){
         this.parentElement.children[1].className= "label active";
         this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error","");
       };
       var blurInput = function(){
            if (this.value <= 0) {
                this.parentElement.children[1].className = "label";
                this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
            }
        };

       
        //eventos
        
        formulario.addEventListener("submit",enviar);
      console.log(elementos.length);
        for (var i = 0; i< elementos.length; i++ ){
                  
            
            if(elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password"){
                elementos[i].addEventListener("focus",focusInput);
                elementos[i].addEventListener("blur",blurInput);
            }else if(elementos[i].type == "radio"){
                  elementos[i].addEventListener("click",seleccionarRadio);
            }
        }
        
   
}());