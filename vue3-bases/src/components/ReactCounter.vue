<template>
    <h1>{{ title }}</h1>
    <h3>{{ counter }}</h3>
    <h4>{{ counterComputed }}</h4>
    <button @click="increment">Incrementar</button>
    <button @click="decrement" :disabled="counter == 0">Decrementar</button>
</template>

<script>
import { reactive, computed, toRefs } from 'vue';
export default {
    name: 'ReactCounter',
    setup() {

        //Con reactive nos permite declarar toda la informacion necesaria en ves de tener la sintaxis como el componente de IncrementAndDecrement
        const data = reactive({
            counter: 0,
            counterComputed: computed(() => {
                return 'El valor del counter es ' + data.counter;
            })
        })


        //Funciones
        const increment = () => {
            data.counter++
        }
        const decrement = () => {
            data.counter--
        }

        //Para desglosar la variable data se usa el ...toRef() ya que sin este no se podria desglosar y entonces 
        //La variable data mandara un objeto.
        return { ...toRefs(data), increment, decrement }
    },
    props:{
        title:{
            type: String,
            default: 'Titulo'
        }
    }
}
</script>

<style>

</style>