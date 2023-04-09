import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'

export default function Detail({  }){
    const route = useRoute();

    return(
        <View style={styles.container}>
            <Text>Página detalhes da receita</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'blue'
    }
})