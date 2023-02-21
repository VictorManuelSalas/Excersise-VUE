<template>
  <div>
    <h1>Rick and Morty</h1>
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
  background-color: #24282F;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 2rem 4rem;

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
</style>
