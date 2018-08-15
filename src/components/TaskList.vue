<template>
  <div>
    <task-add :tasksRef="tasksRef"/>
    
    <!-- v-show="!task.checked || showCompleted" -->
    <div v-show="tasks.length > 0" class="shadow border border-b-0 rounded">
      <task-item v-for="task in tasks" :key="task.key" :task="task" :tasksRef="tasksRef"/>
    </div>
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue';
import TaskAdd from '@/components/TaskAdd.vue';

export default {
  name: 'TaskList',
  props: ['tasks', 'tasksRef'],
  data() {
    return {
      showCompleted: false
    }
  },
  components: {
    TaskItem,
    TaskAdd
  }
}
</script>