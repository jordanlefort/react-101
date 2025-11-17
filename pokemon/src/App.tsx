import { useEffect, useState } from "react";

const fetchRandomPokemon = async () => {
  const randomId = Math.floor(Math.random() * 898) + 1; // ID Pokémon de 1 à 898
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const data = await res.json();
  return { name: data.name, sprite: data.sprites.front_default };
};

const fetchSpecificPokemon = async (ID: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`);
  const data = await res.json();
  return { name: data.name, sprite: data.sprites.front_default };
}

type PokemonType = Record<string, string>

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([])

  const setRandomPokemons = async () => {
    const res = await Promise.all([
      fetchRandomPokemon(),
      fetchRandomPokemon()
    ])
    setPokemons((prev) => [...prev, ...res])
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const id = form.get('id')
    console.log(id, pokemons)
    if (id) {
      const pokemon = await fetchSpecificPokemon(id as string)
      if(!pokemons.find(poke => poke.name === pokemon.name))
        setPokemons((prev) => [pokemon, ...prev])
    }
  }

  useEffect(() => {
    setRandomPokemons()
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h2 className="pb-12">Mini Pokédex</h2>
      <form onSubmit={handleSubmit}>
        <label id="id" htmlFor="id">ID pokemon</label><input name="id" type="number" required />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {pokemons.map(pokemon => (
          <>
            <img src={pokemon.sprite} alt={pokemon.name} />
            <li key={pokemon.name}>{pokemon.name}</li>
          </>
        ))}
      </ul>
    </div>
  );
}
