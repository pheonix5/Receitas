import React, { useLayoutEffect} from "react";
import { View, Text, StyleSheet } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'


export default function Detail({  }){
    const route = useRoute();

    useLayoutEffect(() => {
      
    }, [])

    return(
        <View style={styles.container}>
            <Text>Página detalhes da receita</Text>
            <Text>{route.params?.data.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'blue'
    }
})