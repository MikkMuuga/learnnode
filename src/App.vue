<script setup>
import Tabs from './components/Tabs.vue';
let titles = [
  { title: 'Pictures', id: 1 },
  { title: 'Music', id: 2 },
  { title: 'Videos', id: 3 },
  { title: 'Documents', id: 4 },
];

</script>

<template>
  <Tabs :items="titles"></Tabs>

</template>

<style></style>