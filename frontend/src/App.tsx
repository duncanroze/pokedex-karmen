import { useState } from 'react';
import './index.css';

type PokemonData = {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: string[];
    sprite: string;
};

function App() {
    const [pokemonId, setPokemonId] = useState('');
    const [pokemon, setPokemon] = useState<PokemonData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchPokemon = async (): Promise<void> => {
        if (!pokemonId) return;

        setLoading(true);
        setError(null);
        setPokemon(null);

        try {
            const res = await fetch(`http://localhost:3000/pokemon/${pokemonId}`);
            if (!res.ok) throw new Error('Pokemon not found');

            const data: PokemonData = await res.json();
            setPokemon(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="app">
            <h1 className="title">Pokedex - Karmen</h1>
            <div className="pokedex-layout">
                <div className="pokedex-left">
                    <div className="leds">
                        <span className="led blue" />
                        <span className="led red" />
                        <span className="led yellow" />
                        <span className="led green" />
                    </div>
                    <div className="screen">
                        {loading && <p>Loading...</p>}
                        {error && <p className="error">{error}</p>}
                        {pokemon && (
                            <>
                                <img src={pokemon.sprite} alt={pokemon.name} />
                                <h3>{pokemon.name}</h3>
                                <p>Type(s) : {pokemon.types.join(', ')}</p>
                                <p>Height : {pokemon.height / 10} m</p>
                                <p>Weight : {pokemon.weight / 10} kg</p>
                            </>
                        )}
                    </div>
                    <div className="buttons">
                        <span className="button black" />
                        <span className="button red" />
                        <span className="button blue" />
                        <span className="controller">
                            <span className="top"></span>
                            <span className="bottom"></span>
                            <span className="left"></span>
                            <span className="right"></span>
                            <span className="circle"></span>
                        </span>
                    </div>
                </div>
                <div className="pokedex-hinge" />
                <div className="pokedex-right">
                    <div className="right-screen" />

                    <div className="button-grid">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="blue-button" />
                        ))}
                    </div>
                    <form
                        className="input-group"
                        onSubmit={(e) => {
                            e.preventDefault();
                            fetchPokemon();
                        }}
                    >
                        <input
                            type="number"
                            placeholder="Pokemon #"
                            value={pokemonId}
                            onChange={(e) => setPokemonId(e.target.value)}
                        />
                        <button type="submit">Search</button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default App;
