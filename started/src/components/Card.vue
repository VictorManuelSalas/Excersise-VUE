<template>
    <div id="card">
        <b>Soy un componente de la app con {{name}}</b>

        <p>Esta es una variable string ➡ {{ brand }}</p>
        <p>Esta es una variable numerica ➡ {{ numerico }}</p>
        <p>Esta es una variable array en el indice 1 ➡ {{ arreglo[3] }} || Array completo ➡ ['carro', 'perro',
            'escoba',
            'pc']</p>
        <p>Esta es una variable de objeto ➡ {{ objeto }} || Este es un elemento title del objeto ➡ {{
            objeto.title
        }}
        </p>
        <br>
        <div id="components">
            <Test />
            <Bucles name="Bucles" />
            <EventosIF />
            <PropsFuVue title="Componenete de Props" :passFunction="hola" :dataN="numeroParaProps"/>
        </div>

    </div>

</template>

<script>
import Test from "./Test.vue"
import Bucles from "./Bucles.vue";
import EventosIF from "./EventosIF.vue";
import PropsFuVue from "./PropsFu.vue";

export default {
    name: "Card-items",
    components: {
        Test,
        Bucles,
        EventosIF,
        PropsFuVue
    },
    data() {
        return {
            brand: 'Hola soy una variable',
            numerico: 123,
            arreglo: ['carro', 'perro', 'escoba', 'pc'],
            objeto: {
                title: 'Hola soy un objeto',
                text: 'Que tal 😎'
            },
            numeroParaProps: 2343,
        }
    },
    methods: {
        hola(){
            alert('Este alert es enviado desde el componente padre y se activa desde el compoenente hijo 💥...')
        }
    },
    props:{
        name:{
            type: String,
            default: 'Error'
        },
    },

}
</script>

<style>
#card {
    background-color: rgb(23, 211, 101);
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 1px 1px 10px rgb(0, 0, 0);
}

b {
    font-size: 1.5rem;
}
</style>