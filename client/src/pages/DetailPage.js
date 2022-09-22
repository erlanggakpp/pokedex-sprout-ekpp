import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function DetailPage() {
  const location = useLocation();
  console.log(location.state.sprites, "<<<<<<<<");
  const [onePokemon, setOnePokemon] = useState({});
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

    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="flex justify-center w-screen mt-5">
          <div
            className={
              "relative text-center w-3/5 h-screen hover:cursor-pointer rounded-lg border border-gray-200 shadow-md " +
              bgColor
            }
          >
            <div className="h-1/2 w-full">
              <div className="p-5 w-3/4">
                <h5 className="mb-2 text-left text-4xl font-bold tracking-tight text-white">
                  {onePokemon.name}
                </h5>
                <div className="bg-white rounded-2xl bg-opacity-25 w-fit">
                  <h5 className="px-4 mb-2 text-2xl font-bold tracking-tight text-white">
                    {onePokemon.types[0].type.name}
                  </h5>
                </div>
                {onePokemon.types.length === 2 && (
                  <div className="bg-white rounded-2xl bg-opacity-25 w-fit">
                    <h5 className="px-4 mb-2 text-2xl font-bold tracking-tight text-white">
                      {onePokemon.types[1].type.name}
                    </h5>
                  </div>
                )}
              </div>
              <div className="w-fit h-fit mx-auto rounded-lg">
                <img
                  src={
                    onePokemon.sprites.other["official-artwork"].front_default
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="h-1/2 w-full rounded-t-3xl bg-white">
              <div className="pt-52">
                <h1>HAHAHA</h1>
              </div>
            </div>{" "}
          </div>
        </div>
      )}
    </>
  );
}

export default DetailPage;
