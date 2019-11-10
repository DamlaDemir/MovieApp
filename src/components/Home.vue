<script>
import AppHeader from './AppHeader';
import Loader from './Loader';
import Movie from './Movie';
import {mapGetters} from 'vuex';

export default {
  name: 'Home',
  data () {
    return {
      isLoading: true
    }
  },
  components: {
    AppHeader,
    Loader,
    Movie
  },
  created() {
    this.$store.dispatch('fetchMovies').then(() => {
      this.isLoading = false;
    });
  },
  computed: {
   ...mapGetters([
        'movies',
        'groupedMovies'
   ]) 
}
}
</script>


<template>
<section>
  <app-header></app-header>
  <loader v-if="isLoading"/>
  <section class="container py-5">
    <div class="card-group" v-for="(grouped,index) in groupedMovies" v-bind:key="index">
      <movie v-for="movie in grouped" v-bind:key="movie.id" :movie="movie"/>
    </div>
  </section>
</section>
</template>



