<script setup lang="ts">
import Event from '@/types/Event'
import { ref, onMounted, computed } from 'vue'
import EventService  from '@/services/EventService'
import EventCard from '@/components/EventCard.vue';
import EventCardSec from '@/components/EventCardSec.vue';

const events = ref<Event[]>(null)
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
const page = computed(() => props.page)
onMounted(() => {
  //pagination into 2 every time
  EventService.getEvents(2, page.value)
    .then((response) => {
      events.value = response.data
      console.log(events.value) //just check
    })
    .catch((error) => {
      console.log('There was an error!', error)
    })
})
</script>


<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <EventCardSec v-for="event in events" :key="event.id" :event="event" />

  </div>

</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
