//import { useParams } from "react-router-dom";
import usePokemon from "../usePokemon/UsePokemon";
//import axios from "axios";
//import { useEffect, useState } from "react";


function PokemonDetails({ pokemonName }){
    //const { id } = useParams();
   const [pokemon] = usePokemon(pokemonName);
  //  const URL = "https://pokeapi.co/api/v2/pokemon/"
  //   const [pokemon, setPokemon] = useState('');
    
  //      async function PokemonData(){
  //         try {
  //           const response = await axios.get(URL+ ((pokemonName) ? pokemonName :id))
  //           const poke = response.data
  //         setPokemon({
  //           name : poke.name,
  //           height : poke.height,
  //           weight : poke.weight,
  //           types : poke.types,
  //           image : poke.sprites.other.dream_world.front_default
  //         })
  //         } catch (error) {
  //           console.log(error)
  //         }
            
          
  //       }
    
  //       useEffect(() => {
  //            PokemonData();
  //       },[id,pokemonName])

    return (
pokemon && <div>

<div>
{pokemon.name}
</div>
<div>
     <img src= {pokemon.image} />
</div>
<div>
  height :  {pokemon.height}
</div>
<div>
weight : {pokemon.weight}
</div>
<div>
    Type : {pokemon.types.map((poke) => <span>{poke.type.name}</span>   )}
</div>
</div>
    )
}

export default PokemonDetails;