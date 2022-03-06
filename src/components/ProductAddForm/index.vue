<template>
  <section
    aria-labelledby="payment-and-shipping-heading"
    class="py-16 lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:pb-24 lg:row-start-1 lg:col-start-1"
  >
    <form @submit.prevent="onSubmit">
      <div class="max-w-2xl px-4 mx-auto lg:max-w-none lg:px-0">
        <div>
          <!-- Title -->
          <h3
            id="contact-info-heading"
            class="text-lg font-medium text-gray-900"
          >
            {{ title }}
          </h3>
          <!-- /.Title -->
          <!-- Product Name -->
          <div class="mt-6">
            <label
              for="email-address"
              class="block text-sm font-medium text-gray-700"
            >Product name *</label>
            <div class="mt-1">
              <input 
                id="product-name"
                v-model="form.name" 
                type="email" 
                name="product-name"
                :class="{ 'is-invalid': v$.name.$errors.length }"
                autocomplete="email" 
                class="block w-full form-control"
              >
              <p
                v-for="error of v$.name.$errors"
                v-show="v$.email.$error"
                :key="error.$uid"
                class="block mt-1 text-sm text-left text-red-500"
              >
                {{ error.$message }}
              </p>
            </div>
          </div>
          <div class="mt-4">
            <label
              for="product-description"
              class="block text-sm font-medium text-gray-700"
            >Description</label>
            <div class="mt-1">
              <textarea
                id="product-description"
                v-model="form.description"
                rows="4"
                name="product-description"
                class="block w-full form-control"
              />
            </div>
          </div>
        </div>

        <div class="mt-4">
          <div class="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
            <div class="col-span-2 sm:col-span-3">
              <label
                for="product-cat"
                class="block text-sm font-medium text-gray-700"
              >Categories</label>
              <div class="mt-1">
                <input
                  id="product-cat"
                  type="text"
                  name="product-cat"
                  class="block w-full form-control"
                >
              </div>
            </div>

            <div>
              <label
                for="product-price"
                class="block text-sm font-medium text-gray-700"
              >Price</label>
              <div class="mt-1">
                <input
                  id="product-price"
                  v-model="form.price"
                  type="text"
                  name="product-price"
                  class="block w-full form-control"
                >
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <label class="text-base font-medium text-gray-900">Status</label>
          <fieldset class="mt-4">
            <legend class="sr-only">
              Product Status
            </legend>
            <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
              <div
                v-for="status in statusOptions"
                :key="status.id"
                class="flex items-center"
              >
                <input
                  :id="status.id"
                  v-model="form.status"
                  name="product-status"
                  type="radio"
                  :value="status.id"
                  class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                >
                <label
                  :for="status.id"
                  class="block ml-3 text-sm font-medium text-gray-700"
                >
                  {{ status.title }}
                </label>
              </div>
            </div>
          </fieldset>
        </div>

        <div class="flex justify-end pt-6 mt-10 border-t border-gray-200">
          <button
            type="submit"
            :disabled="v$.$invalid"
            class="btn-primary"
          >
            {{ submitText }}
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import useVuelidate from '@vuelidate/core'

import { computed, reactive, ref } from 'vue'
import { required } from '@vuelidate/validators'

defineProps({
  title: [String],
  submitText: {
    type: [String],
    default: 'Add'
  }
})


const statusOptions = ref([
  { id: 'enable', title: 'Enable' },
  { id: 'disabled', title: 'Disabled' },
  { id: 'draft', title: 'Draft' },
])
const form = reactive({
  name: null,
  description: null,
  price: null,
  status: 'draft'
})

const rules = computed(() => {
  return {
    name: { required },
    price: { required },
    status: { required }
  }
})

const v$ = useVuelidate(rules, form)
</script>
