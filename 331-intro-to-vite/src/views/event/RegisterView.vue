<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { type Event } from '@/types'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'

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

const register = () => {
  store.updateMessage('You are successfully registered for ' + props.event.title)
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'event-detail-view', params: { id: props.event.id } })
}
/*
const register = () => {
    // if the registration API call successful
    showMessage.value = true
    flashMessage.value = 'Registration successful!'
    setTimeout(() => {
        showMessage.value = false
        router.push({ name: 'event-detail-view' })
    }, 3000) // Adjust the timeout duration as needed
}*/
</script>

<template>
  <p>Register event here</p>
  <button @click="register" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    Register
  </button>
  <div v-if="showMessage" class="mt-4 text-green-500">
    {{ flashMessage }}
  </div>
</template>
