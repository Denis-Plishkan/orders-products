<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref(formatTime())

function formatTime() {
  const now = new Date()
  const day = now.getDate()
  const month = now.toLocaleString('en-US', { month: 'short' })
  const year = now.getFullYear()
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')

  return `${day} ${month} ${year}, ${hours}:${minutes}`
}

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    currentTime.value = formatTime()
  }, 60000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="current-time">
    <p class="current-time__text">
      Today
    </p>

    <div class="current-time__wrapper">
      <span>{{ currentTime.split(',')[0] }},</span>

      <div class="current-time__wrapper-hours">
        <i class="bi bi-clock ms-2 me-1"></i>
        <span>{{ currentTime.split(',')[1] }}</span>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
@use 'CurrentDate';
</style>
