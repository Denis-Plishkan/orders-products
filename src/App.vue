<script setup lang="ts">
import TheHeader from '@/components/Base/TheHeader.vue'
import NavigationSidebar from '@/components/UI/sidebar/NavigationSidebar.vue';
</script>

<template>
  <div class="app__container">
    <header>
      <TheHeader />
    </header>

    <div class="app__wrapper">
      <NavigationSidebar />

      <RouterView />
    </div>

  </div>
</template>

<style lang="scss">
@use '@/assets/style/variable' as *;

header {
  padding: 16px;
  background: $white-color;
}

.app {
  &__wrapper {
    display: flex;
    height: calc(100vh - 86px);
  }
}
</style>
