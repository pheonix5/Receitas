import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'

import { useRoute } from '@react-navigation/native'

export default function Search({  }){
    return(
        <View style={styles.container}>
            <Text>Página Buscar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green'
    }
})