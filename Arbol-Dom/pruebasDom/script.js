

window.onload = function(){

        //CREAR E INSERTAR NODOS


        //crear nodo
        let nuevo = document.createElement("p");

        //meterle clase
        nuevo.setAttribute("class", "parra");

        //creamos nodo texto
        let texto = document.createTextNode("Soy el nuevo párrafo");

        //engancho el nodo texto a su padre
        nuevo.appendChild(texto);

 
        let padre = document.querySelector("section");

        //padre.appendChild(nuevo); //lo engancha al final del todo.

        //hermano
        let bro = document.querySelectorAll("div")[2];
        padre.insertBefore(nuevo, bro);


        //sacar el padre => .parentNode
        //borrar nodo => padre.removeChild(hijo)
        //sacar hijos => padre.children
        


    
    

        
}
