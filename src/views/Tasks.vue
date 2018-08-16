<template>
  <div class="home">
    <navbar/>    
    <TaskList :tasks="tasks" :tasksRef="tasksRef"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import TaskList from '@/components/TaskList.vue';

import firebase from 'firebase';

import db from '../db';

export default {
  name: 'home',
  components: {
    TaskList,
    Navbar
  },
  mounted() {
    console.log(firebase.auth().currentUser);
  },
  data () {
    return {
      tasks: [],
      tasksRef: db.collection('tasks')
    }
  },
  firestore () {
    return {
      tasks: this.tasksRef.orderBy('deleted').where('deleted', '<', true)
    }
  }
}
</script>
