import AsyncStorage from '@react-native-async-storage/async-storage';

export const cadastrarConta = async (email) => {
    try {
        await AsyncStorage.setItem('email', email);
        console.log('email salvo com sucesso!')
    } catch (error) {
        console.error('Erro ao salvar o email')
    }
}