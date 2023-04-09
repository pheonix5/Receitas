import React, { useState, useEffect} from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default function Favorites(){
    const [receipes, setReceipes] = useState([]);


    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Receitas Favoritas</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F3F9FF',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 36
    },
    title:{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 24,
    }
})