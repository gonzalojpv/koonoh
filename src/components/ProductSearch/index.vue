<template>
  <form @submit.prevent="onSearch">
    <label
      for="search"
      class="sr-only"
    >Search projects</label>
    <div class="relative text-indigo-200 focus-within:text-gray-400">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon
          class="w-5 h-5"
          aria-hidden="true"
        />
      </div>
      <input
        id="search"
        v-model="form.query"
        name="search"
        class="block w-full py-2 pl-10 pr-3 form-control"
        :class="{ 'is-invalid': v$.query.$errors.length }"
        placeholder="Search products"
        type="search"
        @input="onClear"
      >
    </div>
  </form>
</template>

<script setup>
import useVuelidate from '@vuelidate/core'

import { SearchIcon } from '@heroicons/vue/outline'
import { required } from '@vuelidate/validators'
import { reactive, computed } from 'vue';

const emit = defineEmits(['search', 'clear'])

const form = reactive({
  query: null,
  bran: null
})

const rules = computed(() => {
  return {
    query: { required },
  }
})

const v$ = useVuelidate(rules, form)

const onSearch = () => {
  v$.value.$touch()

  if (!v$.value.$invalid) {
    emit('search', form)
  }
}

const onClear = (evt) => {
  if (!evt.target.value) {
    emit('clear', form)
  }
}
</script>
