import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import PokemonList from "./pages/pokemonList";

function App() {
  return (
    <div className="App bg-white">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Routes>
        <Route path="/" element={<Navigate to="/pokemons" replace />}></Route>
        <Route path="/pokemons" element={<PokemonList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
