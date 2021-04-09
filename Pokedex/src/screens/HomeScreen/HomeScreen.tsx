import React from 'react'
import { Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../../theme/appTheme'
//images
const pokebola = require('../../assets/pokebola.png') 


const HomeScreen = () => {

  const { top } = useSafeAreaInsets()
  
    return (
        <>
        <Image
        source={pokebola}
        style={styles.pokebolaBG}
      />
      <Text
      style={{...styles.title, ...styles.globalMargin, top: top + 20}}
      >
        POKEDEX HOME SCREEN
      </Text>
      <Icon
      name="home"
      color="red"
      size={50}
      />
      
    </>
    )
}

export default HomeScreen