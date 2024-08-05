<script setup lang="ts">
import Event from '@/types/Event'
defineProps<{
  event: Event
}>()

</script>

<template>
  <div class="greetings">
    <div class="event-class">
      <div class="event-card">
        <h2>Name: {{ event.name }}  {{ event.surname }}</h2>
        <span>GPA: {{ event.gpa }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-card {
  padding : 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px rgba(0, 0, 0, 2);
}
</style>
