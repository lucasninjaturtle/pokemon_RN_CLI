import React, { useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { pokemonApi } from '../api/pokemonApi'
import { PokemonPaginatedResponse, SimplePokemon, Result } from '../interfaces/pokemonInterfaces';

const usePokemonSearch = () => {
    const [fetching, setFetching] = useState(true)
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);

    


const loadPokemons = async()=>{
    const resp = await pokemonApi.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon/?limit=1200')
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
    setSimplePokemonList(newPokemonList)
    setFetching(false)
}

useEffect(() => {
    loadPokemons()
    
}, [])

return {
    fetching,
    simplePokemonList,
    
}
}

export default usePokemonSearch
