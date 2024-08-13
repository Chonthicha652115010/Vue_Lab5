<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from './stores/message'
import { storeToRefs } from 'pinia'
const store = useMessageStore()
const { message } = storeToRefs(store)
import { ref } from 'vue'
const pageSize = ref(2)
</script>

<template>
  <div class="text-center font-sans text-gray-700 antialiased">
    <header>
      <div
        id="flashMessage"
        class="animate-fade bg-yellow-300 text-yellow-900 py-2 px-4 rounded mb-4"
        v-if="message"
      >
        <h4>{{ message }}</h4>
      </div>
      <div class="wrapper">
        <nav class="py-6 flex space-x-4 justify-center">
          <RouterLink
            class="font-bold text-gray-700 hover:text-green-500"
            exact-active-class="text-green-500"
            :to="{ name: 'event-list-view', query: { pageSize: pageSize } }"
          >
            Event
          </RouterLink>
          <RouterLink
            class="font-bold text-gray-700 hover:text-green-500"
            exact-active-class="text-green-500"
            :to="{ name: 'about' }"
          >
            About
          </RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>
