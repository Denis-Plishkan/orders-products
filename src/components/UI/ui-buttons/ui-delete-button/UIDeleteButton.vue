<script setup lang="ts">
defineProps<{ orderId: number }>()
</script>

<template>
  <button class="delete-btn" @click="$emit('delete', orderId)">
    <i class="bi bi-trash"></i>
  </button>
</template>


<style lang="scss">
@use 'UIDeleteButton';
</style>
