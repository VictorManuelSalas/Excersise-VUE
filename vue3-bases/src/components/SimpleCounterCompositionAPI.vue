<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
    name: 'SimpleCounterCompositionAPI',
    setup(){

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