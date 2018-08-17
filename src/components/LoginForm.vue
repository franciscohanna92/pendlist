<template>
    <form v-on:submit.prevent="singIn(email, password)">
      <div class="mb-6">
        <label class="block text-white text-sm font-bold mb-2" for="email">
        E-mail
        </label>
        <input autocomplete="email" placeholder="Tu email" name="email" v-model="email" type="email" required class="appearance-none border-b bg-transparent w-full py-2 pl-2 text-white leading-tight">
      </div>
       <div class="mb-6">
        <label class="block text-white text-sm font-bold mb-2" for="password">
        Contraseña
        </label>
        <input autocomplete="password" placeholder="Tu contraseña" name="password" v-model="password" type="password" required class="appearance-none border-b bg-transparent w-full py-2 pl-2 text-white leading-tight">
      </div>
      <div class="mb-2">
        <button class="w-full bg-teal text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline shadow" type="submit">
          Iniciar sesión
        </button>
      </div>
      <div class="mb-4">
        <router-link to="/signup">
          <p class="w-full underline text-white py-3 px-4 rounded text-center">Aún no tengo cuenta</p>        
        </router-link>
      </div>
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
