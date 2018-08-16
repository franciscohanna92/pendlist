<template>
    <div class="flex items-center mb-0 border-b text-grey-darker">
       <button @click="markAsCompleted(task)"  class="flex-no-shrink text-grey-darkest text-xl p-4 rounded focus:outline-none" type="button">
        <font-awesome-icon  
        :icon="task.checked ? ['far', 'check-circle'] : ['far', 'circle']" 
        :class="{'text-grey check-circle': task.checked}"/> 
      </button>
      <p @click="markAsCompleted(task)" :class="{'text-grey line-through': task.checked}" class="w-full">{{task.title}}</p>
      <button v-show="task.checked" @click="deleteTask(task)" class="flex-no-shrink text-grey text-xl p-4 rounded" type="button">
        <font-awesome-icon icon="trash"/>
      </button>
    </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: ['task', 'tasksRef'],
  data() {
    return {
    }
  },
  methods: {
    markAsCompleted(task) {
      task.checked = !task.checked;
      this.tasksRef.doc(task.id).set(task);
      this.task = task;
      console.log(this.task);
    },
    deleteTask(task) {
      task.deleted = true;
      this.tasksRef.doc(task.id).set(task);
    }
  }
}
</script>