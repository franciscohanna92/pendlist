<template>
  <div class="flex mb-3 border text-grey-darker rounded font-sans" :class="{'shadow': !task.checked}">
    <div @click="markAsCompleted(task)" class="text-grey-darker p-5 text-xl h-full self-center flex-no-shrink">
      <font-awesome-icon  
        :icon="task.checked ? ['far', 'check-circle'] : ['far', 'circle']" 
        :class="{'text-teal check-circle': task.checked}"/> 
    </div>
    <div class="py-5 flex" :class="{'text-grey-dark line-through': task.checked}">
      <span class="self-center">{{ task.title }}</span>
    </div>
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
    }
  }
}
</script>