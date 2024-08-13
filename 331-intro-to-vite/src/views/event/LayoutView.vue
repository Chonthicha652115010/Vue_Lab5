<script setup lang="ts">
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'

const store = useEventStore()
const { event } = storeToRefs(store)
</script>
<template>
  <div v-if="event">
    <h1 class="text-3xl font-bold mb-6">{{ event.title }}</h1>
    <nav>
      <RouterLink class="text-blue-500 hover:underline" :to="{ name: 'event-detail-view' }"
        >Details</RouterLink
      >
      <RouterLink class="text-blue-500 hover:underline" :to="{ name: 'event-register-view' }"
        >Register</RouterLink
      >
      <RouterLink class="text-blue-500 hover:underline" :to="{ name: 'event-edit-view' }"
        >Edit</RouterLink
      >
    </nav>
    <RouterView :event="event" />
  </div>
</template>
