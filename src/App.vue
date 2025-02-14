<script setup lang="ts">
import TheHeader from '@/components/Base/TheHeader.vue'
import NavigationSidebar from '@/components/UI/sidebar/NavigationSidebar.vue'
</script>

<template>
  <div class="app__container">
    <header>
      <TheHeader />
    </header>

    <div class="app__wrapper">
      <NavigationSidebar />

      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
