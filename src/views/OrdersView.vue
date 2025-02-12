<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import type { Data, Order } from '@/type/type.ts'

const store = useStore<Data>()
const orders = computed<Order[]>(() => store.state.orders)

onMounted(() => {
  store.dispatch('fetchOrders')
})
</script>

<template>
  <main>
    <h1>Orders</h1>

    <ul>
      <li v-for="order in orders" 
          :key="order.id">{{ order.id }} - {{ order.title }}
      </li>
    </ul>
  </main>
</template>
