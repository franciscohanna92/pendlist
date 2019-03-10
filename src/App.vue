<template>
  <div id="app">
    <!-- <router-link to="/signup">Registro de usuario</router-link> -->
      <router-view class="font-sans" />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
</style>

