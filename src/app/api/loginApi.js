import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6740b24bd0b59228b7f1096e.mockapi.io/api/v1', 
});

export const adicionarUsuario = async (user) => {
  try {
    const response = await api.post('/users/users', user); 
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
      const response = await api.get('/users/users')
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
    const data = {  email: email, password: password };
    console.log(data)
    const response = await api.post(`${baseURL}/users/users`, data);
    console.log(response)
    return response.data; 
  } catch (error) {
    console.log(error.response)
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    }
    throw new Error('Erro ao realizar login. Tente novamente.');
  }
};
