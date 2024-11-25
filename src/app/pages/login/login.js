import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./style";
import {buscarUsuario} from "../../api/loginApi";

const Login = ({ setCurrentScreen }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const goToHome = () => {
        setCurrentScreen("Home");
    };
    const goToCadastro = () => {
        setCurrentScreen("Cadastro");
    };
    const validateInputs = () => {
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            Alert.alert("Erro", "Por favor, insira um e-mail válido.");
            return false;
        }

        if (!password) {
            Alert.alert("Erro", "Por favor, insira sua senha.");
            return false;
        }

        return true;
    };

    const handleLogin = async () => {
        if (!validateInputs()) return;

        try {
            const users = await buscarUsuario();

            const user = users.find(
                (u) => u.email === email && u.password === password
            );

            if (!user) {
                Alert.alert("Erro", "Usuário ou senha inválidos.");
                return;
            }

            await AsyncStorage.setItem("@authToken", "token_placeholder");
            await AsyncStorage.setItem("@usuario", JSON.stringify(user));

            Alert.alert(
                "Sucesso",
                `Bem-vindo, ${user.name || "Usuário"}!`,
                [{ text: "OK", onPress: () => setCurrentScreen("Home") }]
            );
        } catch (error) {
            console.error("Erro ao realizar login:", error);
            Alert.alert("Erro", "Ocorreu um erro ao tentar fazer login. Tente novamente.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.subtitle}>Faça login para continuar</Text>

            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Alert.alert("Recuperação de Senha", "Função ainda não implementada.")}>
                <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrentScreen("Cadastro")}>
                <Text style={styles.forgotPassword}>Criar uma nova conta</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;