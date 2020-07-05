import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
} from '../actions';

const initialState = {
  pokemon: [],
  error: '',
  isFetching: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMON_START:
      return {
        ...state,
        error: '',
        isFetching: true,
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
        error: '',
        isFetching: false,
      };
    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default reducer;
