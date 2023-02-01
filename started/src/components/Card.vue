<template>
    <b>Soy un componente de la app con Variables</b>
    <p>Esta es una variable string --> {{ brand }}</p>
    <p>Esta es una variable numerica --> {{ numerico }}</p>
    <p>Esta es una variable array en el indice 1 --> {{ arreglo[3] }} || Array completo --> ['carro', 'perro', 'escoba',
        'pc']</p>
    <p>Esta es una variable de objeto --> {{ objeto }} || Este es un elemento title del objeto --> {{ objeto.title }}
    </p>
    <br>
    <Test />

    
</template>

<script>
import Test from "./Test.vue"
export default {
    name: "Card-items",
    components: {
        Test
    },
    data() {
        return {
            brand: 'Hola soy una variable',
            numerico: 123,
            arreglo: ['carro', 'perro', 'escoba', 'pc'],
            objeto: {
                title: 'Hola soy un objeto',
                text: 'Que tal 😎'
            }
        }
    },
    methods: {
    }

}
</script>

<style>

</style>