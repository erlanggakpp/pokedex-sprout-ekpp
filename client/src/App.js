import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import PokemonList from "./pages/pokemonList";
import NavBar from "./components/NavBar";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="App bg-white">
      <NavBar />
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
        <Route path="/pokemons/:name" element={<DetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
