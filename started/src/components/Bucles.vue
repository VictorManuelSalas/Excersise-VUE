<template>
    <div id="content">
        <b>Componente de {{name}} 👾</b>
        <br>
        <p>Para ello se usa la siguiente estructura ➡ v-for="data, index in info" :key="index" donde para iterar se usa
            el
            for, el cual se decalara un identificador, este puede ser cualquien nombre. Despues con el in se define a
            cual arreglo se va a iterar
            y se menciona en siguiente. Ya pedira un identificador el cual es el index y se pone en el :key para
            declarar lo como llave.</p>
        <ul>
            El arreglo que se itero fue ➡ ['banana', 'manzana', 'pera', 'durazno', 'fresa'] <br>
            <li v-for="data, index in info" :key="index">
                El valor con el indice {{ index }} es de {{ data }}
            </li>
        </ul>


    </div>
    <!--     <form action="" class="review-form" @submit.prevent="onSubmit">
            <h3>Leave a review</h3>
            <label for="name">Name:</label>
            <input type="text" v-model="name" id="name" required>
            <input class="btn-sub" type="submit" value="Submit">
        </form>
    

    <ul>
        <li v-for="(data, index) in info" :key="index"> Name: {{data.name}}</li>
    </ul>-->
</template>

<script>

export default {
    name: "Bucle-T",
    data() {
        return {
            dato: '',
            info: ['banana', 'manzana', 'pera', 'durazno', 'fresa', 'melon']
        }
    },
    methods: {
        /*onSubmit() {
            let productReview = {
                name: this.name,
            }
            this.info.push(productReview);
        }*/
    },
    props:{
        name:{
            type: String,
            default: 'Error',
        }
    }
}
</script>

<style>

</style>