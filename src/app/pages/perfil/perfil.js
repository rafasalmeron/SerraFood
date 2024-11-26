import React, { useEffect, useState } from 'react';
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { styles } from './style';
import fundo from '../../../../assets/fundo.png';
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Perfil = ({ setCurrentScreen }) => {
    const [userData, setUserData] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    const goToHome = () => {
        setCurrentScreen("Home");
    };

    const goToCadastro = () => {
        setCurrentScreen("Cadastro");
    };

    const goToLogin = () => {
        setCurrentScreen("Login");
    };

    useEffect(() => {
        const fetchAuthenticationState = async () => {
            const authState = await AsyncStorage.getItem('@isAuthenticated');
            if (authState === 'true') {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        };
        fetchAuthenticationState();
    }, []);

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('@usuario');
            await AsyncStorage.removeItem('@authToken');
            await AsyncStorage.setItem('@isAuthenticated', 'false');
            setUserData(null);
            setIsAuthenticated(false);
            goToHome();
        } catch (error) {
            console.error('Erro ao realizar logout:', error);
        }
    };

    const menuItems = [
        { icon: 'message-text', label: 'Chats', action: () => {} },
        { icon: 'package-variant-closed', label: 'Pedidos', action: () => {} },
        { icon: 'ticket-percent', label: 'Meus Cupons', action: () => {} },
        { icon: 'heart', label: 'Favoritos', action: () => {} },
        { icon: 'credit-card', label: 'Pagamento', action: () => {} },
        { icon: 'medal-outline', label: 'Fidelidade', action: () => {} },
        { icon: 'help-circle', label: 'Ajuda', action: () => {} },
        { icon: 'account', label: 'Meus Dados', action: () => {} },
        { icon: 'shield-check', label: 'Segurança', action: () => {} },
        { icon: 'logout', label: 'Sair', action: handleLogout },
    ];

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const storedToken = await AsyncStorage.getItem('@authToken');
                if (storedToken) {
                    const storedUser = await AsyncStorage.getItem('@usuario');
                    setUserData(JSON.parse(storedUser));
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                    navigation.navigate("Home");
                    console.log("Usuário não encontrado no AsyncStorage.");
                }
            } catch (error) {
                setIsAuthenticated(false);
                console.error('Erro ao buscar os dados do usuário:', error);
            }
        };
        fetchUserData();
    }, []);

    if (isAuthenticated === null) {
        return (
            <View>
                <Text>Carregando...</Text>
            </View>
        );
    }

    if (!isAuthenticated) {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={fundo} style={styles.topSection} resizeMode="cover">
                    <View style={styles.bottomSection}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={goToLogin}
                        >
                            <Text style={styles.buttonText}>Já tenho conta</Text>
                        </TouchableOpacity>
                        <View style={styles.spacing} />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={goToCadastro}
                        >
                            <Text style={styles.buttonText}>Criar nova conta</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Usuário: {userData.name}</Text>
                <Text style={styles.subtitle}>E-mail: {userData.email}</Text>
            </View>

            <View style={styles.menuContainer}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.menuItem}
                        onPress={item.action}
                    >
                        <MaterialCommunityIcons
                            name={item.icon}
                            size={24}
                            color="#333"
                            style={styles.menuIcon}
                        />
                        <Text style={styles.menuLabel}>{item.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default Perfil;