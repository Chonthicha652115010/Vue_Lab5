<script setup lang="ts">
import Event from '@/types/Event'
import { ref, onMounted, defineProps } from 'vue'
import EventService from '@/services/EventService';
const event = ref<Event>(null)
//props is make it run dynamically
const props = defineProps({
    id: {
        type: String,
        required: true
    }
})
onMounted(() => {
    console.log("Event ID", id.value)
    //fetch event (by ID) and local event data
    // EventService.getEvent(id.value)
    EventService.getEvent(props.id)
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
