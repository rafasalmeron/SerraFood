import { NavigationContainer } from '@react-navigation/native';
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
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
            <Stack.Screen options={{headerShown: false}} name="DetalhesLoja" component={DetalhesLoja} />
        </Stack.Navigator>
    );
};

const PedidoStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Pedidos" component={Pedidos} />
            <Stack.Screen options={{headerShown: false}} name="DetalhesPedido" component={DetalhesPedido} />
        </Stack.Navigator>
    );
}

const PerfilStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Perfil" component={Perfil} />
            <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
            <Stack.Screen options={{headerShown: false}} name="Cadastro" component={Cadastro} />
            <Stack.Screen name={"Pedidos"} component={Pedidos}/>
        </Stack.Navigator>
    );
};

const FooterTab = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const logout = async () => {
        await AsyncStorage.removeItem('authToken');
        setIsAuthenticated(false);
    };

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('authToken');
            console.log(token);
            setIsAuthenticated(!!token);
        };
        checkToken().then(r => r);
    }, []);


    return (
        <NavigationContainer>
            {isAuthenticated ? <PerfilStack /> : (
            <Tab.Navigator
                initialRouteName="HomeStack"
                activeColor="#3f3e3e"
                inactiveColor="#95a5a6"
                shifting={false}
                barStyle={{
                    backgroundColor: '#fff',
                    borderTopWidth: 1,
                    borderTopColor: '#ddd',
                }}
            >
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Buscar"
                    component={Search}
                    options={{
                        tabBarLabel: 'Buscar',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Carrinho"
                    component={CartPage}
                    options={{
                        tabBarLabel: 'Carrinho',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="cart" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="PedidoStack"
                    component={PedidoStack}
                    options={{
                        tabBarLabel: 'Pedidos',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="bag-personal" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="PerfilStack"
                    component={PerfilStack}
                    options={{
                        tabBarLabel: 'Perfil',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
            )}
        </NavigationContainer>
    );
};

export default FooterTab;