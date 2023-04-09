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
              <View>
                <AntDesign 
                  name="playcircleo" size={44} color="#FAFAFA"
                />
              </View>
              <Image 
                source={{ uri: route.params?.data.cover }}
                style={styles.cover}
              />
            </Pressable>
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
    }
})