<template>
  <h1 class="text-2xl font-bold">Welcome to Vue3Stackter, {{ name }}</h1>
  <div class="mt-8">
    <input
            v-model="newName"
            type="text"
            class="p-2 border border-gray-300 rounded focus:ring-2"
        />
        <v-button
            :class="{ 'pointer-events-none opacity-40': !newName }"
            @click="saveName"
        >
            Save
        </v-button>
      </div>
      <ProductList title="Products" :items="products" />
</template>

<script setup>
import ProductList from '~/components/ProductList/index.vue'

import { useMeta } from 'vue-meta'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

useMeta({
    title: 'Homepage',
})

const router = useRouter()

const store = useStore()

// name
// const name = computed(() => store.state.user.name)
const name = computed(() => store.getters['user/nameUppercased'])
const newName = ref('')
function saveName() {
    if (newName.value === '') {
        return
    }
    store.dispatch('user/saveName', newName.value)
    newName.value = ''
    router.push(`/about/${name.value}`)
}

const products = ref([
{
"id": "532",
"name": "Slicker Jacket",
"description": "Wind and rain are no match for our organic bamboo slicker jacket for men and women. Triple stitched seams, zippered pockets, and a stay-tight hood are just a few features of our best-selling jacket.",
"price": "125",
"imageAlt": "slicker-jacket_lynda_29941",
"imageSrc": "https://hplussport.com/wp-content/uploads/2016/12/slicker-jacket_LYNDA_29941.jpg"
},
  {
    "id": "530",
"name": "Bamboo Thermal Ski Coat",
"description": "You'll be the most environmentally conscious skier on the slopes - and the most stylish - wearing our fitted bamboo thermal ski coat, made from organic bamboo with recycled plastic down filling.",
"price": "99",
"imageAlt": "ski-coat_lynda_29940",
"imageSrc": "https://hplussport.com/wp-content/uploads/2016/12/ski-coat_LYNDA_29940.jpg"
  }
])
</script>
