import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';


// SIMENSIONS

const width = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon;
}

const PokemonCard = ({pokemon}: Props) => {
    return (
        <TouchableOpacity
        activeOpacity={ 0.9}
        >
            <View 
            style={{
                ...styles.cardContainer,
                width:width * 0.4
                }}>
            {/* POKEMON NAME AND ID */}
            <View>
                <Text style={styles.name}>
                    {pokemon.name}
                    {'\n#'+pokemon.id}
                </Text>
            </View>



            </View>

        </TouchableOpacity>
        // <FadeInImage
        // uri={item.picture}
        // style={{
        //   width:100,
        //   height:100
        // }}
        ///>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        backgroundColor:'red',
        borderColor:'blue',
        height:120,
        width: 160,
        borderRadius:10,
        marginBottom:25,
    },
    name:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,

    }
})

export default PokemonCard;
