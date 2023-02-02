<template>
    <h1>{{ title }}</h1>

    <h3>{{ counterComputer }}</h3>
    <button @click="incremento">Incrementar</button>
    <button @click="decremento" :disabled="counter == 0">Decrementar</button>
</template>

<script>
import { ref, computed } from 'vue';
export default {
    name: 'IncrementAndDecrement',
    setup() {
        const counter = ref(0);

        const counterComputer = computed(()=>{
            return 'El valor del contador es de ' + counter.value
        });
        const incremento = () => {
            counter.value++
        };

        const decremento = () => {
            if (counter.value > 0) {
                counter.value--
            }
        };

        return {
            counter, decremento, incremento,counterComputer
        };
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