import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: 'https://6740b24bd0b59228b7f1096e.mockapi.io/api/v1/users',
});

export const adicionarUsuario = async (user) => {
  try {
    const response = await api.post('/users', user);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar o usuário:", {
      mensagem: error.message,
      resposta: error.response?.data,
      status: error.response?.status,
    });
    throw error;
  }
};


export const buscarUsuario = async () => {
    try {
      const response = await api.get('/users')
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar usuários:', error)
      throw error;
    }
  };

  export const atualizarUsuario = async (id, usuarioAtualizado) => {
    try {
        const response = await api.put(`/api/v1/users/${id}`, usuarioAtualizado)
        return response.data
    } catch (error) {
        console.error('erro ao atualizar usuario')
        throw error;
    }
  };

   export const deletarUsuario = async (id) => {
    try {
        await api.delete(`/api/v1/users/${id}`)
        return `usuario com o id ${id} deletado`
    } catch (error) {
        console.error('erro ao deletar usuario')
        throw error;
    }
   };

export const autenticarUsuario = async (email, password) => {
    try {
        const data = { email, password };
        const response = await api.post('/users', data);

        if (response.data.token) {
            await AsyncStorage.setItem('@authToken', response.data.token);
        }
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message);
        }
        throw new Error('Erro ao realizar login. Tente novamente.');
    }
};