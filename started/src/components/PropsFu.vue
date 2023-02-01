<template>
    <div id="content">
        <b>{{ title }} <i>⬅ Elemento recibido mediante un props</i> </b>
        <p>Para enviar elementos del componente padre hacia el hijo se usan los props, estos se deben de declarar en el
            componente que recibira y
            en el componente que se enviaran se deben de enviar mediante la etiqueta del componente hijo.
        </p>
        <P>Se debe de mandar mediante el mismo nombre que se define y el tipo de dato en el componente hijo. En la
            siguiente imagen se muestra como se
            envian valores desde el componente padre al hijo, aqui se envia un string con identificador 'title' ⬇</P>

        <img src="../assets/definicion.png" alt="Definir">

        <p>En el componente hijo en la parte de export default, se añade la seccion de porps, dentro de este se iran
            agregando los elementos que el componente padre manda al hijo.
            Ahi se declara el identificador y a este se le declara de que tipo sera y un valor que mostrara en caso de
            que no se reciba nada.
        </p>
        <img src="../assets/props.png" alt="props">
        <hr>
        <p>
            Para pasar variables definidas desde el padre es practicamente lo mismo solo que en esta ocacion se le agrega : al inicio del identificador en la etiqueta del componente hijo.
            De esta forma se pueden envar asta funciones:
        </p>
        <br>
        <button id="btn-func" @click="passFunction">Click</button>
    </div>
</template>

<script>

export default {
    name: 'Prop-Pass',
    data() {
        return {

        }
    },
    methods: {
    },
    props: {
        passFunction: Function,
        title: {
            type: String,
            default: 'Error'
        },
        numeroParaProps: {
            type: Number,
            default: 12,
        }
    }
}
</script>

<style>
#btn-func {
    width: 10rem;
}

i {
    font-size: 1rem;
}

img {
    border-radius: 1rem;
}
</style>