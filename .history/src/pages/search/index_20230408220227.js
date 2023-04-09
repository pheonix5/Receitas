import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'

import { useRoute } from '@react-navigation/native'

export default function Search({  }){
    const route = useRoute();

    return(
        <View style={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#f3f9ff',
      paddingStart: 14,
      paddingEnd: 14,
      paddingTop: 14
    }
})