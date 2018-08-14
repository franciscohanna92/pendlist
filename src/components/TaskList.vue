<template>
  <div>
    <task-item v-for="task in tasks" :key="task.key" :task="task" :tasksRef="tasksRef"/>
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue';

export default {
  name: 'TaskList',
  props: ['tasks', 'tasksRef'],
  data() {
    return {
      
    }
  },
  components: {
    TaskItem
  }
}
</script>