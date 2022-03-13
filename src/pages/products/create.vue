<template>
  <div class="overflow-hidden bg-white rounded-lg shadow">
    <div class="px-4 py-5 sm:p-6">
      <ProductAddForm
        title="Create Product"
        @submit="onSubmit"
      />
    </div>
  </div>
</template>
<script setup>
import ProductAddForm from '~/components/ProductAddForm/index.vue'

const onSubmit = (form) => {
  console.log('onSubmit', form)
}
</script>
