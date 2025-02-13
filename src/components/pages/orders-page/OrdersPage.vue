<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import UIOrders from '@/components/UI/orders/UIOrders.vue'
import type { Data, Order, Product } from '@/type/type.ts'

const store = useStore<Data>()

const products = computed<Product[]>(() => store.state.products)

const orders = ref<Order[]>([])

onMounted(() => {
  store.dispatch('fetchOrders')
  store.dispatch('fetchProducts')
})


watch(() => store.state.orders, (newOrders) => {
  orders.value = newOrders
}, { immediate: true })


const calculateTotalPrice = (products: Product[], currency: string) => {
  return products.reduce((sum, product) => {
    const price = product.price.find((p) => p.symbol === currency)?.value || 0
    return sum + price
  }, 0)
}
</script>

<template>
  <section class="orders-section">
    <h1>Приходы / {{ products.length }}</h1>

    <UIOrders
      v-for="order in orders"
      :key="order.id"
      :id="Number(order.id)"
      :title="order.title"
      :date="order.date"
      :products="Array.isArray(order.products) ? order.products.length : order.products"
      :totalPriceUsd="calculateTotalPrice(order.products, 'USD')"
      :totalPriceUah="calculateTotalPrice(order.products, 'UAH')"
    />
  </section>
</template>

<style lang="scss">
@use 'OrdersPage';
</style>
