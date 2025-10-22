import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}> 

        <View style={styles.header}></View>

        <View style={styles.section}>
            <Text style={styles.textoPrincipal}> TypeScript </Text>
            <Text style={styles.textoSecundario}> Saiba mais sobre essa indispensável linguagem </Text>
            <TouchableOpacity>
              <Image 
                style={styles.image}
                source ={{uri:'https://miro.medium.com/v2/resize:fit:1400/0*4s4Mu_hI_jR56iXg.png'}}
              ></Image> 
            </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>TypeScript é uma linguagem de programação de código aberto,
                desenvolvida pela Microsoft, 
                que se baseia em JavaScript e adiciona tipagem estática opcional ao código. </Text>

          <Text style={styles.text}>Essencialmente, é um superset de JavaScript, 
            o que significa que todo código JavaScript válido é também código TypeScript válido. </Text>
        </View>

        <View style={styles.viewContato}>
          <Text style={styles.contato}>Entre em Contato Conosco:</Text>
          <TextInput style={styles.input}
           placeholder="E-mail">
          </TextInput>
          <TextInput style={styles.inputMens}
           placeholder="Mensagem">
          </TextInput>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.botao}>Enviar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.header}></View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    height: 50,
    width: 375,
    backgroundColor: '#000080',
  },
  textoPrincipal:{
    fontSize: 40,
    fontWeight: 700,
    color: '#3178c6',
    textAlign: 'center',
    margin: 10,
  },
  textoSecundario:{
    fontSize: 30,
    fontWeight: 500,
    color: '#000',
    textAlign: 'center',
  },
  image: {
    height: 150,
    width: 300,
    alignSelf: 'center',
    margin: 10,
    borderRadius: 30,
  },
  text:{
    fontSize: 25,
    fontWeight: 100,
    color: '#000',
    textAlign: 'center',
    margin: 10,
  },
  contato:{
    fontSize: 25,
    fontWeight: 600,
    color: '#000',
    textAlign: 'left',
    margin: 10,
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderColor: '#000080',
    borderRadius: 10,
  },
  inputMens:{
    height: 60,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderColor: '#000080',
    borderRadius: 10,
  },
  button:{
    height: 50,
    width: 200,
    backgroundColor: '#3178c6', 
    borderRadius: 10,
    alignSelf: 'center',
    margin: 20,
  },
  botao:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
  }
});
