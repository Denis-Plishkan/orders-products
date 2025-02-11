<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="logo" @click="goToHome">Logo</div>
</template>

<style lang="scss">
@use '@/assets/style/variable' as *;

.logo {
  font-size: 24px;
  color: $green-color;
  font-weight: 700;
}
</style>
