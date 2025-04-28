<script setup>

import {ref} from 'vue';
let joke = ref('');

fetch('https://api.chucknorris.io/jokes/random').then(response => {
    return response.json();
}).then(data => {
    console.log(data);
    joke.value = data.value;
}).catch(error => {
    console.error('Error fetching joke:', error);
});

</script>

<template>

{{ joke }}
</template>
