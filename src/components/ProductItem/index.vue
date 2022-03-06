<template>
  <div class="w-full overflow-hidden bg-gray-200 min-h-80 aspect-w-1 aspect-h-1 rounded-md group-hover:opacity-75 lg:h-80 lg:aspect-none">
    <img
      :src="product.imageSrc"
      :alt="product.imageAlt"
      class="object-cover object-center w-full h-full lg:w-full lg:h-full"
    >
  </div>
  <div class="flex justify-between mt-4">
    <div>
      <h3 class="text-sm text-gray-700">
        <a :href="product.href">
          <span
            aria-hidden="true"
            class="absolute inset-0"
          />
          {{ product.name }}
        </a>
      </h3>
      <p class="mt-1 text-sm text-gray-500">
        {{ product.color }}
      </p>
    </div>
    <p class="text-sm font-medium text-gray-900">
      {{ product.price }}
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
