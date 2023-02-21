<template>
    <section>
        <div class="characters">
            <div class="characters__item" v-for="character in characters" :key="character.id">
                <CardCharacterVue :character="character" />
            </div>
        </div>
        <b>Page: {{ count }}</b>
        <div class="btns">
            <button @click="Backpages">◀ Prevent</button>
            <button @click="Nextpages"> Next ▶</button>
        </div>
    </section>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

import CardCharacterVue from './CardCharacter.vue';

export default {
    components: {
        CardCharacterVue,
    },
    setup() {

        const count = ref(1);

        const store = useStore();
        const characters = computed(() => {
            return store.state.charactersFilter
        })

        onMounted(() => {
            store.dispatch('getCharacters')
        })
        const Nextpages = (() => {
            const page = count.value++;
            store.dispatch('NextPage', page)
        })
        const Backpages = (() => {
            const page = count.value--;
            store.dispatch('NextPage', page)
        })

        return {
            characters, Backpages, Nextpages, count,
        }
    }
}
</script>

<style lang="scss">
section {
    display: flex;
    flex-direction: column;
    justify-content: center;

    b {
        text-align: center;

    }

    .btns {
        display: flex;
        justify-content: center;
        margin: 1rem 0;
        gap: 1rem;

        button {
            cursor: pointer;
            font-size: 1rem;
            padding: 1rem 2rem;
            border-radius: 1rem;
            border: none;
            text-align: center;
            box-shadow: -1px 0px 5px 2px rgb(0, 0, 0);
            -webkit-box-shadow: -1px 0px 5px 2px rgba(0, 0, 0);
            -moz-box-shadow: -1px 0px 5px 2px rgba(0, 0, 0);
        }
    }
}

.characters {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin: 3rem 0;
}
</style>