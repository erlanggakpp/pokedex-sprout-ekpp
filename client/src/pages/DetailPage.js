import { useEffect, useState } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function DetailPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [state, setState] = useState("About");
  const [onePokemon, setOnePokemon] = useState({});
  const [abilities, setAbilities] = useState("");
  const [loading, setLoading] = useState(true);
  const [bgColor, setBgColor] = useState(
    "flex flex-row max-w-sm rounded-lg border border-gray-200 shadow-md "
  );
  useEffect(() => {
    setOnePokemon(location.state);
    if (location.state.types[0].type.name === "grass") {
      setBgColor("bg-grassPok");
    }
    if (location.state.types[0].type.name === "fire") {
      setBgColor("bg-firePok");
    }
    if (location.state.types[0].type.name === "water") {
      setBgColor("bg-waterPok");
    }
    if (location.state.types[0].type.name === "electric") {
      setBgColor("bg-electricPok");
    }
    if (location.state.types[0].type.name === "ice") {
      setBgColor("bg-icePok");
    }
    if (location.state.types[0].type.name === "poison") {
      setBgColor("bg-poisonPok");
    }
    if (location.state.types[0].type.name === "bug") {
      setBgColor("bg-bugPok");
    }
    if (location.state.types[0].type.name === "ground") {
      setBgColor("bg-groundPok");
    }
    if (location.state.types[0].type.name === "normal") {
      setBgColor("bg-normalPok");
    }
    if (location.state.types[0].type.name === "fighting") {
      setBgColor("bg-fightingPok");
    }
    if (location.state.types[0].type.name === "rock") {
      setBgColor("bg-rockPok");
    }
    if (location.state.types[0].type.name === "steel") {
      setBgColor("bg-steelPok");
    }
    if (location.state.types[0].type.name === "fairy") {
      setBgColor("bg-fairyPok");
    }
    if (location.state.types[0].type.name === "psychic") {
      setBgColor("bg-psychicPok");
    }
    if (location.state.types[0].type.name === "ghost") {
      setBgColor("bg-ghostPok");
    }
    if (location.state.types[0].type.name === "flying") {
      setBgColor("bg-flyingPok");
    }
    if (location.state.types[0].type.name === "dragon") {
      setBgColor("bg-dragonPok");
    }
    let abilities = location.state.abilities.map((el) => {
      return el.ability.name;
    });
    setAbilities(abilities.join(", "));
    setLoading(false);
    Swal.fire({
      title: "Loading ...",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }, []);

  const changeClass = (text) => {
    if (state === text) {
      return "bg-none border-b border-b-4 border-b-pokeBlue p-1 text-2xl mb-2 hover:cursor-pointer";
    } else {
      return "bg-none border-b border-b-4 p-1 px-3 text-2xl mb-2 hover:cursor-pointer";
    }
  };

  const changeState = (state) => {
    setState(state);
  };
  return (
    <>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="flex justify-center w-screen my-5">
          <div
            className={
              "relative text-center w-3/5 h-screen rounded-lg border border-gray-200 shadow-md " +
              bgColor
            }
          >
            <div className="h-1/2 w-full">
              <button
                onClick={() =>
                  navigate({
                    pathname: "/pokemons",
                    search: createSearchParams({
                      offset: onePokemon.offset,
                    }).toString(),
                  })
                }
                className={
                  "text-pokeBlue px-3 hover:opacity-90 font-bold bg-white rounded-xl mt-3 p-1 text-md"
                }
              >
                Go Back
              </button>
              <div className="p-5 w-3/4">
                <h5 className="mb-2 text-left md:text-xl lg:text-4xl font-bold tracking-tight text-white">
                  {onePokemon.name}
                </h5>
                <div className="bg-white rounded-2xl bg-opacity-25 w-fit">
                  <h5 className="px-4 mb-2 md:text-md lg:text-2xl font-bold tracking-tight text-white">
                    {onePokemon.types[0].type.name}
                  </h5>
                </div>
                {onePokemon.types.length === 2 && (
                  <div className="bg-white rounded-2xl bg-opacity-25 w-fit">
                    <h5 className="px-4 mb-2 md:text-md lg:text-2xl font-bold tracking-tight text-white">
                      {onePokemon.types[1].type.name}
                    </h5>
                  </div>
                )}
              </div>
              <div className="w-2/6 h-1/4 mx-auto rounded-lg absolute top-24 left-80">
                <img
                  src={
                    onePokemon.sprites.other["official-artwork"].front_default
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="h-1/2 w-full rounded-t-3xl bg-white">
              <div className="pt-10 flex flex-row justify-center items-center">
                <button
                  onClick={(e) => changeState("About")}
                  className={changeClass("About")}
                >
                  About
                </button>
                <button
                  onClick={(e) => changeState("Base Stats")}
                  className={changeClass("Base Stats")}
                >
                  Base Stats
                </button>
                {/* <button
                  onClick={(e) => changeState("Evolution")}
                  className={changeClass("Evolution")}
                >
                  Evolution
                </button> */}
                <button
                  onClick={(e) => changeState("Moves")}
                  className={changeClass("Moves")}
                >
                  Moves
                </button>
              </div>
              <div
                className={
                  "pt-5 text-left px-20 " + (state === "About" ? "" : "hidden")
                }
              >
                <div className="flex flex-row h-full">
                  <h1 className="text-2xl md:text-md mb-2 w-1/6 text-gray-400">
                    Species
                  </h1>
                  <h1 className="text-2xl md:text-md mb-2 w-2/3 ">
                    {onePokemon.species.name}
                  </h1>
                </div>
                <div className="flex flex-row">
                  <h1 className="text-2xl md:text-md mb-2 w-1/6 text-gray-400">
                    Height
                  </h1>
                  <h1 className="text-2xl md:text-md mb-2 w-2/3">
                    {onePokemon.height / 10} m
                  </h1>
                </div>
                <div className="flex flex-row">
                  <h1 className="text-2xl md:text-md mb-2 w-1/6 text-gray-400">
                    Weight
                  </h1>
                  <h1 className="text-2xl md:text-md mb-2 w-2/3">
                    {onePokemon.weight / 10} kg
                  </h1>
                </div>
                <div className="flex flex-row">
                  <h1 className="text-2xl mb-2 w-1/6 text-gray-400">
                    Abilities
                  </h1>
                  <h1 className="text-2xl mb-2 w-2/3">{abilities}</h1>
                </div>
              </div>
              <div
                className={
                  "pt-5 text-left px-20 flex justify-center " +
                  (state === "Moves" ? "" : "hidden")
                }
              >
                <div className="overflow-auto h-60 w-full">
                  <ul className=" w-full text-lg font-medium text-gray-900 bg-white rounded-lg">
                    {onePokemon.moves.map((el) => {
                      return (
                        <li
                          key={el.move.name + el.name}
                          className="overflow-y-auto py-2 px-4 w-full rounded-t-lg"
                        >
                          {el.move.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div
                className={
                  "pt-5 text-left pl-20 " +
                  (state === "Base Stats" ? "" : "hidden")
                }
              >
                <div className="flex flex-row">
                  <h1 className="text-2xl mb-2 w-1/6 text-gray-400">HP</h1>
                  <div className="w-2/3 flex flex-row items-center">
                    <h1 className="text-2xl w-14 mb-2 mr-3">
                      {onePokemon.stats[0].base_stat}
                    </h1>

                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className={
                          "h-2.5 rounded-full " +
                          (onePokemon.stats[0].base_stat < 50
                            ? "bg-red-600"
                            : "bg-green-600")
                        }
                        style={{
                          width: `${
                            (onePokemon.stats[0].base_stat / 255) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <h1 className="text-2xl mb-2 w-1/6 text-gray-400">Attack</h1>
                  <div className="w-2/3 flex flex-row items-center">
                    <h1 className="text-2xl w-14 mb-2 mr-3">
                      {onePokemon.stats[1].base_stat}
                    </h1>

                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className={
                          "h-2.5 rounded-full " +
                          (onePokemon.stats[1].base_stat < 50
                            ? "bg-red-600"
                            : "bg-green-600")
                        }
                        style={{
                          width: `${
                            (onePokemon.stats[1].base_stat / 255) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <h1 className="text-2xl mb-2 w-1/6 text-gray-400">Defense</h1>
                  <div className="w-2/3 flex flex-row items-center">
                    <h1 className="text-2xl w-14  mb-2 mr-3">
                      {onePokemon.stats[2].base_stat}
                    </h1>

                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className={
                          "h-2.5 rounded-full " +
                          (onePokemon.stats[2].base_stat < 50
                            ? "bg-red-600"
                            : "bg-green-600")
                        }
                        style={{
                          width: `${
                            (onePokemon.stats[2].base_stat / 255) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <h1 className="text-2xl mb-2 w-1/6 text-gray-400">Sp. Atk</h1>
                  <div className="w-2/3 flex flex-row items-center">
                    <h1 className="text-2xl w-14 mb-2 mr-3">
                      {onePokemon.stats[3].base_stat}
                    </h1>

                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className={
                          "h-2.5 rounded-full " +
                          (onePokemon.stats[3].base_stat < 50
                            ? "bg-red-600"
                            : "bg-green-600")
                        }
                        style={{
                          width: `${
                            (onePokemon.stats[3].base_stat / 255) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <h1 className="text-2xl mb-2 w-1/6 text-gray-400">Sp. Def</h1>
                  <div className="w-2/3 flex flex-row items-center">
                    <h1 className="text-2xl w-14 mb-2 mr-3">
                      {onePokemon.stats[4].base_stat}
                    </h1>

                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className={
                          "h-2.5 rounded-full " +
                          (onePokemon.stats[3].base_stat < 50
                            ? "bg-red-600"
                            : "bg-green-600")
                        }
                        style={{
                          width: `${
                            (onePokemon.stats[4].base_stat / 255) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      )}
    </>
  );
}

export default DetailPage;
