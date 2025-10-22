import * as React from 'react';
import { RadioButton } from 'react-native-paper'; 
import { View, StyleSheet, ScrollView, TextInput, Text, Image, Linking, TouchableHighlight, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

function HomeScreen() {
  const [metodo, setMetodo] = React.useState('baseAltura'); // 'baseAltura' ou 'tresLados'
  const [base, setBase] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [ladoA, setLadoA] = React.useState('');
  const [ladoB, setLadoB] = React.useState('');
  const [ladoC, setLadoC] = React.useState('');
  const [area, setArea] = React.useState(null);
  const [tipo, setTipo] = React.useState('');

  const calcular = () => {
    if (metodo === 'baseAltura') {
      const b = parseFloat(base);
      const h = parseFloat(altura);
      if (isNaN(b) || isNaN(h)) {
        alert('Preencha base e altura corretamente!');
        return;
      }
      const areaCalculada = (b * h) / 2;
      setArea(areaCalculada.toFixed(2));
      setTipo('');
    } else if (metodo === 'tresLados') {
      const a = parseFloat(ladoA);
      const b = parseFloat(ladoB);
      const c = parseFloat(ladoC);
      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Preencha todos os lados corretamente!');
        return;
      }

      // Verifica se os lados formam um triângulo válido
      if (a + b <= c || a + c <= b || b + c <= a) {
        alert('Os lados informados não formam um triângulo válido!');
        return;
      }

      const s = (a + b + c) / 2;
      const areaCalculada = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      setArea(areaCalculada.toFixed(2));

      // Verifica tipo do triângulo
      if (a === b && b === c) {
        setTipo('Equilátero');
      } else if (a === b || a === c || b === c) {
        setTipo('Isósceles');
      } else {
        setTipo('Escaleno');
      }
    }
  };

  return (
      <View style={styles.containerHome}>
        <View style={styles.secaoDesafio}>

          <Text style={styles.title}>Calcule a área do triângulo</Text>

          <Text style={styles.subtitle}>Escolha o método de cálculo:</Text>

          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TouchableOpacity style={styles.botoes} title="Base e Altura" onPress={() => setMetodo('baseAltura')}> Base e Altura</TouchableOpacity>
            <TouchableOpacity style={styles.botoes} title="3 Lados (Heron)" onPress={() => setMetodo('tresLados')} > 3 Lados (Heron)</TouchableOpacity>
          </View>

          {metodo === 'baseAltura' && (
            <>
              <Text style={styles.subtitle}>Digite a base:</Text>
              <TextInput
                placeholder="Base"
                style={styles.input}
                keyboardType="numeric"
                value={base}
                onChangeText={setBase}
              />

              <Text style={styles.subtitle}>Digite a altura:</Text>
              <TextInput
                placeholder="Altura"
                style={styles.input}
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
              />
            </>
          )}

          {metodo === 'tresLados' && (
            <>
              <Text style={styles.subtitle}>Digite os três lados em m² ou cm²:</Text>
              <TextInput
                placeholder="Lado A"
                style={styles.input}
                keyboardType="numeric"
                value={ladoA}
                onChangeText={setLadoA}
              />
              <TextInput
                placeholder="Lado B"
                style={styles.input}
                keyboardType="numeric"
                value={ladoB}
                onChangeText={setLadoB}
              />
              <TextInput
                placeholder="Lado C"
                style={styles.input}
                keyboardType="numeric"
                value={ladoC}
                onChangeText={setLadoC}
              />
            </>
          )}

          <TouchableOpacity title="Calcular" onPress={calcular} style={styles.botoes}>Calcular</TouchableOpacity>

          {area && (
            <View style={styles.blocoResultado}>
              <Text style={styles.subtitle}>Área: {area} m² ou cm²</Text>
              {tipo !== '' && <Text style={styles.subtitle}>Tipo: {tipo}</Text>}
            </View>
          )}
        </View>
      </View>
  );
}


