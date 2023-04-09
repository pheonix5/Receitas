import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default function Favorites(){
    return(
        <SafeAreaView style={styles.container}>
            <Text>Página de Favoritos!!</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F3F9FF'
    }
})