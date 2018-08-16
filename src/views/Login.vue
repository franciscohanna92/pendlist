<template>
  <div class="h-screen bg-purple p-4 pt-12">
    <div class="bg-white rounded px-8 pt-6 pb-8 mx-auto shadow-">
      <h2 class="text-center mb-2">Bievenido a Pendlist</h2>
      <p class="text-center text-grey-dark mb-6">Inicia sesión y organiza tus cosas!</p>
      <login-form />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  data() {
    return {
    }
  }
}
</script>
