<script setup>
import axios from 'axios';
import { ref } from 'vue';

let messages = ref([]);
let input = ref('');

let res = await axios.get('https://localhost:3000');
messages.value = res.data;

const eventSource = new EventSource('https://localhost:3000/sse');

eventSorce.addEventListener('newmessage', (event) => {
    console.log(event);
    let data = JSON.parse(event.data);
    messages.value.push(...data);
});

async function send() {
    await axios.post('https://localhost:3000', {
        message: input.value
    });
    console.log(res);
    input.value = '';
}
</script>

<template>
    <div class="field has-addons">
        <div class="control is-expanded">
            <input class="input" type="text" v-model="input" @keypress.enter="send">
        </div>
        <div class="control">
            <button class="button is-info" @click="send">
                Send
            </button>
        </div>
    </div>
    <div v-for="message in messages" class="notification is-primary">
        {{ message.message }}
    </div>
</template>