import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

import { Feather } from '@expo/vector-icons'

export default function VideoView({ handleClose, videoUrl }) {
 return (
   <SafeAreaView style={styles.contaier}>
    <TouchableOpacity>
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