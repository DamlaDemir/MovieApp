import service from '../services/service';

const state = {
    movies: []
};
const getters = {};
const mutations = {
    setMovies(state, movies) {
        state.movies = movies;
    }
};
const actions = {
    fetchMovies(context) {
        service.fetchMovies().then((snapshot) => {
            context.commit('setMovies', snapshot.val());
        })
    }
}

export default {
   state,
   getters,
   mutations,
   actions
}