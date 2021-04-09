import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackgroundBase } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from '../../components/FadeInImage';
import { RootStackParams } from '../../navigator/Navigator'


interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({navigation, route}: Props) => {
    const { simplePokemon, color } = route.params
    const {name, id, picture} = simplePokemon

    const {top} = useSafeAreaInsets();

    return (


        // HEADER CONTAINER
        <View style={{
            ...styles.headerContainer,
            backgroundColor: color,
        }}>
            <TouchableOpacity
            onPress={()=>navigation.pop()}
                activeOpacity={0.8}
                style={{...styles.backButton,
                    top: top +5
                }}
            >
                <Icon
                name='arrow-back-outline'
                color='white'
                size={43}
                />
            </TouchableOpacity>

            {/* NOMBRE DEL POKEMON */}
            <Text
            style={{
                ...styles.name,
                top: top + 45
            }}
            >
                {name}{'\n#'} {id}
            </Text>

            {/* POKEBOLA DE FONDO */}

            <Image
                source={require('../../assets/pokebola-blanca.png')}
                style={styles.pokeball}
            />

            <FadeInImage
                uri={picture}
                style={styles.pokemonImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        height: 370,
        zIndex: 999,
        alignItems:'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000
    },
    backButton:{
        position:'absolute',
        left: 20
    },
    name:{
        color:'black',
        fontWeight: "900",
        alignSelf: 'flex-start',
        fontSize: 40,
        left: 20

    },
    pokeball:{
        width: 250,
        height: 250,
        opacity: 0.7
    },
    pokemonImage:{
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: 0
    }
})

export default PokemonScreen
