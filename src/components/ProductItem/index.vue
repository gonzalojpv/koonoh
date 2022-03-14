<template>
  <div class="w-full overflow-hidden bg-gray-200 min-h-80 aspect-w-1 aspect-h-1 rounded-md group-hover:opacity-75 lg:h-80 lg:aspect-none">
    <img
      :src="product.img_src? product.img_src : 'https://via.placeholder.com/300/09f/fff.png'"
      :alt="product.name"
      class="object-cover object-center w-full h-full lg:w-full lg:h-full"
    >
    <span class="absolute top-3 left-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
      ${{ $filters.formatMoney(product.price, 2) }}
    </span>
  </div>
  <div class="flex justify-between mt-4">
    <div>
      <h3 class="text-sm font-semibold text-gray-700">
        <a :href="product.href">
          {{ product.name }}
        </a>
      </h3>
      <p class="mt-1 text-sm text-gray-500">
        {{ product.bran }} - {{ product.description }}
      </p>
    </div>
    <p class="text-sm font-medium text-gray-900">
      #{{ product.code }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
