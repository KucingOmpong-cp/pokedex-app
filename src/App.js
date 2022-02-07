import React, { useEffect, useState } from 'react'
import './assets/styles/style.scss'
import PokemonCard from './components/pokemonCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
  // const API_URL = 'https://pokeapi.co/api/v2/pokemon'

  const [Pokemons, setPokemons] = useState([])
  const [API_URL, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const listPokemons = async () => {
    const res = await fetch(API_URL)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results) {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setPokemons(currentList => [...currentList, data])
        // await Pokemons.sort((a,b) => a.id - b.id)
      })
    }

    createPokemonObject(data.results)
  }

  useEffect(() => {
    console.log(listPokemons())
  },[])

  return (
    <div className="container">
      <form>
        <input type="text" />
      </form>
      <button className="load-more">prev</button>
      <div className='pokemons-container'>
        {Pokemons.map((pokemonStats, index) => 
          <PokemonCard 
          key={index}
          id={pokemonStats.id}
          image={pokemonStats.sprites.other.dream_world.front_default}
          name={pokemonStats.name}
          type={pokemonStats.types}
          />
        )}
      </div>
      <button className="load-more">next</button>
    </div>
  );
}

export default App;
