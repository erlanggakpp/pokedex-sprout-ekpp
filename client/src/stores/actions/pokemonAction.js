const { FETCH_30_POKEMONS, FETCH_ONE_POKEMON } = require("./actionType");

const fetchSuccess = (type, payload) => {
  return {
    type,
    payload,
  };
};

export const fetch30pokemons = (limit, offset) => {
  return function (dispatch) {
    return fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Internal Server Error");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        return data.results;
      });
  };
};
export const fetchOnePokemon = (url) => {
  return function (dispatch) {
    return fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Internal Server Error");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data, "INI DARI ACTION");
        return data;
      });
  };
};
