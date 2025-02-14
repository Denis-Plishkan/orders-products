<script setup lang="ts">
import type { UIProduct } from '@/type/type';

defineProps<UIProduct>();
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

    <p>{{ orderTitle }}</p>

    <div class="product__times">
      c {{ start }}
      по {{ end }}
    </div>

    <div class="product__prices">
      <p>{{ totalPriceUsd }} USD</p>
      <p>{{ totalPriceUah }} UAH</p>
    </div>
  </div>
</template>

<style lang="scss">
@use 'UIProduct';
</style>
