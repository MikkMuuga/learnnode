<script setup>
    defineProps(['items']);
    let active = ref(0);
</script>

<template>
    <div class="tabs is-centered">
    <ul>
      <li v-for="(item, key) in items" :class="{'is-active': key==active }"@click=active-key>
        <a> {{ item }}</a></li>
    </ul>
  </div>
</template>

<style></style>
224