<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex';
import UIOrders from '@/components/UI/orders/UIOrders.vue'
import UIPopup from '@/components/UI/ui-popup/UIPopup.vue'
import UIOrderProduct from '@/components/UI/order-product/UIOrderProduct.vue'
import type { Data, Order, Product } from '@/type/type.ts'

const store = useStore<Data>()
const ordersCount = computed(() => store.state.orders)
const orders = ref<Order[]>([])

const isPopupVisible = ref(false)
const selectedProducts = ref<Product[]>([])
const selectedOrderId = ref<number | null>(null)
const showProducts = ref<Product[]>([])
const showSelectedOrderId = ref<number | null>(null)
const deleteType = ref<'order' | 'product' | null>(null)

onMounted(() => {
  store.dispatch('fetchOrders')
  store.dispatch('fetchProducts')
})

watch(
  () => store.state.orders,
  (newOrders) => {
    orders.value = newOrders
  },
  { immediate: true },
)

const handleDeleteOrder = () => {
  if (selectedOrderId.value !== null) {
    store.dispatch('deleteOrder', selectedOrderId.value)
    isPopupVisible.value = false
  }
}

const openDeletePopup = (order: Order) => {
  if (order.products.length > 0) {
    selectedProducts.value = order.products
    selectedOrderId.value = order.id
    deleteType.value = 'order'
    isPopupVisible.value = true
  }
}

const handleShowProducts = (order: Order) => {
  if (order.products.length > 0) {
    showSelectedOrderId.value = order.id
    showProducts.value = order.products
  }
}

const calculateTotalPrice = (products: Product[], currency: string) => {
  return products.reduce((sum, product) => {
    const price = product.price.find((p) => p.symbol === currency)?.value || 0
    return sum + price
  }, 0)
}

const handleDeleteProduct = (product: Product) => {
  selectedProducts.value = [product]
  selectedOrderId.value = null
  deleteType.value = 'product'
  isPopupVisible.value = true
}

const deleteProduct = () => {
  const productId = selectedProducts.value[0]?.id
  if (productId !== undefined) {
    console.log('Удаляем продукт с ID:', productId)
    store
      .dispatch('deleteProduct', productId)
      .then(() => {
        showProducts.value = showProducts.value.filter((product) => product.id !== productId)
        isPopupVisible.value = false
      })
      .catch((error) => console.error('Ошибка при удалении продукта:', error))
  }
}

const isShowProducts = computed(() => showSelectedOrderId.value !== null)
</script>

<template>
  <section class="orders-section">
    <h1>Приходы / {{ ordersCount.length }}</h1>

    <template v-for="order in orders" :key="order.id">
      <div class="orders__wrapper">
        <UIOrders
          :id="Number(order.id)"
          :title="order.title"
          :date="order.date"
          :products="Array.isArray(order.products) ? order.products.length : order.products"
          :totalPriceUsd="calculateTotalPrice(order.products, 'USD')"
          :totalPriceUah="calculateTotalPrice(order.products, 'UAH')"
          :showProducts="isShowProducts"
          @delete="openDeletePopup(order)"
          @show="handleShowProducts(order)"
        />

        <UIOrderProduct
          v-if="showSelectedOrderId === order.id"
          :order="order"
          :showProducts="showProducts"
          :showSelectedOrderId="showSelectedOrderId"
          @delete="handleDeleteProduct"
        />
      </div>
    </template>

    <UIPopup
      v-if="isPopupVisible && deleteType === 'order'"
      :products="selectedProducts"
      title="Вы уверены, что хотите удалить этот приход?"
      :isOpen="isPopupVisible"
      @cancel="isPopupVisible = false"
      @delete="handleDeleteOrder"
    />

    <UIPopup
      v-if="isPopupVisible && deleteType === 'product'"
      :products="selectedProducts"
      title="Вы уверены, что хотите удалить этот продукт?"
      :isOpen="isPopupVisible"
      @cancel="isPopupVisible = false"
      @delete="deleteProduct"
    />
  </section>
</template>

<style lang="scss">
@use 'OrdersPage';
</style>
