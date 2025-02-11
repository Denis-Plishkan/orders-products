<script setup lang="ts">
import Logo from '@/components/Base/Logo.vue'
import { CurrentDate } from '@/components'
</script>

<template>
  <div class="header__wrapper">
    <Logo />
    <CurrentDate />
  </div>
</template>

<style lang="scss">
.header {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

</style>
