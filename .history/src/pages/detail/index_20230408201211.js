import React, { useLayoutEffect} from "react";
import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

import { Entypo, AntDesign } from '@expo/vector-icons'


export default function Detail({  }){
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
        headerRight: () => (
          <Pressable onPress={ () => console.log("testando")}>
            <Entypo 
              name="heart"
              size={28}
              color="#FF4141"
            />
          </Pressable>
          
        )
      })
    }, [navigation, route.params?.data])

    return(
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Pressable>
              <View style={styles.playIcon}>
                <AntDesign name="playcircleo" size={48} color="#FAFAFA"/>
              </View>
              <Image 
                source={{ uri: route.params?.data.cover }}
                style={styles.cover}
              />
            </Pressable>

          <View style={styles.headerDetails}>
            <View>
              <Text style={styles.title}>{route.params?.data.name}</Text>
              <Text style={styles.ingredientsText}>Ingredientes ({route.params?.data.total_ingredients})</Text>
            </View>
          </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f3f9ff',
        paddingTop: 14,
        paddingEnd: 14,
        paddingStart: 14,
    },
    cover:{
      height: 200,
      borderRadius: 14,
      width: '100%',
    },
    playIcon:{
      position: 'absolute',
      zIndex: 9,
      top: 0, left: 0, right: 0, bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title:{
      fontSize: 18,
      marginTop: 14,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 4
    },
    ingredientsText:{
      marginBottom: 14
    }
})