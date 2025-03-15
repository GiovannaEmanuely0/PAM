import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>

      <View style={styles.container}>
            <Text style={styles.titulo}>Lutas</Text>
        <View style={styles.divisao}>
          <Text style={styles.subtitulo}>MMA</Text>
          <Text style={styles.texto}>
              O MMA, ou Mixed Martial Arts, é um esporte que combina técnicas de artes marciais como as do judô, caratê, jiu-jtsu, muay-thai, boxe, kickboxing e do wrestling.
          </Text>
            <Image
              style={styles.imagem}
              source={{uri:'https://m.media-amazon.com/images/I/61IHxEraC9L.jpg'}}
            ></Image>
        </View>
        <View style={styles.divisao}>
            <Text style={styles.subtitulo}> Boxe</Text>
            <Text style={styles.texto}>
                O boxe é uma modalidade de combate que utiliza apenas os punhos. Dois lutadores se enfrentam em um ringue e utilizam luvas. O objetivo é nocautear o adversário ou marcar mais pontos
            </Text>
            <Image style={styles.imagem}
              source={{uri:'https://down-br.img.susercontent.com/file/07ff196e443d693832e348dc12cb8fa2'}}
            ></Image>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdd3ce',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#013d5a',
  },
  divisao:{
    height: 350,
    width: 350,
    backgroundColor: '#fcf3e3',
    padding: 5,
    margin: 5,
    borderRadius: 15,
  },
  titulo:{
    fontSize:25,
    fontWeight: 700,
    color: '#013d5a',
  },
  subtitulo:{
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 20,
    color: '#013d5a',
  },
  texto: {
    fontSize: 15,
    textAlign: 'justify',
    color: '#013d5a',
  },
  imagem:{
    marginLeft: 70,
    height: 200,
    width: 200,
  }
});
