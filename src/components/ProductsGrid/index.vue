<template>
  <div class="overflow-hidden bg-white rounded-lg shadow divide-y divide-gray-200">
    <div class="px-4 py-5 sm:px-6">
      <!-- Content goes here -->
      {{ title }}
      <!-- We use less vertical padding on card headers on desktop than on body sections -->
    </div>
    <div class="px-4 py-5 sm:p-6">
      <!-- Content goes here -->
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in items" :key="product.id" class="relative group">
        <ProductItem :product="product"/>
      </div>

      </div>
          </div>
    <div class="px-4 py-4 bg-gray-50 sm:px-6">
      <!-- Content goes here -->
      Footer
      <!-- We use less vertical padding on card footers at all sizes than on headers or body sections -->
    </div>
  </div>
</template>

<script setup>
import ProductItem from '~/components/ProductItem/index.vue'

defineProps({
  title: {
    type: String,
    default: 'Products'
  },
  items: {
    type: Array,
    default: () => [],
    required: true
  }
})
</script>
