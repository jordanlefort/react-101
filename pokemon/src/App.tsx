const fetchRandomPokemon = async () => {
  const randomId = Math.floor(Math.random() * 898) + 1; // ID Pokémon de 1 à 898
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const data = await res.json();
  return { name: data.name, sprite: data.sprites.front_default };
};


export default function Pokedex() {
  

  return (
    <div style={{ padding: 20 }}>
      <h2 className="pb-12">Mini Pokédex</h2>
  
    </div>
  );
}
