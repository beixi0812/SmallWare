<template>
  <div id="app">
        <navbar></navbar>
        <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/NavBar.vue'
  export default {
    components:{
      navbar
    }
    
  }
</script>

<style lang="sass" scoped>

</style>
