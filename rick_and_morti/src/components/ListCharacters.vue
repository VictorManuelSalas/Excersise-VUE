<template>
  <section>
    <div class="characters">
        <div class="characters__item" v-for="character in characters" :key="character.id">
          <CardCharacterVue :character="character"/>
        </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import CardCharacterVue from './CardCharacter.vue';

export default {
    components:{
        CardCharacterVue,
    },
    setup(){
        const store = useStore();
        const characters = computed(()=>{
            return store.state.charactersFilter
        })

        onMounted(()=>{
            store.dispatch('getCharacters')
        })
        return{
            characters,
        }
    }
}
</script>

<style>
.characters{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin: 3rem 0;
}
</style>