function NotificationsScreen() {
  const navigation = useNavigation();

  const abrirLinkExterno = () => {
    Linking.openURL('https://www.linkedin.com/in/giovanna-emanuely-673095343');
  }; 

  return (
    <ScrollView>
       <View style={styles.container2}>
              <Text style={styles.title}>Sobre nós</Text>
      
              <View style={styles.devDiv}>
                <Image
                  source={require('./assets/Bea.jpeg')}
                  style={styles.image}
                />
                <Text style={styles.subtitle}>Beatriz Pereira Moreira</Text>
                <Text style={styles.text2}> Email: beatrizpereiram2021@gmail.com </Text>
                <TouchableHighlight onPress={() => abrirLinkExterno()}>
                  <Text>Linkedin: Beatriz</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => abrirLinkExterno()}>
                  <Text>GitHub: Beatriz</Text>
                </TouchableHighlight>
              </View>
              <View  style={styles.devDiv}>
                <Image
                  source={require('./assets/Gica.jpeg')}
                  style={styles.image}
                />
      
                <Text style={styles.subtitle}>Giovanna Emanuely</Text>
      
                <Text style={styles.text2}> Email: giovannaEmma16@gmail.com </Text>
                <TouchableHighlight onPress={() => abrirLinkExterno()}>
                  <Text>Linkedin: Giovanna</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => abrirLinkExterno()}>
                  <Text>GitHub: Giovanna</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.devDiv}>
                <Image
                  source={require('./assets/nic.jpeg')}
                  style={styles.image}
                />
                <Text style={styles.subtitle}>Nicoly Lopes Araujo</Text>
                <Text style={styles.text2}> Email: nickloaraujo12@gmail.com</Text>
                <TouchableHighlight onPress={() => abrirLinkExterno()}>
                  <Text>Linkedin: Nicoly</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => abrirLinkExterno()}>
                  <Text>GitHub: Nicoly</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.devDiv}>
                <Image
                  source={require('./assets/mateus.jpeg')}
                  style={styles.image}
                />
                <Text style={styles.subtitle}>Mateus Vitor Oliveira Nogueira</Text>
                <Text style={styles.text2}> Email: mateusvitor@gmail.com </Text>
                <TouchableHighlight onPress={() => abrirLinkExterno()}>
                  <Text>Linkedin: Mateus</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => abrirLinkExterno()}>
                  <Text>GitHub: Mateus</Text>
                </TouchableHighlight>
              </View>
      
              <Text style={styles.text}>
                Somos alunos da ETEC Guaianazes, segundo ano do Ensino Médio Técnico em
                Desenvolvimento de Sistemas.
              </Text>
        
      
              <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
              <Text style={styles.botaoTexto}>Voltar</Text>
              </TouchableOpacity>
            </View>
    </ScrollView>
  );
}

function MathChallengeScreen() {
  const [resposta, setResposta] = React.useState('');
  const [resultado, setResultado] = React.useState('');
  const [indice, setIndice] = React.useState(0);

  const perguntas = [
    { pergunta: '3 + 2', resposta: 5 },
    { pergunta: '10 - 7', resposta: 3 },
    { pergunta: '8 x 7', resposta: 56 },
    { pergunta: '10 / 5', resposta: 2 },
    { pergunta: '11 - 2 + 5', resposta: 14 },
    { pergunta: '10 x 7 + (5 - 2)', resposta: 73 },
  ];

  const verificarResposta = () => {
    const respostaCerta = perguntas[indice].resposta;

    if (parseInt(resposta) === respostaCerta) {
      setResultado('Certo');

      // Avança para a próxima pergunta após 1 segundo
      setTimeout(() => {
        setResposta('');
        setResultado('');
        setIndice((prev) => prev + 1);
      }, 1000);
    } else {
      setResultado('Errado');
    }
  };

  // Quando acabar todas
  if (indice >= perguntas.length) {
    return (
      <View style={styles.containerDesafio}>
        <Text style={styles.title}>Desafio Matemático</Text>
        <Text style={styles.subtitle}>Parabéns! Você completou o desafio! 🎉</Text>
      </View>
    );
  }

  return (
    <View style={styles.containerDesafio}>
      <View style={styles.secaoDesafio}>

        <Text style={styles.title}>Desafio Matemático</Text>
        <Text style={styles.subtitle}>
          Quanto é: {perguntas[indice].pergunta} =
        </Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={resposta}
          onChangeText={setResposta}
          placeholder="Digite sua resposta"
        />

        <TouchableOpacity style={styles.botoes} title="Enviar" onPress={verificarResposta}>Resultado</TouchableOpacity>

        {resultado !== '' && (
          <Text
            style={[
              styles.subtitle,

              { fontWeight: 'bold',color: resultado === 'Certo' ? '#fff' : 'red' },
            ]}
          >
            {resultado}
          </Text>
        )}
      </View>
    </View>
  );
}

