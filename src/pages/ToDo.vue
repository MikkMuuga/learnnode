<script setup>

import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';

let message = ref('');
let i = 1;
let items = ref([
  { id: i++, name: 'kana', isDone: true },
  { id: i++, name: 'viin', isDone: false },
  { id: i++, name: 'lehm', isDone: false },
  { id: i++, name: 'sool', isDone: true },
]);

function addItem() {
  if (message.value.trim() !== '') {
    items.value.push({ id: i++, name: message.value.trim(), isDone: false });
  }
  message.value = '';
}

let doneItems = computed(() => items.value.filter(item => item.isDone));
let ToDoItems = computed(() => items.value.filter(item => !item.isDone));

</script>

<template>
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" v-model="message" @keypress.enter="addItem">
      </div>
      <div class="control">
        <button class="button is-info" @click="addItem">
          Add item
        </button>
      </div>
    </div>  
    <div class="content">
      <ItemList :items="items" title="All Items"></ItemList>
      <ItemList :items="doneitems" title="Done Items"></ItemList>
      <ItemList :items="ToDoitems" title="ToDo Items"></ItemList>
    </div>
</template>

<style></style>