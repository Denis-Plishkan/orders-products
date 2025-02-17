<script setup lang="ts">
import type { IButton } from '@/type/type'

defineProps<IButton>()
</script>

<template>
  <button :class="['button', { red, white }]">
    {{ text }}
    <div v-if="red">
      <i class="bi bi-trash"></i>
    </div>
  </button>
</template>

<style lang="scss">
@use 'UIButton';
</style>
