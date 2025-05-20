import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Main from './components/Main';
import Section from './components/Section';
import Main2 from './components/Main2';
import Section2 from './components/Section2';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFA500', '#f00']}
        style={styles.principal}>
          <Main/>
          <Section/>
      </LinearGradient>
      <View style={styles.section}>
        <Main2/>
        <Section2/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },
  principal:{
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 330,
    width: 375,
  },
  section:{

  },
});
