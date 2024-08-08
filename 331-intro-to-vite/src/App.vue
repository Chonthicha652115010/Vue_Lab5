<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list-view' }">Event</RouterLink>
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
        <div>
          <label for="page-size">Events per page: </label>
          <select id="page-size" v-model="pageSize" @change="updatePageSize">
            <option v-for="size in pageSizes" :key="size" :value="size">{{ size }}</option>
          </select>
        </div>
      </div>
    </header>
  </div>
</template>

<style>
.layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  font-size: 20px;
}
</style>
