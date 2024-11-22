import React from 'react';
import { View, Button, ImageBackground } from 'react-native';
import styles from './style'; 
import fundo from 'C:/Users/dudmo/OneDrive/Documentos/serratec-2024-2/front/SerraFood/assets/fundo.png';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={fundo} 
        style={styles.topSection}
        resizeMode="cover"
      />
      <View style={styles.bottomSection}>
        <Button title="Botão 1" onPress={() => alert('Botão 1 pressionado')} />
        <View style={styles.spacing} />
        <Button title="Botão 2" onPress={() => alert('Botão 2 pressionado')} />
      </View>
    </View>
  );
};

export default App;
