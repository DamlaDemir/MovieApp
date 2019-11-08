<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.$store.dispatch('fetchMovies');
  }
}
</script>


<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>



