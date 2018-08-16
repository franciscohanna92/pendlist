<template>
  <div>
    <div v-show="formVisible" class="flex items-center border rounded border-teal mb-3 shadow">
      <input ref="title" v-model="newTaskTitle" v-on:blur="hideForm()" class="appearance-none bg-transparent border-none w-full text-gray mr-3 pl-4 leading-tight focus:outline-none" type="text" placeholder="¿Que tenés que hacer hoy?" aria-label="Nombre o título de la tarea">
      <button @click="addTask(newTaskTitle)" class="flex-no-shrink text-teal text-xl p-4 rounded" type="button">
        <font-awesome-icon icon="check"/>
      </button>
    </div>

    <div @click="showForm()" v-show="!formVisible" class="flex items-center border rounded border-gray mb-3 text-grey-dark">
      <button class="flex-no-shrink text-grey p-4 rounded text-xl" type="button">
        <font-awesome-icon icon="plus-circle"/>
      </button>
      <p>Agregar nueva tarea</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: "TaskAdd",
  props: ["tasksRef"],
  data() {
    return {
      formVisible: false,
      newTaskTitle: ""
    };
  },
  methods: {
    addTask(title) {
      if(title) {
        let newTask = {
          title,
          checked: false,
          createdAt: new Date(),
          deleted: false,
          user_id: firebase.auth().currentUser.uid

        }
        console.log(newTask);
        this.tasksRef.doc().set(newTask);
      }
    },
    showForm() {
      this.newTaskTitle = null;
      this.formVisible = true;
      this.$nextTick(() => this.$refs.title.focus());
    },
    hideForm() {
      this.formVisible = false;
    }
  }
};
</script>