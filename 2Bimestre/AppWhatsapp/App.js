import React from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Cabecalho from './components/Cabecalho.js';
import Menu from './components/Menu.js';

const DATA = [
  {
    id: 1,
    name: 'Beatriz',
    message: 'Bom dia',
    image: require("./assets/images/image1.jpeg"),
    hour: '15:0',
    notification: 2,
  },
  {
    id: 2,
    name: 'Carla',
    message: 'Gostaria muito que vc fosse',
    image: require("./assets/images/maos.jpg"),
    hour: '15:1',
    notification: 1,
  },
  {
    id: 3,
    name: 'Geovanna',
    message: 'Obrigada',
    image: require("./assets/images/image3.jpeg"),
    hour: '20:4',
    notification: 5,
  },
  {
    id: 4,
    name: 'Emanuely',
    message: 'Bom fim de semana',
    image: require("./assets/images/image4.jpeg"),
    hour: '18:3',
    notification: 1,
  },
  {
    id: 5,
    name: 'Roberto',
    message: 'Parabéns!👍',
    image: require("./assets/images/casal.jpg"),
    hour: '15:1',
    notification: 1,
  },
  {
    id: 6,
    name: 'Pai❤️',
    message: 'Bom dia filha!',
    image: require("./assets/images/paisagem.jpeg"),
    hour: '05:1',
    notification: 1,
  },
  {
    id: 7,
    name: 'grupo da sala DS',
    message: 'joão: prova sexta-feira',
    image: require("./assets/images/goku.webp"),
    hour: '15:1',
    notification: 1,
  },
  {
    id: 8,
    name: 'Nicoly',
    message: 'Te amo',
    image: require("./assets/images/image2.jpeg"),
    hour: '08:3',
    notification: 3,
  },
  {
    id: 9,
    name: 'Paulo',
    message: 'Que bom que gostou do produto🤩',
    image: require("./assets/images/link.avif"),
    hour: 'ontem',
    notification: 1,
  },
  {
    id: 10,
    name: 'Primo Bruno',
    message: 'Que horas é a festa?',
    image: require("./assets/images/homemAranha.jpg"),
    hour: '06/09/202',
    notification: 1,
  },
];

const ItemChat = ({ item }) => (
  <TouchableOpacity>
      <View style={styles.item}>
        <TouchableOpacity><Image source={item.image} style={styles.image} /></TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.hour}>{item.hour}</Text>
      <Text style={styles.noti}>{item.notification} </Text>
    </View>
  </TouchableOpacity>
);

const App = () => {
  return (
       <SafeAreaProvider>

      <SafeAreaView style={styles.container}>
        <Cabecalho />
      <FlatList
        data={DATA}
        renderItem={({item}) => <ItemChat item={item}/> }
        keyExtractor={item => item.id}
        />
        <Menu />
        </SafeAreaView>
      </SafeAreaProvider>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    experimental_backgroundImage: 'url(https://i.pinimg.com/736x/50/35/be/5035be08b845784629ccd2a76119b40e.jpg)',
  },
  item: {
  backgroundColor: '#fdfdfdff',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: 10,
},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    color: '#020101',
  },
  hour: {
    fontSize: 14,
    color: '#020101',
  },
  noti: {
    fontSize: 14,
    color: '#020101',
  }
});

export default App;