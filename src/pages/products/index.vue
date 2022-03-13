<template>
  <div class="overflow-hidden bg-white rounded-lg shadow">
    <div class="px-4 py-5 sm:p-6">
      <router-link
        :to="{ name: 'products-create' }"
        class="mb-4 btn-primary"
      >
        Add product
      </router-link>
      <ProductsList />
    </div>
  </div>
</template>

<script setup>
import ProductsList from '~/components/ProductsList/index.vue'
</script>
