<script setup lang="ts">
import type { UIOrder } from '@/type/type';
import ShowProductButton from '../ui-buttons/show-product-button/ShowProductButton.vue';
import UIDeleteButton from '../ui-buttons/ui-delete-button/UIDeleteButton.vue';

defineProps<UIOrder & { showProducts: boolean }>();
const emit = defineEmits(['delete', 'show']);

const handleDelete = () => {
  emit('delete');
}

const handleShow = () => {
  emit('show');
}
</script>

<template>
  <div class="order" :class="{ show: showProducts }">
    <h3 :class="{ hidden: showProducts }">{{ title }}</h3>
    <div class="order__product">
      <ShowProductButton :orderId="id" @click="handleShow"/>
      <div class="order__product-wrapper">
        <p>{{ products }}</p>
        <p>Продукта</p>
      </div>
    </div>

    <p>{{ date }}</p>
    <div class="order__prices" :class="{ hidden: showProducts }">
      <p>{{ totalPriceUsd }} USD</p>
      <p>{{ totalPriceUah }} UAH</p>
    </div>

    <UIDeleteButton :orderId="id" @click="handleDelete" :class="{ hidden: showProducts }" />
    
  </div>
</template>

<style lang="scss">
@use 'UIOrders';
</style>
