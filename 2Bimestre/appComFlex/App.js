import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-web';

export default function App() {
  return (

    <View style={styles.container}>

      <LinearGradient colors={['#f25b16','#ff3252']} style={styles.primeiraDivisao}>

          <View style={styles.linha}>
            <View style={styles.coluna1}>
              <TouchableOpacity>
                  <Image
                    source={{uri:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-gear-512.png'}}
                    style={styles.image2}
                  ></Image>
              </TouchableOpacity>
                  <Text  style={styles.paragrafo1}>Lorem ipsum dolot</Text>
              <Text style={styles.bold2}>$236,678.25</Text>
            </View>
          </View>

          <View style={styles.linha}>
            <TouchableOpacity style={styles.button}>
              {/* <View style={styles.coluna2}> */}
                <Image
                  source={{uri:'https://img.icons8.com/ios7/600/search.png'}}
                  style={styles.image}
                ></Image>
              {/* </View> */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>

              {/* <View style={styles.coluna2}> */}
                <Image
                  source={{uri:'https://png.pngtree.com/png-vector/20240109/ourmid/pngtree-vector-bar-chart-with-uptrend-arrow-isolated-on-white-background-png-image_11430461.png'}}
                  style={styles.image}
                ></Image>
              {/* </View> */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>

              {/* <View style={styles.coluna2}> */}
                <Image
                  source={{uri:'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-gear-512.png'}}
                  style={styles.image}
                ></Image>
              {/* </View> */}
            </TouchableOpacity>

          </View>

          <View style={styles.linha}>
              <View style={styles.colunm}>
                <Text style={styles.paragrafo}>Lorem</Text>
              </View>
              <View style={styles.colunm}>
                <Text style={styles.paragrafo}>ipsum</Text>
              </View>
              <View style={styles.colunm}>
                <Text style={styles.paragrafo}>dolor</Text>
              </View>
          </View>
      </LinearGradient>

      {/* Aqui começa a metade da página */}
      <View style={styles.segundaDivisao}>

          <View style={styles.linha}>

            <View style={styles.colunan}>
                <Text  style={styles.paragrafo2}><View style={styles.bolinhaR}></View>INCOMES</Text>
                <Text style={styles.bold}>$267</Text>
            </View>

            <View style={styles.coluna}>
              <Text style={styles.paragrafo2}><View style={styles.bolinhaB}></View>EXPENSES</Text>
              <Text style={styles.bold}>$255</Text>
            </View>

          </View>

          <View style={styles.linha}>
            <View style={styles.coluna2}>
              <Text style={styles.paragrafo3}>
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
              </Text>
            </View>
          </View>

      </View>
      {/* fim da segundaDivisao */}
      {/* fim da View principal */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
  },
  bolinhaR:{
    height: 15,
    width: 15,
    backgroundColor: '#f00',
    borderRadius: 50,
    marginRight: 4,
  },
  bolinhaB:{
    height: 15,
    width: 15,
    backgroundColor: '#000',
    borderRadius: 50,
    marginRight: 4,
  },
  primeiraDivisao:{
    padding: 10,
    // backgroundColor: '#fd1e4e',
    height: 350,
    width: 375,
    marginBottom: 1,
    borderBottomLeftRadius: 20, // Define o raio do canto inferior esquerdo
    borderBottomRightRadius: 20, // Define o raio do canto inferior direito
  },
  segundaDivisao:{
    padding: 10,
    backgroundColor: '#fff',
    height: 290,
    width: 375,
    marginBottom: 1,
  },
  linha:{
    flex: 1,
    flexDirection:'row',
    margin: 5,
  },
  // colu:{
  //   flex: 1,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  coluna1:{
    padding: 1,
    width: 100,
    height: 140,
    backgroundColor:'#fff',
    margin: 5,
    flex:1,
    flexDirection:'column',
    borderRadius: 15,
    alignItems: 'center',
  },
  coluna2:{
     width:100,
     height: 90,
     backgroundColor:'#fff',
     flex:1,
     borderRadius: 15,
     marginTop: 50,
     margin: 5,
   },
  button:{
    width:80,
    height: 90,
    backgroundColor:'#fff',
    flex:1,
    borderRadius: 15,
    marginTop: 50,
    margin: 5,
  },
  colunm:{
    // height: 5,
    width: 100,
    flex: 1,
  },
  coluna:{
    width:100,
    height:140,
    backgroundColor:'#fff',
    flex:1,
    borderLeftColor: '#000',
    borderLeftWidth: 2,
  },
  colunan:{
    width:100,
    height:140,
    backgroundColor:'#fff',
    flex:1,
    borderRightColor: '#000',
    borderRightWidth: 2,
  },
  image:{
    width: 70,
    height: 70,
    marginLeft: 20,
    marginTop: 10,
  },
  image2:{
    width: 25,
    height: 25,
    marginLeft: 300,
  },
  bold:{
    fontWeight: 'bold',
    fontSize: 55,
    color: '#000',
    textAlign: 'center',
  },
  bold2:{
    fontWeight: 'bold',
    fontSize: 45,
    color: '#000',
    textAlign: 'center',
  },
  paragrafo:{
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  paragrafo3:{
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
  },
  paragrafo2:{
    marginTop: 25,
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },
  paragrafo1:{
    width: 200,
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
});
