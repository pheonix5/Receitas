import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default function FoodList({ data }){
  return(
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Image 
        source={{ uri:data.cover }}
        style={styles.cover}
      />

      <View style={styles.info}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description}>{data.total_ingredients} Igredientes | {data.time} min</Text>
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
  },
  info:{
    position: 'absolute',
    bottom: 14,
    left: 14,
    zIndex: 99
  },
  name:{
    fontSize: 18,
    color: "#FFF",
    fontWeight: 'bold'
  },
  description:{
    color: '#FFF'
  }
})