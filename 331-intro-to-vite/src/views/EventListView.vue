<script setup lang="ts">
import Event from '@/types/Event'
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService'
import EventCard from '@/components/EventCard.vue';
import EventCardSec from '@/components/EventCardSec.vue';

const events = ref<Event[] | null>(null)
const totalEvents = ref(0)

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
const page = computed(() => props.page)

onMounted(() => {
  //pagination into 2 every time
  watchEffect(() => {
    events.value = null
    EventService.getEvents(pageSize.value, page.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  })
})
</script>


<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <EventCardSec v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <RouterLink
        id="page-prev"
        :to="{ name: 'event-list-view', query: { page: page - 1, pageSize: pageSize } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Prev Page</RouterLink
      >
      <RouterLink
        id="page-next"
        :to="{ name: 'event-list-view', query: { page: page + 1, pageSize: pageSize } }"
        rel="next"
        v-if="hasNexPage"
        >Next Page &#62;</RouterLink
      >
    </div>
  </div>

</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
