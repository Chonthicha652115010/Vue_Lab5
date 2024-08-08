<script setup lang="ts">
import {type Event} from '@/types'
import { ref, onMounted, defineProps } from 'vue'
import EventService from '@/services/EventService';
const events = ref<Event[] | null>(null)
//props is make it run dynamically
const props = defineProps({
    id: {
        type: String,
        required: true
    }
})
onMounted(() => {
    //fetch event (by ID) and local event data
    // EventService.getEvent(id.value)
    EventService.getEvent(parseInt(props.id))
    .then((response) => {
            event.value = response.data
        })
        .catch((error) => {
            console.error('There was an error!', error)
        })
})
</script>


<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>


</template>
