//Para llamar al elemento tipo input creo una funcion y lo guardo en una variable

function agregarTarea(){

    let nuevaTareaTexto= document.getElementById("nuevaTarea") .value;
    //Validamos que el valor no este vacio

    if(nuevaTareaTexto === ""){
        alert("Por favor , ingrese una tarea");
        return;
    }
    // Crear elemento en la lista (li)
    let nuevaTarea= document.createElement("li");

    nuevaTarea.textContent = nuevaTareaTexto + " ";                         //Asigna el valor al texto

    //Crear boton de Eliminar tarea

    let botonEliminar= document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function(){ nuevaTarea.remove()}

    //Agregar boton de eliminar al elemento de la lista 
    nuevaTarea.appendChild(botonEliminar);                                 //Con esto ya se asocia el elemento padre con hijo

    //Agregar el elemento/la tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //Limpiar el cuadro de texto del nombre de la tarea
    document.getElementById("nuevaTarea"). value = "";



}