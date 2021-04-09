import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import ImageColors from "react-native-image-colors"


// SIMENSIONS

const width = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon;
}

const PokemonCard = ({pokemon}: Props) => {

    // POKECARD COLOR

    const [bgColor, setBgColor] = useState('grey')
    const isMounted = useRef(true)
    
    useEffect( () => {
        
        ImageColors.getColors(pokemon.picture, { fallback: 'grey'})
        .then( (colors: { platform: string; dominant: any; background: any; }) =>{

                if (!isMounted.current) return;
                
            if (colors.platform === "android") {
                setBgColor(colors.dominant || 'grey')
              } else {
                setBgColor(colors.background || 'grey')
              }
        })
    }, [])

    return (
        <TouchableOpacity
        activeOpacity={ 0.9}
        >
            <View 
            style={{
                ...styles.cardContainer,
                width:width * 0.4,
                backgroundColor:bgColor
                }}>
            {/* POKEMON NAME AND ID */}
            <View>
                <Text style={styles.name}>
                    {pokemon.name}
                    {'\n#'+pokemon.id}
                </Text>
            </View>

            <View style={styles.pokebolaContainer}>
            <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokebola}
            />
            </View>
            
            <FadeInImage
        uri={pokemon.picture}
        style={styles.pokemonImage}
        />


            </View>

        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        height:120,
        width: 160,
        borderRadius:10,
        marginBottom:25,
        shadowColor: "#000fff",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    name:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
    },
    pokebolaContainer:{
        width: 100,
        height: 100,
        position: 'absolute',
        bottom:0,
        right:0,
        opacity:0.5,
        //CON EL OLVER FLOW EN HIDDEN CORTAS LO QUE QUEDA FUERA DEL CONTENEDOR
        // WITH overflow: 'hidden' you cut the things out of the box 
        overflow: 'hidden'
    },
    pokebola:{
        width: 100,
        height: 100,
        position:'absolute',
        bottom:-20,
        right:-20,
        
    },
    pokemonImage:{
        width:100,
        height:100,
        position:'absolute',
        bottom: -10,
        right:10,

    },
    
})

export default PokemonCard;
