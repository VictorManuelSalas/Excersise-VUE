<template>
  <div class="home">
    <EmitEvents :title="title_Emite" @onFire="eventEmmitedFromChildren"/>
    <hr>
    <Suspense>
      <template #default>
        <SuspenseFetch :title="title_Suspense" />
      </template>
      <template #fallback>
        <img id="loader" src="../assets/loader.gif" alt="loader">
      </template>
    </Suspense>
    <hr>
    <PeticionJson :title="title_Peticiones" />
    <hr>
    <ToDoList :title="title_ToDoList" />
    <hr>
    <SimpleCounterCompositionAPI :title="title_SimpleCounterCompositionAPI" />
    <hr>
    <ReactCounter :title="title_ReactCount" />
    <hr>
    <IncrementDecrement :title="title_incrementDecrement" />
    <hr>
    <RefVModel :title="title_refModel" />


  </div>
</template>

<script>
// @ is an alias to /src
import RefVModel from '@/components/RefVModel.vue';
import IncrementDecrement from '@/components/IncrementDecrement.vue';
import ReactCounter from '@/components/ReactCounter.vue';
import SimpleCounterCompositionAPI from '@/components/SimpleCounterCompositionAPI.vue';
import ToDoList from '@/components/ToDoList.vue';
import PeticionJson from '@/components/PeticionJson.vue';
import SuspenseFetch from '@/components/SuspenseFetch.vue';
import EmitEvents from '@/components/EmitEvents.vue';

export default {
  name: 'HomeView',
  components: {
    RefVModel,
    IncrementDecrement,
    ReactCounter,
    SimpleCounterCompositionAPI,
    ToDoList,
    PeticionJson,
    SuspenseFetch,
    EmitEvents
  },
  setup() {
    const eventEmmitedFromChildren = (messange) =>{
      console.log("Imprimir el mensaje del hijo desde el padre: ",messange);
    }
    const title_refModel = 'Componente #1 - Referencias y V-Model';
    const title_incrementDecrement = 'Componente #2 - Incremento y Decremento Simple';
    const title_ReactCount = 'Componente #3 - ReactCount';
    const title_SimpleCounterCompositionAPI = 'Componente #4 - Importar codigo para reutilizarlo';
    const title_ToDoList = 'Componente #5 - To Do List Component';
    const title_Peticiones = 'Componente #6 - Peticiones Fetch Simples'
    const title_Suspense = 'Componente #7 - Peticiones Suspense Fetch'
    const title_Emite = 'Componente #8 - Pasar Props del componente hijo al padre'
    return {
      title_refModel, title_Peticiones, title_Emite,
      title_incrementDecrement, title_ReactCount, 
      title_SimpleCounterCompositionAPI, title_ToDoList, 
      title_Suspense, eventEmmitedFromChildren,
    }
  }
}
</script>
<style>
#loader {
  width: 5%;
}
</style>