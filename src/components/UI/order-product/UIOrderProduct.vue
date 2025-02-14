<script setup lang="ts">
import UIDeleteButton from '@/components/UI/ui-buttons/ui-delete-button/UIDeleteButton.vue'
import type { Product, Order } from '@/type/type.ts'

defineProps<{
  order: Order
  showProducts: Product[]
  showSelectedOrderId: number | null
}>()

defineEmits(['delete'])
</script>

<template>
  <div v-if="showSelectedOrderId === order.id" class="orders__wrapper-products products">
    <h4>{{ order.title }}</h4>
    <button>+ добавить продукт</button>

    <p v-if="!showProducts.length" class="orders__text">Список пуст!</p>
    <div v-for="product in showProducts" :key="product.id" class="products__item">
      <div class="product__item-wrapper">
        <img :src="product.photo" alt="photo" />
        <div class="products__item-info">
          <p class="products__item-info-title">{{ product.title }}</p>
          <p class="products__item-info-number">{{ product.serialNumber }}</p>
        </div>
      </div>

      <UIDeleteButton :orderId="order.id" @delete="$emit('delete', product)" />
    </div>
  </div>
</template>

<style lang="scss">
@use 'UIOrderProduct';
</style>
