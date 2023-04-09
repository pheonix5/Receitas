import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  TouchableOpacity, 
  FlatList } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import Logo from '../../components/logo'
import api from '../../services/api'
import FoodList from '../../components/foodlist';

import { useNavigation } from '@react-navigation/native'

import { Text as MotiText } from 'moti'

export default function Home(){
    const [inputValue, setInputValue] = useState("")
    const [foods, setFoods] = useState([]);

    const navigation = useNavigation();

    function handleSearch(){
       if(!inputValue) return;

       let input = inputValue;
       navigation.navigate("Search", { name: input });
       setInputValue('')
    }

    useEffect(() => {
     async function fetchApi(){
        const response = await api.get("/foods")
        setFoods(response.data);
      }

      fetchApi();
    }, [])

    return(
      <SafeAreaView style={styles.container}>
        <Logo/>
        <MotiText 
          style={styles.title}

        >Encontre a receita</MotiText>

        <MotiText style={styles.title}>que combina com você</MotiText>

        <View style={styles.form}>
          <TextInput 
              value={inputValue}
              onChangeText={ (text) => setInputValue(text)}
              placeholder="Digite o nome da camida.."
              style={styles.input}
          />

          <TouchableOpacity onPress={handleSearch}>
            <Ionicons name="search" size={28} color="#4CBE6C"/>
          </TouchableOpacity>
        </View>

        <FlatList 
          data={foods}
          keyExtractor={ (item) => String(item.id)}
          renderItem={ ({ item }) => <FoodList data={item} /> }
          showsVerticalScrollIndicator={false}
        />

      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f2f9ff',
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14
  },
  title:{
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0e0e0e'
  },
  form:{
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ECECEC',
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input:{
    width: '90%',
    maxWidth:'90%',
    height: 54,
  }
})