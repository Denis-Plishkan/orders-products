<script setup lang="ts">
import navLinks from '@/data/NavData.ts'
import {NavigationUser} from "@/components";

</script>

<template>
  <nav>
    <NavigationUser/>
    <ul class="navigation-menu">
      <li class="navigation-menu__li" v-for="link in navLinks" :key="link.id">
        <router-link
          class="navigation-menu__link"
          :to="link.href"
          active-class="navigation-menu__link_active"
        >
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@use 'NavigationMenu';
</style>
