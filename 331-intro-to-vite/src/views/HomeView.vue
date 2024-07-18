<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import type { Event } from '@/types'
import { ref } from 'vue'
const events = ref<Event[]>([
  {
    id: 5928101,
    category: 'animal welfare',
    title: 'Cat Adoption Dat',
    description: 'Find your new feline friend at this event.',
    location: 'Meow Town',
    date: 'January 28,2022',
    time: '12:00',
    petsAllowed: true,
    organizer: 'Kat laydee'
  },
  {
    id: 8419988,
    category: 'asustainability',
    title: 'CBeach Cleanup',
    description: 'Help pick up trash along the shore.',
    location: 'Playa Del Carmen',
    date: 'July 22,2022',
    time: '11:00',
    petsAllowed: false,
    organizer: 'Carey Wales'
  }
])
</script>


<template>
  <div class="home">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
