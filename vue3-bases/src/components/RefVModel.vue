<template>
    <h1>{{ title }}</h1>
    <p>{{ msg }}</p>
    <br>
    <label for="txt">Ingresa txt para que se muestre arriba ⬆</label> <br>
    <!--El v-model permite enlazar dos elementos, para ello se necesita el atributo ref-->
    <input type="text" id="txt" v-model="msg" />
</template>

<script>
import { ref } from "vue" //Se importa ref para el uso en msg
export default {
    name: 'RefVModel-1',
    setup() {
        const msg = ref('') //Se usa ref para que asi se pueda vincular los cambios del v-model

        return {
            msg,
        }
    },
    props: {
        title: {
            type: String,
            default: 'Titulo'
        }
    }
}
</script>

<style>

</style>