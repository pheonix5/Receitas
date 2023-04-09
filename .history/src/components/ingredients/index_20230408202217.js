import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function Ingredients(){
  return(
    <View style={styles.container}>
      <Text style={styles.name}>Massa de pizza</Text>
      <Text>100g</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FFF',
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 4
  },
  name:{
    fontWeight: 500,
    fontSize: 16,
  }
})