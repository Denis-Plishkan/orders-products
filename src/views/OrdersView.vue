<script setup lang="ts">
fetch('http://localhost:5000/orders')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка:', error));
</script>

<template>
  <main>
    <h1>Orders</h1>
  </main>
</template>
