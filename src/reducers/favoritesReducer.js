import { ADD_TO_LIST, REMOVE_FROM_LIST } from "../actions/favoritesActions";

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      const movieExists = state.favorites.some(
        (movie) => movie.id === action.payload.id
      );
      if (movieExists) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_LIST:
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default favoritesReducer;
