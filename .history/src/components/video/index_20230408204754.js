import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

import { Feather } from '@expo/vector-icons'

export default function VideoView({ handleClose, videoUrl }) {
 return (
   <SafeAreaView style={styles.contaier}>
    <TouchableOpacity>
      <Feather name='arrow-left' size={24} color="#FFF"/>
      <Text>Voltar</Text>
    </TouchableOpacity>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contaier:{
    flex: 1,
    width: '100%',
  }
})