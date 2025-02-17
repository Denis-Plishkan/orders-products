<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref(formatTime())
const activeConnections = ref<number>(0)

const socket = new WebSocket('ws://localhost:3001')

socket.onmessage = (event) => {
  try {
    const data = JSON.parse(event.data)
    if ('activeConnections' in data) {
      activeConnections.value = data.activeConnections
    }
  } catch (error) {
    console.error(error)
  }
}

function formatTime(): string {
  const now = new Date()
  return now
    .toLocaleString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
    .replace(',', '')
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
    <p class="current-time__connection" v-if="activeConnections !== 0">
      <i class="bi bi-person"></i>: <span>{{ activeConnections }}</span>
    </p>
    <p class="current-time__text">Today</p>

    <div class="current-time__wrapper">
      <span>{{ currentTime.split(' ')[0] }} {{ currentTime.split(' ')[1] }},</span>

      <div class="current-time__wrapper-hours">
        <i class="bi bi-clock ms-2 me-1"></i>
        <span>{{ currentTime.split(' ')[3] }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use 'CurrentDate';
</style>
