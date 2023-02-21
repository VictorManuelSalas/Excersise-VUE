<template>
    <section>
        <div class="characters">
            <div class="characters__item" v-for="character in characters" :key="character.id">
                <CardCharacterVue :character="character" />
            </div>
        </div>
        <ul id="pages">
            <li>{{ pageBefore }}</li>
            <li>{{ count }}</li>
            <li>{{ pageAfter }}</li>
        </ul>
        <div class="btns">
            <button @click="Backpages">Prevent</button>
            <button @click="Nextpages">Next</button>
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

        const count = ref(2);
        const pageBefore = ref(1);
        const pageAfter = ref(3);
        const store = useStore();
        const characters = computed(() => {
            return store.state.charactersFilter
        })

        onMounted(() => {
            store.dispatch('getCharacters')
        })
        const Nextpages = (() => {
            count.value++;
            pageBefore.value++;
            pageAfter.value++;
            store.dispatch('NextPage', count.value)
        })
        const Backpages = (() => {
            count.value--;
            pageBefore.value--;
            pageAfter.value--;
            if (count.value > 0) {
                store.dispatch('NextPage', count.value)
            } else {
                count.value = 1
                pageBefore.value = 0;
            pageAfter.value = 2;
            }

        })

        return {
            characters, Backpages, Nextpages, count, pageAfter, pageBefore,
        }
    }
}
</script>

<style lang="scss">
section {
    display: flex;
    flex-direction: column;
    justify-content: center;

    #pages {
        display: flex;
        justify-content: center;
        gap: 2rem;
        li{
            list-style: none;
            font-weight: bolder;
            border-radius: 10px;
            border: solid white 1px;
            padding: 0.5rem 1rem ;
            cursor: none;
        }
        li:nth-child(2){
            background-color: rgb(0, 0, 0);
            color: rgb(255, 255, 255);
            transform: scale(1.05);
            border: none;
        }
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