import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function FoodList({ data }){
  return(
    <TouchableOpacity>
      <Text>{data.name}</Text>
    </TouchableOpacity>
  )
}