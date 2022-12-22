import { useEffect, useState } from "react";
import { Pokemon } from "../api/interfaces/fetchAllPokemonResponse";
import { fetchAllPokemons } from '../helpers/fetchAllPokemons'
export const usePokemon = () => {
    const [isLoading, setIsLoading] = useState(true);
    //pokemons en forma de arreglo
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    useEffect(() => {
        //carga de los Pokemons
        fetchAllPokemons().then(pokemons => {
            setIsLoading(false)
            setPokemons(pokemons)
        })
    }, [])
    return {
        isLoading,
        pokemons
    }
}