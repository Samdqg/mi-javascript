#Seleccionar elementos del dom

Una vez construido automáticamente el árbol completo de nodos DOM, ya es posible utilizar las funciones DOM para acceder de forma directa a cualquier nodo del árbol. Como acceder a un nodo del árbol es equivalente a acceder a "un trozo" de la página, una vez construido el árbol, ya es posible manipular de forma sencilla la página: acceder al valor de un elemento, establecer el valor de un elemento, mover un elemento de la página, crear y añadir nuevos elementos, etc

DOM proporciona dos métodos alternativos para acceder a un nodo específico: acceso a través de sus nodos padre y acceso directo.

Las funciones que proporciona DOM para acceder a un nodo a través de sus nodos padre consisten en acceder al nodo raíz de la página y después a sus nodos hijos y a los nodos hijos de esos hijos y así sucesivamente hasta el último nodo de la rama terminada por el nodo buscado. Sin embargo, cuando se quiere acceder a un nodo específico, es mucho más rápido acceder directamente a ese nodo y no llegar hasta él descendiendo a través de todos sus nodos padre.

## **Selectores directos**##

**getElementById()**: Como su nombre indica, sirve para seleccionar un elemento por su ID.Como el atributo id debe ser único para cada elemento de una misma página, la función devuelve únicamente el nodo deseado.

Ejemplo:

    var cabecera = document.getElementById("cabecera");
    <div id="cabecera">
    <a href="/" id="logo">...</a>
    </div>
 
 
 **getElementsByTagName()**: Éste elemento selecciona todos los elementos que tengan una determinada etiqueta (a, p, div, h1,span, ..).
    
    var parrafos = document.getElementsByTagName("p");
 
 El valor que devuelve la función es un array con todos los nodos que cumplen la condición de que su etiqueta coincide con el parámetro proporcionado. El valor devuelto es un array de nodos DOM, no un array de cadenas de texto o un array de objetos normales. Por lo tanto, se debe procesar cada valor del array de la forma que se muestra en las siguientes secciones.
 
 De este modo, se puede obtener el primer párrafo de la página de la siguiente manera:
    
    var primerParrafo = parrafos[0];

De la misma forma, se podrían recorrer todos los párrafos de la página con el siguiente código:

    for(var i=0; i<parrafos.length; i++) {
    var parrafo = parrafos[i];
    }

La función getElementsByTagName() se puede aplicar de forma recursiva sobre cada uno de los nodos devueltos por la función. En el siguiente ejemplo, se obtienen todos los enlaces del primer párrafo de la página:

    var parrafos = document.getElementsByTagName("p");
    var primerParrafo = parrafos[0];
    var enlaces = primerParrafo.getElementsByTagName("a");

**getElementsByName()**: es similar a getElementsByTagName(), pero en este caso se buscan los elementos cuyo atributo name sea igual al parámetro proporcionado. En el siguiente ejemplo, se obtiene directamente el único párrafo con el nombre indicado:

    var parrafoEspecial = document.getElementsByName("especial");
    <p name="especial">...</p>
    <p name="prueba">...</p>
    
Normalmente el atributo name es único para los elementos HTML que lo definen, por lo que es un método muy práctico para acceder directamente al nodo deseado. En el caso de los elementos HTML radiobutton, el atributo name es común a todos los radiobutton que están relacionados, por lo que la función devuelve una colección de elementos.

**getElementsByClassName()**: El uso es similar a getElementsByTagName, sólo que en vez de devolver elementos según una etiqueta, los devuelve según la clase del elemento. Ejemplo:

    var miclase= document.getElementsByClassName('miclase');<p class="cualquier-clase">...</p>
    <p name="miclase">...</p>


##** Seleccionar elementos con querySelector de JavaScript **##

De forma nativa nuestro navegador soporta querySelector() y querySelectorAll(), que nos devuelve elementos de nuestra web especificando selectores CSS.
En la versión simple (querySelector) tras especificar un selector nos devuelve el primer elemento resultante, mientras que la función terminada con "All" nos devuelve un Array con los elementos resultantes. 

**querySelector():** En este caso esta función actúa de forma muy similar a un getElementById(), ya que podemos seleccionar tener varios elementos con una ID pero solo selecciona el primero. 
Al ser usado como instancia de document hacemos una búsqueda sobre cualquier elemento de la página, pero también puede ser usado como instancia de un elemento del DOM, por ejemplo document.body o cualquier elemento seleccionado con getElementById() o getElementsByTagName().

Ejemplo:
    
    <div id="prueba">
    <span id="id5" class="clase" title="Azul"></span>
    <span id="id4" class="clase" title="Verde"></span>
    <span id="id3" class="clase" title="Naranja"></span>
    <span id="id2" class="clase" title="Lila"></span>
    <span id="id1" class="clase" title="Rojo"></span>
    </div>
    
    document.getElementById('id1').title // Rojo
    document.querySelector('#prueba .clase').title // Azu
    document.querySelector('#prueba #id3.clase').title // Naranj
    document.querySelector('#prueba .clase + .clase').title // Verde
    document.querySelector('#prueba .clase[title^=L]').title // Lila
    
**querySelectorAll()**:Esta función es similar a un getElementsByTagName, devuelve un conjunto de elementos
Tiene la ventaja, el querySelectorAll() que nos permite conseguir todos los elementos de una o varias consultas, simplemente separando con comas, como hacemos en CSS.

Ejemplos:
    
    <div id="prueba">
    <span id="id5" class="clase" title="Azul"></span>
    <span id="id4" class="clase" title="Verde"></span>
    <span id="id4" class="clase" title="Verde"></span>
    <span id="id2" class="clase" title="Lila"></span>
    <span id="id1" class="clase" title="Rojo"></span>
    </div>

    document.querySelectorAll('#prueba .clase') //Devuelve los 5 elementos
    document.querySelectorAll('span') // Devueve todoslos span d euna pagina
    document.querySelectorAll('span, img') //Devuelve Todos los <span> y <img> de una página
    document.querySelectorAll('div > span')// Devuelve todos los <span> hijos de <div>
    
    
    
    


















