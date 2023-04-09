import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function Ingredients(){
  return(
    <View style={styles.container}>
      <Text>Massa de pizza</Text>
      <Text>100g</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FFF',
    marginBottom: 14,
    flexDirection: 'row'
  }
})