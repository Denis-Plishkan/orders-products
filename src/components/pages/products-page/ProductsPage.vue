<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import UIProduct from '@/components/UI/ui-product/UIProduct.vue'
import type { Data, Product } from '@/type/type'

const store = useStore<Data>()
const productsCount = computed(() => store.state.products)

onMounted(() => {
  store.dispatch('fetchOrders')
  store.dispatch('fetchProducts')
})

const calculateTotalPrice = (prices: Product['price'] | undefined, currency: string) => {
  if (!Array.isArray(prices)) return 0;
  return prices.find((p) => p.symbol === currency)?.value || 0;
}

</script>

<template>
  <section class="products-section">
    <h1>Продукты / {{ productsCount.length }}</h1>

    <UIProduct
      v-for="product in productsCount"
      :key="Number(product.id)"
      :id="Number(product.id)"
      :title="product.title"
      :serial-number="product.serialNumber"
      :start="product.guarantee.start"
      :end="product.guarantee.end"
      :type="product.type"
      :totalPriceUsd="calculateTotalPrice(product.price, 'USD')"
      :totalPriceUah="calculateTotalPrice(product.price, 'UAH')"
      :order-title="'order'"
      :img-src="product.photo"
    />
  </section>
</template>

<style lang="scss">
@use 'ProductsPage';
</style>
