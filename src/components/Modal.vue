<script setup>
    defineProps(['active', 'html']);

    const emit = defineEmits(['close']);

    document.body.addEventListener('keydown', event => {
  if(event.key === 'Escape'){
    emit('close');
  }
});

</script>
<template>
    <div class="modal" :class="{ 'is-active': active }">
        <div class="modal-background" @click="$emit('close')" ></div>
        <div class="modal-content">
            <slot></slot>
        </div>
        <button class="modal-close is-large" @click="$emit('close')" arial-label="close"></button>
    </div>
</template>