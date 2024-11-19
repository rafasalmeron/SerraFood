import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Lojas} from "./compents/loja/lojas";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      {
        Lojas.map((loja) => (
            <View key={loja.id}>
                <Text>{loja.nome}</Text>
                <Text>{loja.endereco}</Text>
                <Text>{loja.telefone}</Text>
                <Image source={loja.imagem} style={{ width: 150, height: 150 }} />
            </View>
            ))
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
