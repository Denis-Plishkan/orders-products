<script setup lang="ts">
import TheHeader from '@/components/Base/TheHeader.vue'
import Sidebar from '@/components/UI/sidebar/Sidebar.vue'
</script>

<template>
  <div class="app__container">
    <header>
      <TheHeader />
    </header>

    <div class="app__wrapper">
      <Sidebar />

      <RouterView />
    </div>

  </div>
</template>

<style lang="scss">
header {
  padding: 16px;
}

.app {
  &__wrapper {
    display: flex;
    height: calc(100vh - 86px);
  }
}
</style>
