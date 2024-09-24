import {
  REMOVE_FAVORITE,
  ADD_FAVORITE,
  TOGGLE_FAVORITES,
} from '../actions/favoritesActions.js';

const initialState = {
  favMovies: [],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    case ADD_FAVORITE:
      const fav = state.favMovies.find((item) => item.id === action.payload.id);
      if (fav) {
        return state;
      } else {
        return {
          ...state,
          favMovies: [...state.favMovies, action.payload],
        };
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favMovies: [
          ...state.favMovies.filter((item) => item.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
