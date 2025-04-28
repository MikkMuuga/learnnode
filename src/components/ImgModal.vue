<script setup>
defineProps(['active', 'url']);
import Modal from './Modal.vue';


</script>

<template>
    <Modal :active="active" @close="$emit('close')">
        <p class="image is-4by3">
            <img :src="url" alt="">
        </p>
    </Modal>
</template>