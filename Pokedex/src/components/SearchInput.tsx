import React, { useState, useEffect } from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
    onDebounce: (value : any) => void;
    style?: StyleProp<ViewStyle>
}


export const SearchInput = ({style, onDebounce}:Props) => {

    const [textValue, setTextValue] = useState('')

    let debounceValue = useDebouncedValue(textValue, 1500)

    useEffect(() => {
        onDebounce(debounceValue);
        // console.log(debounceValue)
        
    }, [debounceValue])

    return (
        <View style={{...styles.container,
        ...style as any 
        }}>
            <View style={{...styles.textBackground}}>
                <TextInput
                placeholder='Search Pokemon'
                style={styles.textInput}
                autoCapitalize='none'
                autoCorrect={false}
                value={textValue}
                onChangeText={setTextValue}
                />
                <Icon
                name='search-outline'
                color='grey'
                size={30}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10
        // backgroundColor:'red'
    },
    textBackground:{
        backgroundColor: '#F3F1F3',
        borderRadius:40,
        height:40,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textInput:{
        flex:1,
        fontSize: 18
    }
})
