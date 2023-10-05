import { StyleSheet, Text, View } from 'react-native';
import Lista from './assets/prova/componentes/Questao01';
export default function App() {
  return (
    <View style={styles.container}>
      <Lista/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
