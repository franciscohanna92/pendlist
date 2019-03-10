
<template>
	<div>
		<button class="w-full bg-white py-3 px-4 text-center shadow rounded text-grey-darkest mb-4" @click="googLogin()">Continuar con Google</button>
		<button class="w-full bg-white py-3 px-4 text-center shadow rounded text-grey-darkest mb-4" @click="facebookLogin()">Continuar con Facebook</button>
		<router-link to="/login"><button class="w-full bg-transparent text-white border border-white py-3 px-4 text-center shadow rounded text-grey-darkest">Continuar con email</button></router-link>
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
      firebase.auth().signInWithPopup(googleProvider).then(result => {
        console.log(result);
		console.log(firebase.auth().currentUser);
		this.$router.replace('/');
      }).catch(error => {
        console.log(error);
      });
    },
    facebookLogin() {
      firebase.auth().signInWithPopup(facebookProvider).then(result => {
        console.log(result);
		console.log(firebase.auth().currentUser);
		this.$router.replace('/');
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
</script>