
import AsyncStorage from '@react-native-async-storage/async-storage'

// Buscar Favoritos
// Salvar um novo Favorito
// Remover um Favorito da lista

export async function getFavorites(key){
  const favorites = await AsyncStorage.getItem(key)
  return JSON.parse(favorites) || [];

}

export async function saveFavorites(key, newItem){
  let myFavorites = await getFavorites(key);

  let hasItem = myFavorites.some( item => item.id === newItem.id)

  if(hasItem){
    console.log('Esse item ja está salvo na sua lista');
    return;
  }

  myFavorites.push(newItem)

  await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
  console.log(Salvo com sucesso);
}

export async function removeItem(){

}

export async function isFavorite(){

}