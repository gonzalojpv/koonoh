<template>
  <ProductSearch
    class="mb-10"
    @search="onSearch"
  />
  <ProductsGrid
    title="Products"
    :items="searchedProducts"
  />
</template>

<script setup>
import ProductSearch from '~/components/ProductSearch/index.vue'
import ProductsGrid from '~/components/ProductsGrid/index.vue'

import { useMeta } from 'vue-meta'
import { onMounted, ref, computed } from 'vue'
import { useActions, useGetters } from 'vuex-use'

useMeta({
    title: 'Homepage',
})

const { fetchAllProducts } = useActions('product')
const { getAllProducts } = useGetters('product')

const searchQuery = ref('')

const onSearch = (form) => {
  searchQuery.value = form.query
}

const searchedProducts = computed(() => {
  return getAllProducts.value.filter((prize) => {
    return (
    prize.name
      .toLowerCase()
      .indexOf(searchQuery.value.toLowerCase()) != -1
    )
  })
})

onMounted(() => {
  fetchAllProducts({ name: null, brand: null })
})
</script>
