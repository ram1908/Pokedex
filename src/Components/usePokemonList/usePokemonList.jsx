import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList ()
{

    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

    const [pokemonListState,setpokemonListState] = useState({
        pokemonLists : [],
        pokedexUrl : DEFAULT_URL,
        prevUrl : DEFAULT_URL,
        nextUrl : DEFAULT_URL
    })

    // const [pokemonLists,setpokemonLists] = useState([]);   
    // const [pokedexUrl,setpokedexUrl] = useState(DEFAULT_URL)
    // const [prevUrl,setprevUrl] = useState(DEFAULT_URL)
    // const [nextUrl,setnextUrl] = useState(DEFAULT_URL)

    async function pokemonListData(){
      
        const response = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : DEFAULT_URL)
        const pokemonResults = response.data.results;

        // setnextUrl(response.data.next); 
        // setprevUrl(response.data.previous);

        //setpokemonListState((s) => ({...s, prevUrl : response.data.previous, nextUrl : response.data.next }))
        

         const pokemonPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url))
         const pokemonListUrl = await axios.all(pokemonPromise)
         const pokemonFinalList = pokemonListUrl.map(pokemon => {
            const pokemonData = pokemon.data 
            return {
                id : pokemonData.id,
                name : pokemonData.name,
                image : pokemonData.sprites.other.dream_world.front_default
                
            }
         });
         //setpokemonListState((s) => ({...s,pokemonLists: pokemonFinalList }));
         setpokemonListState({...pokemonListState,pokemonLists: pokemonFinalList,prevUrl : response.data.previous, nextUrl : response.data.next});
    }
    useEffect(() => {
        pokemonListData()
    },[pokemonListState.pokedexUrl])
    return [pokemonListState,setpokemonListState];

}

export default usePokemonList;