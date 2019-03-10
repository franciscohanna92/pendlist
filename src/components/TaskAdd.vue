<template>
    <div class="shadow-lg fixed pin-b bg-white">
        <form v-show="showAddTaskForm" class="flex items-center" @submit.prevent="addTask(newTaskTitle)">
            <input autofocus ref="title" v-model="newTaskTitle" v-on:blur="hideAddTaskForm()"
                   class="appearance-none bg-transparent border-none w-full text-gray mr-3 pl-4 leading-tight focus:outline-none"
                   type="text" placeholder="¿Que tenés que hacer hoy?" aria-label="Nombre o título de la tarea">
            <button @click="addTask(newTaskTitle)" class="flex-no-shrink text-teal text-xl p-4 rounded" type="submit">
                <font-awesome-icon icon="check"/>
            </button>
        </form>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: 'TaskAdd',
        props: ['tasksRef', 'showAddTaskForm', 'hideAddTaskForm'],
        data() {
            return {
                formVisible: false,
                newTaskTitle: ""
            };
        },
        methods: {
            mounted() {
                this.$nextTick(() => this.$refs.title.focus());
            },
            addTask(title) {
                if (title) {
                    this.tasksRef.doc().set({
                        title,
                        checked: false,
                        createdAt: new Date(),
                        deleted: false,
                        user_id: firebase.auth().currentUser.uid
                    }).then(value => {
                        console.log(value);
                    }, reason => {
                        console.log(reason);
                    });
                }
                this.hideAddTaskForm();
                this.newTaskTitle = '';
            }
        }
    };
</script>