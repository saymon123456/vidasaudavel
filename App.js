//importa os componentes necessários
import { StyleSheet, View} from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form';

//função inicial para formar a interface do aplicativo
export default function App() {
  return (
    <View style={styles.container}>      
      <Title/>
      <Form/>      
    </View>
  );
}

//define a cor do fundo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});
