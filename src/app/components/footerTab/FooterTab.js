import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "../../pages/home/home";
import About from "../../pages/about/about";
import Search from "../../pages/search/search";
import CartPage from "../../pages/carrinho/CartPage";
import Perfil from "../../pages/perfil/perfil";
import Login from '../../pages/login/login';
import Cadastro from '../../pages/cadastro/cadastro';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
const PerfilStack = () => {
    return (<Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Perfil" component={Perfil} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
    )
}
const FooterTab = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
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
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="home"
                                color={color}
                                size={26}
                            />
                        ),
                        tabBarActiveBackgroundColor: 'transparent',
                        tabBarInactiveBackgroundColor: 'transparent',
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
                        tabBarActiveBackgroundColor: 'transparent',
                        tabBarInactiveBackgroundColor: 'transparent',

                    }}
                />

                <Tab.Screen
                    name="Carrinho"
                    component={CartPage}
                    options={{
                        tabBarLabel: 'Carrinho',
                        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="bag-personal" color={color} size={26} />),
                        tabBarActiveBackgroundColor: 'transparent',
                        tabBarInactiveBackgroundColor: 'transparent',
                    }}
                />
                <Tab.Screen
                    name="Pedidos"
                    component={About}
                    options={{
                        tabBarLabel: 'Pedidos',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="cart" color={color} size={26} />
                        ),
                        tabBarActiveBackgroundColor: 'transparent',
                        tabBarInactiveBackgroundColor: 'transparent',
                    }}
                />
                <Tab.Screen
                    name="Perfil"
                    component={PerfilStack}
                    options={{
                        tabBarLabel: 'Perfil',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        ),
                        tabBarActiveBackgroundColor: 'transparent',
                        tabBarInactiveBackgroundColor: 'transparent',
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default FooterTab;