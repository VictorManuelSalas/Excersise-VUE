<template>
    <h1>{{ title }}</h1>
    <label for="Dtamessage">Mensaje:</label>
    <div class="task">

        <input type="text" id="Dtamessage" v-model="message" >
        <button  @click="notify">Notificar al componente padre</button>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: "EmitEvent",
    props: {
        title: {
            type: String,
            default: "Title"
        }
    },
    emits: ["onFire"],
    setup(props, { emit }) {
        const message = ref("");
        const notify = () => {
            emit("onFire", message.value)
            alert("Se envio el mensaje ✔")
        }

        return { message, notify }
    }

}
</script>

<style></style>