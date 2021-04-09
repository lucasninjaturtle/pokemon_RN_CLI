import React, { useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { pokemonApi } from '../api/pokemonApi'
import { PokemonPaginatedResponse, SimplePokemon, Result } from '../interfaces/pokemonInterfaces';

const usePokemonPaginated = () => {
    const [loading, setLoading] = useState(true)
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);

    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')


const loadPokemons = async()=>{
    setLoading(true)
    const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current)
    nextPageUrl.current = resp.data.next;
    mapPokemonList(resp.data.results)
}

//function to make the infinite scroll so I have the previous data and the new one. 
const mapPokemonList = (pokemonList: Result[])=>{

    const newPokemonList: SimplePokemon[] = 
    pokemonList.map(({name, url})=>{

        const urlParts = url.split('/')
        const id = urlParts[urlParts.length - 2]
        const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        return {id, picture, name};
    })
    setSimplePokemonList([...simplePokemonList, ...newPokemonList])
    setLoading(false)
}

useEffect(() => {
    loadPokemons()
    
}, [])

return {
    loading,
    simplePokemonList,
    loadPokemons
    
}
}

export default usePokemonPaginated
