import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";

const PerfilLogado = () => {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [emailUsuario, setEmailUsuario] = useState("");
  const [carregando, setCarregando] = useState(true);
  const navigation = useNavigation();

  const carregarUsuario = async () => {
    try {
      const usuario = await AsyncStorage.getItem("@usuario");
      if (usuario) {
        const { name, email } = JSON.parse(usuario);
        setNomeUsuario(name);
        setEmailUsuario(email);
      } else {
        Alert.alert("Erro", "Você não está logado.");
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Erro ao carregar dados do usuário:", error.message);
    } finally {
      setCarregando(false);
    }
  };

  const deslogarUsuario = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert("Deslogado", "Você foi deslogado com sucesso.");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Erro ao limpar o AsyncStorage:", error.message);
      Alert.alert("Erro", "Falha ao deslogar.");
    }
  };

  useEffect(() => {
    carregarUsuario();
  }, []);

  if (carregando) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil Logado</Text>
      <Text style={styles.label}>Nome: {nomeUsuario}</Text>
      <Text style={styles.label}>E-mail: {emailUsuario}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Deslogar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PerfilLogado;
