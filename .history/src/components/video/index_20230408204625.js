import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function VideoView({ handleClose, videoUrl }) {
 return (
   <SafeAreaView>
    <Text>Testando</Text>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contaier:{
    flex: 1,
    width: '100%',
  }
})