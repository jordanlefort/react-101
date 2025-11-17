import { useEffect, useState } from "react"

const fetchRandomPokemon = async () => {
  const randomId = Math.floor(Math.random() * 898) + 1 // ID Pokémon de 1 à 898
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
  const data = await res.json()
  return { name: data.name, sprite: data.sprites.front_default }
}

const fetchSpecificPokemon = async (ID: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
  const data = await res.json()
  return { name: data.name, sprite: data.sprites.front_default }
}

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    const randomPokemon1 = await fetchRandomPokemon()
    const randomPokemon2 = await fetchRandomPokemon()
    setPokemons([randomPokemon1, randomPokemon2])
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  async function AddPokemon(e) {
    e.preventDefault()
    const form = new FormData(e.target)
    const id = form.get("id")
    const pokemon = await fetchSpecificPokemon(id)
    setPokemons(prevValue => [...prevValue, pokemon])
  }

  return (
    <div style={{ padding: 20 }}>
      <h2 className="pb-12">Mini Pokédex</h2>
      <form onSubmit={AddPokemon}>
        <div>
          <input name="id" type="number" />
          <button>ajouter un pokemon</button>
        </div>
      </form>
      <ul>
        {pokemons.map(pokemon => (
          <li>
            <img alt="" src={pokemon.sprite} />
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
