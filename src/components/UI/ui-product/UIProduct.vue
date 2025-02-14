<script setup lang="ts">
import type { UIProduct } from '@/type/type';
import UIDeleteButton from '../ui-buttons/ui-delete-button/UIDeleteButton.vue';

defineProps<UIProduct>();

const emit = defineEmits(['delete']);

const handleDelete = () => {
  emit('delete');
}
</script>

<template>
  <div class="product">
    <img :src="imgSrc" alt="Product Image" class="product__img">

    <div class="product__info">
      <p>{{ title }}</p>
      <p>{{ serialNumber }}</p>
    </div>

    <p class="product__type">
      {{ type }}
    </p>

    <p>Order {{ orderTitle }}</p>

    <div class="product__times">
      <p>c:  <span>{{ start }}</span></p>
      <p>по:  <span>{{ end }}</span></p>
    </div>

    <div class="product__prices">
      <p>{{ totalPriceUsd }} USD</p>
      <p>{{ totalPriceUah }} UAH</p>
    </div>

    <UIDeleteButton :orderId="id" @click="handleDelete"/>
  </div>
</template>

<style lang="scss">
@use 'UIProduct';
</style>
