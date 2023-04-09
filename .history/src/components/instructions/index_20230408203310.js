import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function Instructions({ data, index }){
  return(
    <View style={styles.container}>
      <Text>{data.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    padding: 8
  }
})