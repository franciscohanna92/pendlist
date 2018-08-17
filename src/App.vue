<template>
  <div id="app">
    <!-- <router-link to="/signup">Registro de usuario</router-link> -->
      <router-view class="font-sans" />
      <!-- <div class="bg-orange text-white text-3xl fixed px-5 py-3 pin-r pin-b m-5 rounded-full shadow-lg border-none" >
        +
      </div> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
</style>

