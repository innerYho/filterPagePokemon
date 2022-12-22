import { FetchAllPokemonResponse, Pokemon, SmallPokemon } from "../api/interfaces/fetchAllPokemonResponse"
import { pokemonApi } from "../api/pokemonApi"

export const fetchAllPokemons = async (): Promise<Pokemon[]> => {
    // const resp = await pokemonApi.get('/pokemon?limit=1500')
    const resp = await pokemonApi.get<FetchAllPokemonResponse>('/pokemon?limit=1500')
    // console.log(resp)
    // resp.data.results[0].name
    const smallPokemonList = resp.data.results;

    return transformSmallPokemonIntoPokemon(smallPokemonList);
}

const transformSmallPokemonIntoPokemon = (smallPokemonList: SmallPokemon[]): Pokemon[] => {
    const pokemonArr: Pokemon[] = smallPokemonList.map(poke => {
        const pokeArr = poke.url.split('/')
        // console.log(pokeArre)
        const id = pokeArr[6]
        const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        return {
            // id: '1', si se tiene el mismo nombre que la desesstructuración se puede dejar solo
            id,
            name: poke.name,
            pic
        }
    })

    console.log(pokemonArr)
    return pokemonArr;
}