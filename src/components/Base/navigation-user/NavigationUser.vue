<script setup lang="ts">
import PictureComponent from '@/components/Base/PictureComponent.vue'

const userPhoto = {
  default: new URL('/src/assets/img/photo.png', import.meta.url).href,
  webp: new URL('/src/assets/img/photo.webp', import.meta.url).href,
}
</script>

<template>
  <div class="navigation-user__wrapper">
    <PictureComponent :src="userPhoto.default" :srcset="userPhoto.webp" />
    <router-link to="/settings">
      <div class="navigation-user__wrapper-settings">
        <i class="bi bi-gear-fill"></i>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss">
@use 'NavigationUser';
</style>
