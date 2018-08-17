<template>
  <div class="flex h-screen bg-purple p-5">
    <div class="self-end bg-transparent rounded mx-auto shadow-">
      <div class="p-10 pb-5">
        <img src="img/clipboard.svg" class="shadow-lg rounded-full" height="100" alt="">
      </div>
      <h2 class="text-white text-center mb-2">Bievenido a Pendlist</h2>
      <p class="text-center text-grey-light mb-10">Inicia sesión y organiza tus cosas!</p>
      <auth-providers></auth-providers>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

import LoginForm from '@/components/LoginForm.vue'
import AuthProviders from '@/components/AuthProviders.vue'

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export default {
  name: 'Login',
  components: {
    LoginForm,
    AuthProviders
  },
  data() {
    return {
    }
  },
  methods: {
    googLogin() {
      firebase.auth().signInWithPopup(googleProvider).then(function(result) {
        console.log(result);
        console.log(firebase.auth().currentUser);
      }).catch(function(error) {
        console.log(error);
      });
    },
    facebookLogin() {
      firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
        console.log(result);
        console.log(firebase.auth().currentUser);
      }).catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script>
