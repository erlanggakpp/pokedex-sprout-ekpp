const {
  FETCH_30_POKEMONS,
  FETCH_ONE_POKEMON,
} = require("../actions/actionType");

const initialState = {
  pokemons: [],
  pokemon: {},
};

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_30_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case FETCH_ONE_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };

    default:
      return state;
  }
}

export default pokemonReducer;
