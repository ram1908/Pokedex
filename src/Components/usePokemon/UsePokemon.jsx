import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function usePokemon (pokemanName){
    const { id } = useParams();
    const URL = "https://pokeapi.co/api/v2/pokemon/"
    const [pokemon, setPokemon] = useState('');
    
       async function PokemonData(pokemanName){
          try {
            const response = await axios.get(URL+ ((pokemanName) ? pokemanName : id))
            const poke = response.data
          setPokemon({
            name : poke.name,
            height : poke.height,
            weight : poke.weight,
            types : poke.types,
            image : poke.sprites.other.dream_world.front_default
          })
          } catch (error) {
            console.log(error)
          }
            
          
        }
    
        useEffect(() => {
             PokemonData(pokemanName);
        },[id,pokemanName])
        return [pokemon];
}

export default usePokemon;