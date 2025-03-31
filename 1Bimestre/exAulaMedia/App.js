import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default function App() {
  const [n1, setN1] = useState()
  const [n2, setN2] = useState()
  const [n3, setN3] = useState()
  const [n4, setN4] = useState()
  const [noticia,setNoticia] = useState()
  const [resultado, setResultado] = useState()

  const media = ()=>{
    const soma = parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4)
    const media = soma/4
    const news2 = 'Reprovado!' 
    const news = 'Aprovado!'
    const news3 = 'Valor inválido!'
    
    setResultado(media)

    if(media<6){
      setNoticia(news2)
    }else if(media>5 && media<11){
      setNoticia(news)
    }else{
      setNoticia(news3)
    }
  }

  return (
      <View style={styles.container}>
           <Text style={styles.titulo}> Notas </Text>
           <View>
              <TextInput 
                style = {styles.input}
                placeholder='Digite a nota 1'
                autoFocus={true}
                onChangeText={text => setN1(text)}
              >
              </TextInput>
              <TextInput 
                style = {styles.input}
                placeholder='Digite a nota 2'
                onChangeText={text => setN2(text)}
              >
              </TextInput>
              <TextInput 
                style = {styles.input}
                placeholder='Digite a nota 3'
                onChangeText={text => setN3(text)}
              >
              </TextInput>
              <TextInput 
                style = {styles.input}
                placeholder='Digite a nota 4'
                onChangeText={text => setN4(text)}
              >
              </TextInput>
           </View>
           <Button
            style={styles.button}
              title = 'Calcular media'
              onPress={()=>media()}
            >
           </Button>
           <View>
              <Text style={styles.subTitulo}>Resultado da Média: {resultado}</Text>
              <Text style={styles.subTitulo}>Status do aluno: {noticia}</Text>
           </View>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#023359',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
  },
  input:{
    borderWidth: 1,
    borderColor: '#fff',
    height: 50,
    fontSize: 30,
    textAlign: 'center',
    width: 300,
    margin: 10,
    border: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#636363',
  },
  subTitulo:{
    fontSize: 30,
    fontWeight: 400,
    color: '#ff9800',
    textAlign: 'center',
  },
  titulo:{
    fontSize: 50,
    fontWeight: 700,
    color: '#ff9800',
    textAlign: 'center',
  },
  button:{
    height: 40,
    width: 100,
    backgroundColor: '#800080',
  }
});
