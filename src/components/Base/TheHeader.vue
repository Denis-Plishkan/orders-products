<script setup lang="ts">
import Logo from '@/components/Base/Logo.vue'
import { CurrentDate, UIInput } from '@/components'
</script>

<template>
  <div class="header__wrapper">
    <div class="header__wrapper-logo-input">
      <Logo />
      <UIInput />
    </div>

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

  &__wrapper-logo-input {
    display: flex;
    align-items: center;
    gap: 200px;
  }
}
</style>
