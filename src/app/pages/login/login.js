import React, {useState} from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import {buscarUsuario} from "../../api/loginApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./style";
import {useNavigation} from "@react-navigation/native";

const Login = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigation = useNavigation();

    const validate = () => {
        let isValid = true;
        if (!email) {
            setEmailError("E-mail é obrigatório");
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("E-mail inválido");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (!password) {
            setPasswordError("Senha é obrigatória");
            isValid = false;
        } else {
            setPasswordError("");
        }

        return isValid;
    };

    const onSubmit = async () => {
        if (!validate()) {
            return;
        }

        try {
            const response = await buscarUsuario();

            if (response.length === 0) {
                Alert.alert("Erro", "Usuário ou senha inválidos.");
                return;
            }

            const usuario = response.find(
                (user) => user.email === email && user.password === password
            );

            if (usuario) {
                console.log("Usuário:", usuario);
                await AsyncStorage.setItem('@authToken', 'token_placeholder');
                await AsyncStorage.setItem('@usuario', JSON.stringify(usuario));

                Alert.alert(
                    "Login bem-sucedido!",
                    `Bem-vindo, ${usuario.name || "Usuário"}!`,
                    'Você será redirecionado para a página principal.'
                );

                setTimeout(() => {
                    navigation.reset({
                        index: 0,
                        routes: [{name: "MainApp"}],
                    });
                }, 1500);
            } else {
                Alert.alert("Erro", "Usuário ou senha inválidos.");
            }
        } catch (error) {
            console.error('Erro ao realizar login:', error);
            Alert.alert("Erro", error.message || "Falha na autenticação.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.subtitle}>Faça login para continuar</Text>

            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={[styles.input, emailError && styles.errorInput]}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            {/*{emailError && <Text style={styles.errorText}>{emailError}</Text>}*/}

            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={[styles.input, passwordError && styles.errorInput]}
                placeholder="Digite sua senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            {/*{passwordError && <Text style={styles.errorText}>{passwordError}</Text>}*/}

            <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;