<template>
    <h1>{{ title }}</h1>

    <h2>{{ counter }}</h2>

    <button @click="incremento">Incrementar</button>
    <button @click="decremento" :disabled="counter == 0">Decrementar</button>

</template>

<script>
//Se importa el documento donde se encuentra la funcion que se quiere utilizar aqui
import useCounter from '@/Composanble/useCounter';

export default {
    name: 'SimpleCounterCompositionAPI',
    setup() {
        //Se genera una constante de un arreglo que contenga los elementos que se usaran y definir de donde se obtendran del archivo useCounter y como tiene una funcion exportada defoult no es necesario 
        //ingresar el nombre de esta solo con () es suficiente para decir que es una funcion.
        const { counter, incremento, decremento } = useCounter();

        //Se retornan para poder usar en el template
        return { counter, incremento, decremento }
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