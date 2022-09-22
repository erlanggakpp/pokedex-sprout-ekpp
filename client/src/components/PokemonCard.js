import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchOnePokemon } from "../stores/actions/pokemonAction";

function PokemonCard({ pokemon, offset }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [bgColor, setBgColor] = useState(
    "flex flex-row max-w-sm rounded-lg border border-gray-200 shadow-md "
  );
  const dispatch = useDispatch();
  const [onePokemon, setOnePokemon] = useState({});
  useEffect(() => {
    dispatch(fetchOnePokemon(pokemon.url))
      .then((data) => {
        // setBgColor(bgColor + `bg-${data.types[0].type.name}Pok`);
        setOnePokemon(data);
        if (data.types[0].type.name === "grass") {
          setBgColor("bg-grassPok");
        }
        if (data.types[0].type.name === "fire") {
          setBgColor("bg-firePok");
        }
        if (data.types[0].type.name === "water") {
          setBgColor("bg-waterPok");
        }
        if (data.types[0].type.name === "electric") {
          setBgColor("bg-electricPok");
        }
        if (data.types[0].type.name === "ice") {
          setBgColor("bg-icePok");
        }
        if (data.types[0].type.name === "poison") {
          setBgColor("bg-poisonPok");
        }
        if (data.types[0].type.name === "bug") {
          setBgColor("bg-bugPok");
        }
        if (data.types[0].type.name === "ground") {
          setBgColor("bg-groundPok");
        }
        if (data.types[0].type.name === "normal") {
          setBgColor("bg-normalPok");
        }
        if (data.types[0].type.name === "fighting") {
          setBgColor("bg-fightingPok");
        }
        if (data.types[0].type.name === "rock") {
          setBgColor("bg-rockPok");
        }
        if (data.types[0].type.name === "steel") {
          setBgColor("bg-steelPok");
        }
        if (data.types[0].type.name === "fairy") {
          setBgColor("bg-fairyPok");
        }
        if (data.types[0].type.name === "psychic") {
          setBgColor("bg-psychicPok");
        }
        if (data.types[0].type.name === "ghost") {
          setBgColor("bg-ghostPok");
        }
        if (data.types[0].type.name === "flying") {
          setBgColor("bg-flyingPok");
        }
        if (data.types[0].type.name === "dragon") {
          setBgColor("bg-dragonPok");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const toDetailPage = () => {
    onePokemon.offset = offset;
    navigate(`/pokemons/${onePokemon.name}`, { state: onePokemon });
  };
  return (
    <>
      {loading ? (
        <h1>Loading ... </h1>
      ) : (
        <div
          onClick={toDetailPage}
          className={
            "hover:cursor-pointer flex flex-row max-w-sm rounded-lg border border-gray-200 shadow-md " +
            bgColor
          }
        >
          <div className="p-5 w-3/4">
            <h5 className="mb-2 text-left text-2xl font-bold tracking-tight text-white">
              {onePokemon.name}
            </h5>
            <div className="bg-white rounded-2xl bg-opacity-25 w-fit">
              <h5 className="px-4 mb-2 text-md font-bold tracking-tight text-white">
                {onePokemon.types[0].type.name}
              </h5>
            </div>
            {onePokemon.types.length === 2 && (
              <div className="bg-white rounded-2xl bg-opacity-25 w-fit">
                <h5 className="px-4 mb-2 text-md font-bold tracking-tight text-white">
                  {onePokemon.types[1].type.name}
                </h5>
              </div>
            )}
          </div>
          <div className="p-2 w-3/4">
            <img
              className="object-fill"
              src={onePokemon.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonCard;
