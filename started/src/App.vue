<template>

  <div id="components">
    <h1>Vue Declarations 🐛</h1>
    <img src="./assets/logo.png" alt="IMG">
    <Card name="Variables"/>
<!--<h1>{{ info }}</h1>-->
    
  </div>

</template>

<script>
import Card from "./components/Card.vue";
export default {
  name: "App",
  components: {
    Card,

  },
  mounted(){
  /*
    const axios = require('axios');
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response => (this.info = response))
  },
  data(){
    return{
      info: null,
    }
  }*/
  }
  
}

</script>

<style>
#components {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
h1{
  text-align: center;
  color: white;
}
img {
  width: 30%;
  margin: auto;
}
</style>