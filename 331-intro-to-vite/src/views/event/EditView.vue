<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { type Event } from '@/types'

const props = defineProps<{
  event: Event
  id: String
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const showMessage = ref(false)
const flashMessage = ref('')

const editEvent = () => {
  store.updateMessage('The data has been updated')
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'event-detail-view', params: { id: props.event.id } })
}
</script>

<template>
  <div>
    <p>Edit event here</p>
    <button @click="editEvent" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Edit
    </button>
    <div v-if="showMessage" class="mt-4 text-green-500">
      {{ flashMessage }}
    </div>
  </div>
</template>
