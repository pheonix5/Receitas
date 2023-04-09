import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'

import { useRoute } from '@react-navigation/native'

export default function Search({  }){
    const route = useRoute();

    return(
        <View style={styles.container}>
            <Text>{route.params?.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green'
    }
})