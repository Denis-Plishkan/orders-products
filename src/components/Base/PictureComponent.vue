<script setup lang="ts">
defineProps(['srcset', 'src', 'alt'])
</script>

<template>
  <picture>
    <source :srcset="srcset" type="image/webp" />
    <img :src="src" :alt="alt ? alt : 'img'" />
  </picture>
</template>
