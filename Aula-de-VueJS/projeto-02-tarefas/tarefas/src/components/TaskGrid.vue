<template>
  <div class="task-grid">
    <template>
      <Task v-for="task in tasks" :key="task.name" :task="task"></Task>
    </template>
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  components: { Task },
  props: {
    tasks: { type: Array, required: true },
  },
};
</script>

<style>
</style>