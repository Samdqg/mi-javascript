(function(){
    //variables
    var lista = document.getElementById("lista"),
        tareaInput= document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");
    
    //funciones
    var agregarTarea = function(){
        var tarea = tareaInput.value,
            nuevaTarea= document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);
            
            if(tarea===""){
                tareaInput.setAttribute("placeholder","Agrega una tarea valida");
                tareaInput.className= "error";
                return false;
            }
            //agregamos el contenido al enlace
            enlace.appendChild(contenido);
            //le agregamos un atributo del tipo href
            enlace.setAttribute("href","#");
            
            // agregamos el enlace ala nueva tarea
            nuevaTarea.appendChild(enlace);
            // le agrego el evento
            nuevaTarea.addEventListener("click",eliminarTarea);
            //agregamos la nueva tarea a la lista
            lista.appendChild(nuevaTarea);
            
            tareaInput.value="";

    };
    var comprobarInput= function(){
        tareaInput.className="";
        tareaInput.setAttribute("placeholder","Agrega tu tarea");

    };
    var eliminarTarea = function(){
        this.parentNode.removeChild(this);
    };
    
    //Eventos
    
    //Agregar Tarea
    btnNuevaTarea.addEventListener("click",agregarTarea);
    
    //Comprobar input
    
    tareaInput.addEventListener("click",comprobarInput);
    
    //Borrando elementos de la lista
    for(var i=0; i<=lista.children.length -1;i++){
        lista.children[i].addEventListener("click",eliminarTarea);
    }
}());