<script setup>

import {ref} from 'vue';
import axios from 'axios';

let joke = ref('');

//axios.get('https://api.chucknorris.io/jokes/random').then(response => {
//    joke.value = response.data.value;
//}).catch(error => {
//    console.error('Error fetching joke:', error);
//});
try {
let response = await axios.get('https://api.chucknorris.io/jokes/random');
joke.value = response.data.value;
} catch (error) {
    console.error('Error fetching joke:', error);
}
</script>

<template>

{{ joke }}
</template>
