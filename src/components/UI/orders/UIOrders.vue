<script setup lang="ts">
import type { UIOrder } from '@/type/type'
import ShowProductButton from '../ui-buttons/show-product-button/ShowProductButton.vue'
import UIDeleteButton from '../ui-buttons/ui-delete-button/UIDeleteButton.vue'

const props = defineProps<UIOrder>()

const emit = defineEmits(['delete'])

const handleDelete = () => {
  emit('delete', props.id)
}
</script>

<template>
  <div class="order">
    <h3>{{ title }}</h3>
    <div class="order__product">
      <ShowProductButton />
      <div class="order__product-wrapper">
        <p>{{ products }}</p>
        <p>Продукта</p>
      </div>
    </div>

    <p>{{ date }}</p>
    <div class="order__prices">
      <p>{{ totalPriceUsd }} USD</p>
      <p>{{ totalPriceUah }} UAH</p>
    </div>

    <UIDeleteButton :orderId="id" @delete="handleDelete" />
  </div>
</template>

<style lang="scss">
@use 'UIOrders';
</style>
