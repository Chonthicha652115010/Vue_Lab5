<script setup lang="ts">
import { ref } from 'vue'
// defineProps<{
//   msg: string
// }>()
import { type Event } from '@/types'
defineProps<{
  event: Event
}>()
</script>

<template>
  <RouterLink :to="{ name: 'event-detail-view', params: { id: event.id } }">
    <!-- <div class="event-card hover:scale-101 hover:shadow-sp"> -->
    <div
      class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp"
    >
      <h2>{{ event.title }}</h2>
      <span>{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
/* .event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
} */
.event-link {
  text-decoration: none;
  color: #2c3e50;
}
</style>
