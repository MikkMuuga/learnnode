<script setup>
import { ref } from 'vue';

let modalActive = ref(false);

document.body.addEventListener('keydown', event => {
  console.log(event);
  if(event.key === 'Escape'){
    modalActive.value = false;
  }
});
</script>

<template>
  <div class="container">
    <section class="section">
      <button class="button is-primary" @click="modalActive=true" > Modal active</button>
    </section>
  </div>
  
  <div class="modal" :class="{ 'is-active': modalActive }">
    <div class="modal-background" @click="modalActive=false"></div>
    <div class="modal-content">
      <p class="image is-4by3">
        <img src="https://bulma.io/assets/images/placeholders/1289x960.png" alt="">
      </p>
    </div>
    <button class="modal-close is-large" @click="modalActive=false" arial-label="close"></button>
  </div>


</template>

<style></style>