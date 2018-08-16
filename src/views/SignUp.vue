<template>
  <div class="v-screen">
    <h1>Crea tu cuenta</h1>
    {{ this.title }}
    <!-- <h3>y organiza tus cosas ;)</h3> -->
    <form v-on:submit.prevent="createUser(email, password)">
      <label for="email">E-mail</label> <br>
      <input name="email" v-model="email" type="email" required>
      <label for="password">Contraseña</label> <br>
      <input minlength="6" name="password" v-model="password" type="text" required>
      <input type="submit" value="Crear cuenta">
    </form> 
  </div>
</template>

<script>
import firebase from 'firebase'

const errorMessages = {
  'auth/email-already-in-use': 'Esta dirección de email ya se encuentra asociada a otra cuenta.',
  'auth/weak-password': 'La contraseña debe constar de 6 caracteres como mínimo.'
}

export default {
  name: 'SignUp',
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    createUser(email, password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          if(res.user) {
            if(res.additionalUserInfo.isNewUser) {
              this.$router
            }
          }
        }, error => {
          console.log(error);
          alert(errorMessages[error.code])
        })
    }
  }
}
</script>
