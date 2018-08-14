<template>
  <div class="home">
    <TaskList :tasks="tasks" :tasksRef="tasksRef"/>
  </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue';
import db from '../db';

export default {
  name: 'home',
  components: {
    TaskList
  },
  data () {
    return {
      tasks: [],
      tasksRef: db.collection('tasks')
    }
  },
  firestore () {
    return {
      tasks: this.tasksRef.orderBy('title')
    }
  }
}
</script>
