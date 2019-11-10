<template>
    
</template>

<script>
export default {
    created() {
        const movieId = this.$route.params.id;
        this.$store.dispatch('fetchMovieDetails', movieId).then(() => {
            console.log('data fetch');
        });
    }
}
</script>

<style>

</style>
