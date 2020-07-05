import axios from 'axios';
export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

export const getPokemon = () => (dispatch) => {
  dispatch({ type: FETCH_POKEMON_START });
  axios
    .get('https://pokeapi.co/api/v2/pokemon')
    .then((res) => {
      dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data.results });
    })
    .catch((err) => {
      console.log(err.response);
      const { status, data } = err.response;
      dispatch({ type: FETCH_POKEMON_FAILURE, payload: `${status} ${data}` });
    });
};
