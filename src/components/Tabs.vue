<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router'

const router = useRouter();
const route = useRoute();

console.log(router.getRoutes(), route)

</script>

<template>
    <div class="tabs is-centered">
    <ul>
      <li v-for="(item, key) in $router.getRoutes()" :class="{'is-active': item.path === $route.path}">
        <RouterLink :href="item.push">{{ item }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style></style>
