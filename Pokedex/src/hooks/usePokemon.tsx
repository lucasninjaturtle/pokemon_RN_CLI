import React, { useEffect, useState } from 'react'
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { pokemonApi } from '../api/pokemonApi';

const usePokemon = (id : string) => {
    const [isLoading, setIsLoading] = useState(true)
    const [pokemonFull, setPokemonFull] = useState<PokemonFull>({} as PokemonFull)
    const loadPokemon = async () =>{
        const resp = await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemonFull(resp.data)
        setIsLoading(false)
    }

    useEffect(() => {
    loadPokemon()
    }, [])
    return{

        isLoading,
        pokemonFull
    }
        
    
    
}

export default usePokemon
