import React from 'react';
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { styles } from './style';
import fundo from '../../../../assets/fundo.png';


const Perfil = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={fundo}
        style={styles.topSection}
        resizeMode="cover"
      >
        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
          <Text style={styles.buttonText}> Já tenho conta </Text>
          </TouchableOpacity>
          <View style={styles.spacing} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={styles.buttonText}>Criar nova conta</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Perfil;
