import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { styles } from './style';
import { yupResolver } from '@hookform/resolvers/yup';
import { adicionarUsuario } from '../../api/loginApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
});

const SignupScreen = () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  
  const onSubmit = async (data) => {
    try {
      const novoUsuario = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
  
      const response = await adicionarUsuario(novoUsuario);
  
      await AsyncStorage.setItem(
        '@usuario',
        JSON.stringify({
          id: response.id,
          name: novoUsuario.name,
          email: novoUsuario.email,
        })
      );
  
      Alert.alert("Usuário cadastrado com sucesso!", `ID: ${response.id}`);
    } catch (error) {
      console.error("Erro ao criar o usuário:", error.response?.data || error.message);
      Alert.alert(
        "Erro ao cadastrar usuário.",
        error.response?.data || "Verifique os dados e tente novamente."
      );
    }
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      {}
      <Text style={styles.label}>Nome</Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, errors.name && styles.errorInput]}
            placeholder="Digite seu nome"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}

      {}
      <Text style={styles.label}>E-mail</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, errors.email && styles.errorInput]}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

      {}
      <Text style={styles.label}>Senha</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, errors.password && styles.errorInput]}
            placeholder="Digite sua senha"
            secureTextEntry
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

      {}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
