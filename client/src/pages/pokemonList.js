import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import PokemonCard from "../components/PokemonCard";
import { fetch30pokemons } from "../stores/actions/pokemonAction";

function PokemonList() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pokemons } = useSelector((state) => state.pokemons);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(32);
  const [offset, setOffset] = useState(0);
  const [displayedPokemons, setDisplayedPokemons] = useState([]);
  // console.log(location.search.split("="), "<<<<<<<<<<<");
  useEffect(() => {
    let offsetFix = 0;
    if (location.search) {
      let latestLocation = location.search.split("=")[1];
      offsetFix = +latestLocation;
      setOffset(+latestLocation);
    } else {
      offsetFix = offset;
    }
    dispatch(fetch30pokemons(limit, offsetFix)).then((data) => {
      //   console.log(data);
      setDisplayedPokemons(data);
      setLoading(false);
      Swal.fire({
        title: "Loading ...",
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    });
  }, []);

  const previous = () => {
    if (offset === 0) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `You're already on the first page!`,
        confirmButtonColor: "#0075BE",
      });
    } else {
      setLoading(true);
      dispatch(fetch30pokemons(limit, offset - 32)).then((data) => {
        setDisplayedPokemons(data);
        setOffset(offset - 32);
        setLoading(false);
        return Swal.fire({
          title: "Loading ...",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
        });
      });
    }
  };
  const next = () => {
    /* Read more about handling dismissals below */
    setLoading(true);
    dispatch(fetch30pokemons(limit, offset + 32)).then((data) => {
      setDisplayedPokemons(data);
      setOffset(offset + 32);
      setLoading(false);
      return Swal.fire({
        title: "Loading ...",
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    });
  };
  return (
    <>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="container mx-auto">
          <div className="mt-5 grid grid-cols-1 mx-3 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedPokemons.map((el) => (
              <PokemonCard
                pokemon={el}
                key={"card" + el.name}
                offset={offset}
              />
            ))}
          </div>
          <div className="my-4">
            <button
              onClick={previous}
              className="inline-flex items-center py-2 px-4 ml-3 text-lg font-medium text-pokeYellow bg-pokeBlue rounded-lg border border-gray-300 hover:opacity-90"
            >
              Previous
            </button>
            <button
              onClick={next}
              className="inline-flex items-center py-2 px-4 ml-3 text-lg font-medium text-pokeYellow bg-pokeBlue rounded-lg border border-gray-300 hover:opacity-90"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonList;
