<template>
    <b>Soy un componente dentro del componente Card😊 que tiene eventos (clic, etc)  °</b>
    <div id="btn">
        <button v-on:click="Click()">Al dar click aumenta: {{ contador }}</button>
        <button v-on:dblclick="DbClick()">Al darle doble clic: {{ activacion }}</button>

        <button v-on:mouseenter="EnterMouse()">Aumenta a ingresar el mouse: {{ pordos }}</button>
        <button v-on:mouseleave="ExitMouse()">Al sacar el mouse sale: {{ adios }}</button>
        <button v-on:keypress="KeyPress()">Al presionar cualquier tecla: {{ tecla }} <input type="text"></button>

    </div>

</template>

<script>
export default {
    name: "Test-Item",
    data() {
        return {
            contador: 1,
            pordos: 1,
            activacion: false,
            adios: 'Hola 😋',
            tecla: 1,
        }
    },
    methods: {
        Click() {
            this.contador++;
        },
        DbClick() {
            this.activacion = true;
            if (this.activacion) {
                alert('Se dio doble clic');
            }
        },
        EnterMouse() {
            this.pordos = this.pordos * 2;
        },
        ExitMouse() {
            this.adios = 'Adios 🙄';
        },
        KeyPress() {
            this.tecla++;
        }
    }
}
</script>

<style>
#btn {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
button{
    width: fit-content;
    height: fit-content;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1rem;
    padding: 0.5rem;
    border: none;
    color: rgb(255, 255, 255);
    background-color: cornflowerblue;
    border-radius: 1rem;
   }
   input{
    border: none;
    border-radius: 1rem;
   }
</style>