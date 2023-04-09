import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

import { Feather } from '@expo/vector-icons'

export default function VideoView({ handleClose, videoUrl }) {
 return (
   <SafeAreaView style={styles.contaier}>
    <TouchableOpacity style={styles.backButton}>
      <Feather name='arrow-left' size={24} color="#FFF"/>
      <Text style={styles.backText}>Voltar</Text>
    </TouchableOpacity>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contaier:{
    flex: 1,
    width: '100%',
  },
  backButton:{
    width: '100%',
    backgroundColor: '#4cbe6c',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 14,
  },
  backText:{
    color: '#FFF',
    fontSize: 18,
    fontWeight: 500,
    marginLeft: 14,
  }
})