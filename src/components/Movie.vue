<template>
  <div class="card">
    <router-link :to="movieDetailsPath"><img :src="posterPath" class="card-img-top" :alt="movie.original_title"></router-link>
    <div class="card-body">
      <h5 class="card-title">{{movie.original_title}}</h5>
      <p class="card-text">{{movie.overview}}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Average rating {{movie.vote_average.toFixed(2)}}</small>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Movie',
    props: {
        movie: {type:Object, required:true}
    },
    computed: {
        posterPath() {
            return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
        },
        movieDetailsPath() {
            return `/movie/${this.movie.id}`
        }
    }
}
</script>


<style>
.card {
    min-width: 250px;
    margin: 10px;
}
.card img {
    width: 100%;
}
</style>

