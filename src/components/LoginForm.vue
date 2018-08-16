<template>
    <form v-on:submit.prevent="singIn(email, password)">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
        E-mail
        </label>
        <input autocomplete="email" placeholder="Tu email" name="email" v-model="email" type="email" required class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline">
      </div>
       <div class="mb-5">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Contraseña
        </label>
        <input autocomplete="password" placeholder="Tu contraseña" name="password" v-model="password" type="password" required class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
        <button class="w-full bg-blue hover:bg-blue-dark text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline shadow" type="submit">
          Entrar
        </button>
      </div>
      <!-- <div class="flex items-center justify-between">
        <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
          Forgot Password?
        </a>
      </div> -->
    </form>
</template>

<script>
import firebase from 'firebase'

const errorMessages = {
  'auth/email-already-in-use': 'Esta dirección de email ya se encuentra asociada a otra cuenta',
  'auth/weak-password': 'La contraseña debe constar de 6 caracteres como mínimo',
  'auth/wrong-password': 'La contraseña es incorrecta',
  'auth/user-not-found': 'Usuario inexistente'
}

export default {
  name: 'LoginForm',
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    singIn(email, password) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
          if(res.user) {
            this.$router.replace('/');
          }
        }, error => {
          console.log(error);
          alert(errorMessages[error.code])
        })
    }
  }
}
</script>
