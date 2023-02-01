<template>

  <div id="components">
    <h1>Vue Declarations 🐛</h1>
    <img src="./assets/logo.png" alt="IMG">
    <Card name="Variables"/>
  </div>

</template>

<script>
import Card from "./components/Card.vue";
export default {
  name: "App",
  components: {
    Card,

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
  margin: auto;
}
</style>