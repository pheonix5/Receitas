import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function FoodList({ data }){
  return(
    <View>
      <Text>{data.name}</Text>
    </View>
  )
}