
import AsyncStorage from '@react-native-async-storage/async-storage'

// Buscar Favoritos
// Salvar um novo Favorito
// Remover um Favorito da lista

export async function getFavorites(key){
  const favorites = await AsyncStorage.getItem(key)
  return JSON.parse(favorites) || [];

}

export async function saveFavorites(){

}

export async function removeItem(){

}

export async function isFavorite(){

}