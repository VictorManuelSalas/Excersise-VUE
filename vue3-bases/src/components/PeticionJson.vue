<template>
    <h1>{{ title }}</h1>

    <ul v-if="users" id="tasks">
        <li v-for="user in users" :key="user.id">
            🤭{{ user.name }} - 📨{{ user.email }}
        </li>
    </ul>
</template>


<script>
//Ref toma un valor interno y devuelve un objeto de referencia reactivo y mutable es decir que esta constante a cualquier cambio
import { ref, onMounted } from 'vue';
//onMounted registra una devolución de llamada para que se llame después de montar el componente.
export default {
    name: 'PeticionesHHTP',
    setup() {
        const users = ref(null) //El valor de users estara en referencia
        //onMounted es 
        onMounted(async () => { //Funcion asincrona esperando una respuesta
            const response = await fetch("https://jsonplaceholder.typicode.com/users"); //haciendo una peticion a un url
            users.value = await response.json(); //Asignarle el valor de usuarios igual a la peticion en formato json
        })

        return { users }
    },
    props: {
        title: {
            type: String,
            default: 'Title'
        }
    }
}
</script>

<style>

</style>