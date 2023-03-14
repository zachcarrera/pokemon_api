import "./App.css";
import { useState } from "react";

function App() {
    const [pokemonList, setPokemonList] = useState([]);

    const getPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then((response) => response.json())
            .then((data) => setPokemonList(data.results))
            .catch((err) => console.log(err));
    };

    return (
        <div className="App">
            <button onClick={() => getPokemon()}>Fetch Pokemon</button>
            <ul>
                {pokemonList.map((pokemon, index, arr) => (
                    <li key={index} className="list-element">
                        {pokemon.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