function MathQuizScreen() {
  const [indice, setIndice] = React.useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = React.useState('');
  const [resultado, setResultado] = React.useState('');

  const perguntas = [
    { pergunta: '3 + 2', resposta: '5', alternativas: ['5', '2', '7', '9'] },
    { pergunta: '10 - 7', resposta: '3', alternativas: ['4', '1', '3', '7'] },
    { pergunta: '8 x 7', resposta: '56', alternativas: ['53', '56', '59', '51'] },
    { pergunta: '10 / 5', resposta: '2', alternativas: ['3', '5', '1', '2'] },
    { pergunta: '11 - 2 + 5', resposta: '14', alternativas: ['13', '11', '14', '9'] },
    { pergunta: '10 x 7 + (5 - 2)', resposta: '73', alternativas: ['69', '77', '73', '76'] },
  ];

  const verificarResposta = () => {
    if (respostaSelecionada === perguntas[indice].resposta) {
      setResultado('Certo');

      setTimeout(() => {
        setIndice((prev) => prev + 1);
        setRespostaSelecionada('');
        setResultado('');
      }, 1000);
    } else {
      setResultado('Errado');
    }
  };

  if (indice >= perguntas.length) {
    return (
      <View style={styles.containerQuiz}>
        <Text style={styles.title}>
          Parabéns!
        </Text>
        <Text style={styles.subtitle}>
          Você completou o Quiz Matemático com sucesso!
        </Text>

      </View>
    );
  }

  return (
    <View style={styles.containerQuiz}>
      <View style={styles.secaoQuiz}>

        <Text style={styles.title}>
          Quiz Matemático
        </Text>

        <Text style={styles.subtitle} >
          Quanto é: {perguntas[indice].pergunta} =
        </Text>

        <RadioButton.Group
          onValueChange={(value) => setRespostaSelecionada(value)}
          value={respostaSelecionada}
        >
          {perguntas[indice].alternativas.map((alt, i) => (
            <View
              key={i}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <RadioButton style={styles.RadioButton} value={alt} />
              <Text style={{ fontSize: 20 , color: '#fff'}}>{alt}</Text>
            </View>
          ))}
        </RadioButton.Group>

        <TouchableOpacity style={styles.botoes} title="Enviar"
          onPress={verificarResposta}
          disabled={!respostaSelecionada}>Resultado</TouchableOpacity>

        {resultado !== '' && (
          <Text
            style={{
              fontSize: 25,
              marginTop: 15,
              fontWeight: 'bold',
              color: resultado === 'Certo' ? '#fff' : 'red',
            }}
          >
            {resultado}
          </Text>
        )}
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator({
  screens: {
    Home: HomeScreen,
    Notifications: NotificationsScreen,
    Desafio: MathChallengeScreen,
    QuizMatematico: MathQuizScreen,
  },
});

const Navigation = createStaticNavigation(Drawer);

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  container2:{
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#4009d7',
  },
  devDiv: {
    width: '90%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#4009d7',
  },
  botoes:{
    backgroundColor: "#d0c7fcff",
    height: 40,
    width: 130,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial",
    fontWeight: "bold",
  },
  containerHome: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#4009d7',
  },
  containerDesafio:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#4009d7',
  },
  containerQuiz:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#4009d7',
  },
  blocoResultado:{
    margin: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#d0c7fcff',
  },
  secaoDesafio:{
    borderWidth: 2,
    borderColor: '#ccc',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  secaoQuiz:{
    borderWidth: 2,
    borderColor: '#ccc',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingInline: 30,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    color: '#e4e4e5',
  },
  subtitle: {
    fontSize: 20,
    marginVertical: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
  text: {
    fontSize: 16,
    margin: 10,
    textAlign: 'center',
    color: '#e4e4e5',
  },
  text2: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 8,
    margin: 8,
    borderRadius: 6,
    width: 200,
    color: '#ffffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 15,
  },
   botao: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#4009d7',
  },
  RadioButton:{
    borderColor: '#fff',
  }
});