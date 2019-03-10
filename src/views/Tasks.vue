<template>
    <div class="home">
        <navbar/>
        <TaskList :tasks="tasks" :tasksRef="tasksRef"/>
        <task-add :tasksRef="tasksRef" :showAddTaskForm="showAddTaskForm" :hideAddTaskForm="hideAddTaskForm"/>
        <div @click="showAddTaskForm = true" v-show="showAddTaskForm == false"
             class="bg-orange text-white text-3xl fixed px-5 py-3 pin-r pin-b m-5 rounded-full shadow-lg border-none">
            +
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'

    import Navbar from '../components/Navbar.vue';
    import TaskList from '../components/TaskList.vue';
    import TaskAdd from '../components/TaskAdd.vue';

    import db from '../db';

    export default {
        name: 'home',
        components: {
            TaskList,
            Navbar,
            TaskAdd
        },
        data() {
            return {
                tasks: [],
                tasksRef: db.collection('tasks'),
                showAddTaskForm: false
            }
        },
        firestore() {
            return {
                tasks: this.tasksRef.orderBy('createdAt', 'asc').where('deleted', '==', false).where('user_id', '==', firebase.auth().currentUser.uid)
            }
        },
        methods: {
            hideAddTaskForm() {
                this.showAddTaskForm = false;
            }
        }
    }
</script>
