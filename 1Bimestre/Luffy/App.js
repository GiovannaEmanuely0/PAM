import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
// Parte de importações, os componenetes precisam ser importados
//Depois das importações bási, importe o Image

//Parte da função, onde aparece a parte lógica e gráfica 
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        {/* Assim que se coloca uma "classe" em react native */}
          {/* style é o estilo e styles é a constante e titulo a "classe" */}
          <Text style={styles.titulo}>Hello World, my friends</Text>
          <Text style={styles.subTitulo}>Aqui é a Gica</Text>
      </View>
      <View>
          {/* colocar uma imagem com uma url online, primeiro a classe e o link */}
          <Image
            style={styles.image}
            source={{uri:'https://i.pinimg.com/736x/e8/54/7c/e8547ced9c65f8eb78c80de40ccaeb02.jpg'}}
          >
          </Image>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
//Parte de estilização
//Declara uma constante e cria um tipo de estilo dentro da constante
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa400',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: '#fff',
    fontSize: 25,
    fontWeight: 700,
  },
  subTitulo:{
    color: '#fff',
    fontSize: 15,
  },
  image:{
    height: 300,
    width: 300,
  }
});
