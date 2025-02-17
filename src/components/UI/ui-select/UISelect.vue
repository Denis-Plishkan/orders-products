<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits(['filter'])

const handleChange = (event: Event) => {
  const target = event.target
  if (target instanceof HTMLSelectElement) {
    emit('filter', target.value)
  }
}
</script>

<template>
  <div class="input-group mb-3">
    <label class="input-group-text" for="inputGroupSelect01">Type</label>
    <select class="form-select" id="inputGroupSelect01" @change="handleChange">
      <option value="all">All</option>
      <option value="phones">Phones</option>
      <option value="monitors">Monitors</option>
    </select>
  </div>
</template>

<style lang="scss">
@use 'UISelect';
</style>
