<script setup>
import axios from 'axios';
import { onMounted ,ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';
import SimplePagination from '../components/SimplePagination.vue';
import Pagination from '../components/Pagination.vue';

const characters = ref([]);
const info = ref([]);
const currentPage = ref(1);
const searchValue = ref('');
const erro = ref('');
const searchTimeout = null;

await getCharacters('https://rickandmortyapi.com/api/character');


async function getCharacters(url) {
    try {
    let response = await axios.get('https://rickandmortyapi.com/api/character', {
        params: {
            page: currentPage.value,
            name: searchValue.value
        }
    });
    console.log(response.data);
    characters.value.push (...response.data.results);
    info.value = response.data.info;
    } catch (err) {
        console.error(err);
        erro.value = 'No result found';
        characters.value = [];
        info.value = null;

    }

} 

async function next() {
    currentPage.value++;
    await getCharacters(info.value.next);

}

async function prev() {
    currentPage.value--;
    await getCharacters(info.value.prev);
}

async function page(page) {
    currentPage.value = page;
    await getCharacters(`https://rickandmortyapi.com/api/character?page=` + page);
}

async function search(){
    clearTimeout(searchTimeout);
    searchTimeout =setTimeout(async () => {
        error.value='';
    currentPage.value = 1;
    characters.value = [];
    await getCharacters();
    }, 1000);
}

onMounted(() => {
    document.body.addEventListener('scroll', () => {
        if (window.scrollY + window.innerHeight === document.body.ClientHeight - 300) {
                next();
        }
        });
    });

</script>
<template>
    <div class="field has-addons">
        <div class="control is-expanded">
            <input @input="search" v-model="searchValue" class="input" type="text" placeholder="Find character">
        </div>
        <div class="control">
            <button @click="search" class="button is-info">
                Search
            </button>
        </div>
    </div>

    <div class="column is-multiline">
        <div v-for="character in characters" class="column is-one-quarter">
            <CharacterCard :character="character"></CharacterCard>
        </div>
    </div>
    <h1 v-if="error" class="is-size-1"> {{ error }}</h1>

</template>
