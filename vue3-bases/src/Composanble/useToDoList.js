/*Vue 3 también introduce una función que se comporta como ref(), pero para objetos. Recuerde que generalmente solo debe se puede utilizar en valores 
primitivos: números, cadenas, booleanos, BigInts y símbolos.reactive()ref()

La función agrega reactividad a las propiedades de un objeto. Llamar a un objeto, y obtiene un objeto proxy que puede utilizar con . Por ejemplo, debido 
a que es reactivo en el siguiente ejemplo, imprimirá el nombre del personaje cada vez que cambia. */
import { reactive, toRefs } from "vue"

export default function () {
    const data = reactive({
        toDo: null,
        toDos: []
    })

    const addToDo = () => {

        //Esto es para que no se mande solo un caracter por error, se debe de agregar una letra u oracion que este mas larga que solo 1 caracter
        if (data.toDo.length > 1) {
            data.toDos.push(data.toDo)
        }
        //Sino se cumple el if entonces se pondra null el toDo
        data.toDo = null
    }

    const deleteToDo = (index) => {
        //El splice hace que en una posicion se elimine un elemento, el index es la ubicacion y el 1 es la cantidad de elementos a borrar
        data.toDos.splice(index, 1)
    }

    //toRefs Convierte un objeto reactivo en un objeto simple donde cada propiedad del objeto resultante es una ref erencia que apunta a la propiedad correspondiente del objeto original.
    return {...toRefs(data), addToDo, deleteToDo}
}