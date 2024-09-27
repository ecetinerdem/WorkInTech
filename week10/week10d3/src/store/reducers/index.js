import { movies } from '../../data.js';

import {
  PREVIOUS_MOVIE,
  NEXT_MOVIE,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from '../actions/index.js';

const initialState = {
  movies: movies,
  favMovies: [],
  sira: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_MOVIE:
      return { ...state, sira: state.sira + 1 };
    case PREVIOUS_MOVIE:
      return { ...state, sira: state.sira - 1 };
    case ADD_FAVORITE:
      const currentMovie = state.movies[state.sira];
      return {
        ...state,
        favMovies: [...state.favMovies, currentMovie],
        movies: state.movies.filter((movie) => movie.id != currentMovie.id),
        sira:
          state.movies.length - state.sira == 1
            ? state.sira == 0
              ? 0
              : state.sira - 1
            : state.sira,
      };

    case REMOVE_FAVORITE:
      const removedMovie = state.favMovies.find(
        (movie) => movie.id == action.payload
      );
      return {
        ...state,
        favMovies: state.favMovies.filter(
          (movie) => movie.id != action.payload
        ),
        movies: [...state.movies, removedMovie],
      };
    default:
      return state;
  }
}
