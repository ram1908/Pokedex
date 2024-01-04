// Css imports
import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../usePokemonList/usePokemonList';
import './PokemonList.css'

function PokemonList(){
    const [pokemonListState,setpokemonListState] = usePokemonList();

    return (
        <div className='pokemon-list-wrapper'>
            <div>
                <h1>Pokemon List</h1>
                </div>

                <div className='page-controls'>
                    <button onClick={()=> setpokemonListState({...pokemonListState,pokedexUrl:pokemonListState.prevUrl})}>Prev</button>
                    <button onClick={()=> setpokemonListState({...pokemonListState,pokedexUrl:pokemonListState.nextUrl})}>Next</button>
                </div>
            <div className='pokemon-list'>
            {pokemonListState.pokemonLists.map(pokemon =>   <Pokemon  name= {pokemon.name} key = {pokemon.id} url = {pokemon.image} id = {pokemon.id}/>   )}
            </div>
        </div>
    )
}

export default PokemonList;