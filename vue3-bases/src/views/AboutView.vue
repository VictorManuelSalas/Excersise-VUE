<template>
  <div class="about">

    <div v-if="data == false">
      <h1>Please come back to home</h1>
      <img :src="imagen" alt="Imagen">
    </div>
    <div v-else >
      <h1>{{ title }}</h1>
    </div>
  
  </div>
</template>


<script>
export default {
  name: 'About',
  setup() {
    const data = false;
    const title = 'About Page';
    const imagen = 'https://cetis001.edu.mx/assets/img/error.png';

    return { imagen, data, title }
  }
}
</script>

<style>
  img{
    filter: drop-shadow(8px 8px 4px rgb(211, 211, 211));
  }
</style>