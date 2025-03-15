import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.container}>

        <View style={styles.div2}>

        <View style={styles.cont}>

          <Image style={styles.image}
              source={{uri:'https://blog.rocketseat.com.br/content/images/size/w1000/2024/02/native.png'}}
            ></Image>
          <Image style={styles.image}
              source={{uri:'https://zup.com.br/wp-content/uploads/2021/03/5ce2fde702ef93c1e994d987_flutter.png'}}
            ></Image>
          <Image style={styles.image}
              source={{uri:'https://miro.medium.com/v2/resize:fit:1400/1*LuY-MMFlMP1RU950-F2D6A.png'}}
            ></Image>
          <Image style={styles.image}
              source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6Md-DdG0--Ch_aHZhuUDvN1exUz-iY83AQ&s'}}
            ></Image>
          </View>
        </View>


      <View style={styles.div}>
        <View style={styles.desc}>
              <Text style={styles.titulo}>React Native</Text>
              <Text style={styles.texto}>
                React Native é uma biblioteca JavaScript desenvolvida pelo Facebook para construir aplicativos móveis nativos. Ele usa o React (uma biblioteca de UI para a web) e permite criar aplicativos móveis para iOS e Android com uma base de código compartilhada.
              </Text>
        </View>
        <View style={styles.vanDes}>
              <Text style={styles.subTitulo}>Vantagens:</Text>
              <Text style={styles.texto}>
                1. Desenvolvimento rápido: Permite escrever código uma vez e implantá-lo em ambas as plataformas (iOS e Android).
              </Text>
              <Text style={styles.texto}>
                2. Comunidade ativa e vasto ecossistema: Há uma enorme comunidade e muitos pacotes prontos para uso.
              </Text>
              <Text style={styles.subTitulo}>Desvantagens:</Text>
              <Text style={styles.texto}>
                1. Desempenho inferior: Não é tão eficiente quanto os aplicativos nativos em termos de desempenho, especialmente para apps que exigem gráficos pesados ou desempenho em tempo real.
              </Text>
              <Text style={styles.texto}>
                2. Manutenção de dependências: Algumas dependências podem ser complicadas de manter, já que o React Native usa pacotes de terceiros para acesso a recursos nativos.
              </Text>
        </View>
      </View>

      <View style={styles.div}>
        <View style={styles.desc}>
              <Text style={styles.titulo}>Flutter</Text>
              <Text style={styles.texto}>
                Flutter é um framework da Google que usa a linguagem de programação Dart para criar aplicativos móveis nativos. Ele permite o desenvolvimento de interfaces ricas e nativas para iOS e Android a partir de uma única base de código.
              </Text>
        </View>
        <View style={styles.vanDes}>
              <Text style={styles.subTitulo}>Vantagens:</Text>
              <Text style={styles.texto}>
                1. Desempenho nativo: Como o Flutter compila diretamente para código nativo, os aplicativos são mais rápidos do que os desenvolvidos em outras soluções multiplataforma.
              </Text>
              <Text style={styles.texto}>
                2. Personalização e UI rica: Oferece um conjunto poderoso de widgets personalizáveis, permitindo criar interfaces únicas e nativas para ambas as plataformas.
              </Text>
              <Text style={styles.subTitulo}>Desvantagens:</Text>
              <Text style={styles.texto}>
                1. Curva de aprendizado do Dart: A linguagem Dart não é tão popular quanto JavaScript, o que pode ser um obstáculo para novos desenvolvedores.
              </Text>
              <Text style={styles.texto}>
                2. Tamanho do aplicativo: O Flutter tende a gerar aplicativos maiores em comparação com outras tecnologias, o que pode ser um problema para dispositivos com pouca memória ou armazenamento.
              </Text>
        </View>
      </View>

      <View style={styles.div}>
        <View style={styles.desc}>
              <Text style={styles.titulo}>Swift-para IOS</Text>
              <Text style={styles.texto}>
                Swift é a linguagem de programação da Apple para criar aplicativos nativos para dispositivos iOS, macOS, watchOS e tvOS. Ela foi projetada para ser segura, rápida e fácil de usar.
              </Text>
        </View>
        <View style={styles.vanDes}>
              <Text style={styles.subTitulo}>Vantagens:</Text>
              <Text style={styles.texto}>
                1. Desempenho nativo: Como é a linguagem oficial da Apple, os aplicativos escritos em Swift têm desempenho excelente, aproveitando ao máximo o hardware do dispositivo.
              </Text>
              <Text style={styles.texto}>
                2. Segurança: Swift é projetado com segurança em mente, o que ajuda a prevenir muitos tipos de erros comuns em programação.
              </Text>
              <Text style={styles.subTitulo}>Desvantagens:</Text>
              <Text style={styles.texto}>
                1. Exclusivo para o ecossistema Apple: Swift só pode ser usado para criar aplicativos para plataformas Apple, o que significa que você precisa aprender outra tecnologia (como Kotlin ou React Native) para desenvolver para Android.
              </Text>
              <Text style={styles.texto}>
                2. Curva de aprendizado: Embora seja mais fácil do que Objective-C, ainda pode ser difícil para iniciantes se acostumarem com a sintaxe e os conceitos.
              </Text>
        </View>
      </View>

      <View style={styles.div}>
        <View style={styles.desc}>
              <Text style={styles.titulo}>Kotlin-para Android</Text>
              <Text style={styles.texto}>
                Kotlin é uma linguagem moderna e concisa desenvolvida pela JetBrains e agora oficialmente suportada pelo Google para o desenvolvimento de aplicativos Android. Ela é totalmente interoperável com Java, mas oferece uma sintaxe mais limpa e recursos modernos.
              </Text>
        </View>
        <View style={styles.vanDes}>
              <Text style={styles.subTitulo}>Vantagens:</Text>
              <Text style={styles.texto}>
                1. Interoperabilidade com Java: Kotlin pode ser usado ao lado de Java em projetos Android existentes, o que facilita a migração.
              </Text>
              <Text style={styles.texto}>
                2. Sintaxe mais limpa e moderna: Kotlin oferece uma sintaxe mais concisa e expressiva, o que facilita a leitura e a manutenção do código.
              </Text>
              <Text style={styles.subTitulo}>Desvantagens:</Text>
              <Text style={styles.texto}>
                1. Exclusivo para Android: Assim como o Swift para iOS, o Kotlin é usado apenas para desenvolver aplicativos Android. Você precisará de outra tecnologia (como React Native ou Flutter) para criar aplicativos iOS.
              </Text>
              <Text style={styles.texto}>
                2. Curva de aprendizado para desenvolvedores Java: Embora Kotlin seja mais conciso que Java, desenvolvedores que já estão acostumados com Java podem achar algumas diferenças desafiadoras.
              </Text>
        </View>
      </View>

      <StatusBar style="auto" />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#013d5a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  div2:{
    // backgroundColor: '#f2f2f2',
    marginBottom: 5,
    width: 350,
    borderRadius: 15,
    padding: 2,
  },
  div:{
    backgroundColor: '#f2f2f2',
    marginBottom: 5,
    width: 350,
    borderRadius: 15,
    padding: 2,
  },
  desc:{
    textAlign: 'justify',
  },
  titulo:{
    fontWeight: 700,
    fontSize: 12,
    color: '#000',
  },
  subTitulo:{
    fontWeight: 700,
    fontSize: 10,
    color: '#000',
  },
  texto:{
    fontSize: 5,
    color: '#000',
    marginVertical: 5,
  },
  cont:{
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  image:{
    height: 50,
    width: 50,
    margin: 1,
  },
});
