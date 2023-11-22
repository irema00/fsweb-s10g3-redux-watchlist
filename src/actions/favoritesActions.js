export const ADD_TO_LIST = "ADD_TO_LIST";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";

export const addToList = (movie) => ({
  type: ADD_TO_LIST,
  payload: movie,
});

export const removeFromList = (movieId) => ({
  type: REMOVE_FROM_LIST,
  payload: movieId,
});
