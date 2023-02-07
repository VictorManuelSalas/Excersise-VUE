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
export default {
    name: 'PeticionesHHTP',
    setup() {
        const users = ref(null)
        onMounted(async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            users.value = await response.json();
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