import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function Detail(){
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