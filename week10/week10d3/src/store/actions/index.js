export const PREVIOUS_MOVIE = 'PREVIOUS_MOVIE';
export const NEXT_MOVIE = 'NEXT_MOVIE';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addFavorite = () => {
  return { type: ADD_FAVORITE };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};

export const previousMovie = () => {
  return { type: PREVIOUS_MOVIE };
};

export const nextMovie = () => {
  return { type: NEXT_MOVIE };
};
