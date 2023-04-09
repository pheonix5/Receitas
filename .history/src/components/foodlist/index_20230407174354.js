import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default function FoodList({ data }){
  return(
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Image 
        source={{ uri:data.cover }}
        style={styles.cover}
      />

      <View>
        <Text>Strogonoff</Text>
        <Text>10 Igredientes | 60 min</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    marginBottom: 14,
  },
  cover:{
    width: '100%',
    height: 200,
    borderRadius: 14,
  }
})