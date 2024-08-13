<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { type Event } from '@/types'
import { ref, onMounted, computed, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'
import EventService from '@/services/EventService'

const events = ref<Event[] | null>(null)
const totalEvents = ref(0)

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    required: true
  }
})

const page = computed(() => props.page)
const pageSize = computed(() => props.pageSize)

const hasNextPage = computed(() => {
  const totalPage = Math.ceil(totalEvents.value / pageSize.value)
  return page.value < totalPage
})

onMounted(() => {
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
  <h1 class="text-2xl font-bold mb-4">Event For Good</h1>
  <div class="flex flex-col items-center">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <StudentCard v-for="event in events" :key="event.id" :event="event" />

    <div class="flex w-[290px] mt-4">
      <RouterLink
        id="page-prev"
        class="flex-1 text-left text-blue-500 hover:underline"
        :to="{
          name: 'event-list-view',
          query: { page: page - 1, pageSize: pageSize }
        }"
        rel="prev"
        v-if="page != 1"
        >&#60; Prev Page
      </RouterLink>

      <RouterLink
        id="page-next"
        class="flex-1 text-right text-blue-500 hover:underline"
        :to="{
          name: 'event-list-view',
          query: { page: page + 1, pageSize: pageSize }
        }"
        rel="next"
        v-if="hasNextPage"
        >Next Page &#62;
      </RouterLink>
    </div>
  </div>
</template>
