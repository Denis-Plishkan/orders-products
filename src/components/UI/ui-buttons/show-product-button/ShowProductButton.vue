<script setup lang="ts">
defineProps<{ orderId: number }>()
</script>

<template>
  <button class="btn" @click="$emit('show', orderId)">
    <i class="bi bi-body-text"></i>
  </button>
</template>

<style lang="scss">
@use 'ShowProductButton';
</style>
