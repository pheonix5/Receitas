import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function Ingredients(){
  return(
    <View style={styles.container}>
      <Text>Massa de pizza</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FFF'
  }
})