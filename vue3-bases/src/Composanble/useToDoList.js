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
        data.toDo = null
    }

    const deleteToDo = (index) => {
        data.toDos.splice(index, 1)
    }
    return {...toRefs(data), addToDo, deleteToDo}
}