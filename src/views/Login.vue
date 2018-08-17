<template>
  <div class="h-screen bg-purple p-5 pt-12">
    <div class="bg-transparent rounded mx-auto shadow-">
      <login-form></login-form>
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
