import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-pokeBlue">
      <div className="text-pokeYellow text-4xl font-bold container flex flex-wrap justify-between items-center mx-auto">
        <h1
          onClick={() => navigate("/pokemons")}
          className="hover:cursor-pointer"
        >
          Pokedex
        </h1>
      </div>
    </nav>
  );
}

export default NavBar;
