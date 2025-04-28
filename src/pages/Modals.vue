<script setup>
import { ref } from 'vue';

import Modal from '../components/Modal.vue';
import ImgModal from '../components/ImgModal.vue';

const modalActive = ref(false);
const modalActive2 = ref(false);
const modalActive3 = ref(false);

document.body.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modalActive.value = false;
  }
});
</script>
<template>
  <div class="button">
    <button class="button is-primary" @click="modalActive = true"> Modal Active</button>
    <button class="button is-link" @click="modalActive2 = true"> Modal 2 Active</button>
    <button class="button is-danger" @click="modalActive3 = true"> Modal 3 Active</button>
  </div>

  <ImgModal :active="modalActive" @close="modalActive = false" url="https://picsum.photos/seed/mikk/200/300?r=1">
  </ImgModal>
  <ImgModal :active="modalActive2" @close="modalActive2 = false" url="https://picsum.photos/seed/miko/200/300?r=2">
  </ImgModal>
  <Modal :active="modalActive3" @close="modalActive3 = false">
    <div class="notification is-success">
      <button @click="modalActive3 = false" class="delete"></button>
      Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
      dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
      nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
      diam, et dictum <a href="#">felis venenatis</a> efficitur.
    </div>
  </Modal>


</template>

<style></style>