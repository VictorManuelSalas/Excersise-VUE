<template>
  <div class="home">
    <IncrementDecrement :title="title_incrementDecrement"/>
    <hr>
    <RefVModel :title="title_refModel"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RefVModel from '@/components/RefVModel.vue';
import IncrementDecrement from '@/components/IncrementDecrement.vue';

export default {
  name: 'HomeView',
  components: {
   RefVModel,
   IncrementDecrement
  },
  setup(){
   const title_refModel = 'Componente #1 - Referencias y V-Model';
   const title_incrementDecrement = 'Componente #2 - Incremento y Decremento Simple';

    return{
      title_refModel,
      title_incrementDecrement,
    }
  }
}
</script>
