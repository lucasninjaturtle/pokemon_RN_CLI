import React, { useEffect, useRef } from 'react'
import { Text, View } from 'react-native'
import { pokemonApi } from '../api/pokemonApi'

const usePokemonPaginated = () => {

    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')


const loadPokemons = async()=>{
    const resp = await pokemonApi.get(nextPageUrl.current)
    console.log(resp.data)
}

useEffect(() => {
    loadPokemons()
    
}, [])

return {
    
}
}

export default usePokemonPaginated
