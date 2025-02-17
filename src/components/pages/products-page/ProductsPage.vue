<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
import UIProduct from '@/components/UI/ui-product/UIProduct.vue'
import UIPopup from '@/components/UI/ui-popup/UIPopup.vue'
import UISelect from '@/components/UI/ui-select/UISelect.vue'
import type { Data, Product } from '@/type/type'

const store = useStore<Data>()
const allProducts = computed(() => store.state.products)
const isPopupVisible = ref(false)
const selectedProducts = ref<Product[]>([])
const selectedType = ref('all')

onMounted(() => {
  store.dispatch('fetchOrders')
  store.dispatch('fetchProducts')
})

const filteredProducts = computed(() => {
  if (selectedType.value === 'all') return allProducts.value
  return allProducts.value.filter(
    (product: Product) => product.type.toLowerCase() === selectedType.value,
  )
})

const calculateTotalPrice = (prices: Product['price'] | undefined, currency: string) => {
  if (!Array.isArray(prices)) return 0
  return prices.find((p) => p.symbol === currency)?.value || 0
}

const openDeletePopup = (product: Product) => {
  selectedProducts.value = [product]
  isPopupVisible.value = true
}

const deleteProduct = async () => {
  const productId = selectedProducts.value[0]?.id
  if (productId) {
    await store.dispatch('deleteProduct', productId)
    isPopupVisible.value = false
    selectedProducts.value = []
  }
}
</script>

<template>
  <section class="products-section">
    <h1>Продукты / {{ filteredProducts.length }}</h1>

    <UISelect @filter="(value) => (selectedType = value)" />

    <h2 v-if="filteredProducts.length === 0" class="products-section__text">Cписок пуст!</h2>

    <UIProduct
      v-for="product in filteredProducts"
      :key="Number(product.id)"
      :id="Number(product.id)"
      :title="product.title"
      :serial-number="product.serialNumber"
      :start="product.guarantee.start"
      :end="product.guarantee.end"
      :type="product.type"
      :totalPriceUsd="calculateTotalPrice(product.price, 'USD')"
      :totalPriceUah="calculateTotalPrice(product.price, 'UAH')"
      :order-title="'product.order'"
      :img-src="product.photo"
      @delete="openDeletePopup(product)"
    />

    <UIPopup
      v-if="isPopupVisible"
      :products="selectedProducts"
      title="Вы уверены, что хотите удалить этот продукт?"
      :isOpen="isPopupVisible"
      @cancel="isPopupVisible = false"
      @delete="deleteProduct"
    />
  </section>
</template>

<style lang="scss">
@use 'ProductsPage';
</style>
