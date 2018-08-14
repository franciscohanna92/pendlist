<template>
  <div id="app">
    <navbar/>
    <div id="nav">
      <!-- <router-link to="/">Tasks</router-link>
      <router-link to="/about">About</router-link> -->
    </div>
    <div class="container-fluid p-3">
      <router-view/>
      <div class="bg-orange text-white text-3xl fixed px-5 py-3 pin-r pin-b m-5 rounded-full shadow-lg border-none" >
        +
      </div>
      <!-- <font-awesome-icon icon="plus-circle"/>       -->
    </div>
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
