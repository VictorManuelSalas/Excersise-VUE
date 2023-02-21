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
import { ref } from 'vue';
//onMounted registra una devolución de llamada para que se llame después de montar el componente.
export default {
    name: 'PeticionesSuspense',
    async setup() {
        const users = ref(null)

        const fetchData = async () => {
            return new Promise(async(resolve)=>{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                setTimeout(()=>{
                    resolve(response.json())
                }, 5000)
            })
        }
        users.value = await fetchData();
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