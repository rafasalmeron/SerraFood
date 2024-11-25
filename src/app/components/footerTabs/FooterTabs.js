import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "../../pages/home/home";
import DetalhesLoja from "../../pages/detalhes/detalhes";
import Pedidos from "../../pages/pedidos/pedidos";
import Search from "../../pages/search/search";
import CartPage from "../../pages/carrinho/CartPage";
import Perfil from "../../pages/perfil/perfil";
import Login from '../../pages/login/login';
import Cadastro from '../../pages/cadastro/cadastro';
import DetalhesPedido from "../../pages/pedidos/detalhesPedido";
import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Text} from "react-native";
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name="DetalhesLoja" component={DetalhesLoja} />
    </Stack.Navigator>
);

const PedidoStack = () => (
    <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Pedidos" component={Pedidos} />
        <Stack.Screen options={{ headerShown: false }} name="DetalhesPedido" component={DetalhesPedido} />
    </Stack.Navigator>
);

const PerfilStack = () =>
    (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: true}} name="Perfil" component={Perfil}/>
            <Stack.Screen options={{headerShown: true}} name="Login" component={Login}/>
            <Stack.Screen options={{headerShown: true}} name="Cadastro" component={Cadastro}/>
        </Stack.Navigator>
    );

const FooterTabs = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            const token = await AsyncStorage.getItem("@authToken");
            console.log('Token:', token)
            setIsAuthenticated(!!token);
        };
        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        return <Text>Carregando...</Text>;
    }

    if (!isAuthenticated) {
        return <PerfilStack />;
    }

    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#e91e63"
            labelStyle={{fontSize: 12}}
            style={{backgroundColor: 'tomato'}}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="home" color={color} size={26}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={26}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartPage}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="cart" color={color} size={26}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Pedidos"
                component={PedidoStack}
                options={{
                    tabBarLabel: 'Pedidos',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="package-variant" color={color} size={26}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={PerfilStack}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="account" color={color} size={26}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export const RootNavigator = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuthentication = async () => {
            const token = await AsyncStorage.getItem("@authToken");
            console.log('Token:', token)
            setIsAuthenticated(!!token);
        };
        checkAuthentication();
    }, []);

    if (isAuthenticated === null) {
        return <Text>Carregando...</Text>;
    }

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {isAuthenticated ? (
                <Stack.Screen name="MainApp" component={FooterTabs}/>
            ) : (
                <Stack.Screen name="Auth" component={PerfilStack}/>
            )}
        </Stack.Navigator>
    );
}