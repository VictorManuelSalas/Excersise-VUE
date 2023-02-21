<template>
  <div id="background">
    <img id="logo" src="./assets/logo.png" alt="Logo">
    <FilterbyStatus />
    <FilterByName />
    <ListCharacters />
    
  </div>
</template>

<script>
import ListCharacters from './components/ListCharacters.vue';
import FilterbyStatus from './components/FilterbyStatus.vue';
import FilterByName from './components/FilterByName.vue';

export default {
  
  name: 'App',
  components: {
      ListCharacters,
      FilterbyStatus,
      FilterByName,
  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  background-image: url('./assets/space.jpg');
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 2rem 4rem;

}
#background{
  background-color: rgba(255, 255, 255, 0.429);
  border-radius: 1rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1{
  margin-bottom: 3rem;
  text-align: center;
}
.container{
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}
img{
  width: 100%;
}
#logo{
  width: 25%;
  margin: 1rem 0rem;
}
</style>
