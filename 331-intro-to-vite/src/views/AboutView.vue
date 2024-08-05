<script setup lang="ts">
import Event from '@/types/Event'
import { ref, onMounted } from 'vue'
import StudentService from '@/services/StudentService';
import StudentCard from '@/components/StudentCard.vue';

const events = ref<Event[]>(null)

onMounted(() => {
  StudentService.getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.log('There was an error!', error)
    })
})
</script>


<template>
  <h1>List of GOD</h1>
  <div class="events">
    <StudentCard v-for="event in events" :key="event.id" :event="event" />

  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
