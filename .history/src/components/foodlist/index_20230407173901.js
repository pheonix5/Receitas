import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function FoodList({ data }){
  return(
    <TouchableOpacity style={styles.container}>
      <Text>{data.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    marginBottom: 14
  }
})