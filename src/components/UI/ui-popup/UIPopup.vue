<script setup lang="ts">
import type { Product } from '@/type/type'
import UIButton from '../ui-buttons/ui-button/UIButton.vue'
import UICloseButton from '../ui-buttons/ui-close-button/UICloseButton.vue'

defineProps<{ products: Product[]; title: string; isOpen: boolean }>()
const emit = defineEmits(['delete', 'cancel'])
</script>

<template>
  <div class="popup" :class="{ open: isOpen }">
    <div class="popup__wrapper">
      <UICloseButton @click="emit('cancel')" />
      <h4>{{ title }}</h4>
      <div v-for="product in products" :key="product.serialNumber" class="popup__item">
        <img :src="product.photo" alt="photo" />
        <div class="popup__item-info">
          <p class="popup__item-info-title">{{ product.title }}</p>
          <p class="popup__item-info-number">{{ product.serialNumber }}</p>
        </div>
      </div>
      <div class="popup__buttons">
        <UIButton @click="emit('cancel')" :text="'отменить'" :white="true" />
        <UIButton @click="emit('delete')" :text="'удалить'" :red="true" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use 'UIPopup';
</style>
