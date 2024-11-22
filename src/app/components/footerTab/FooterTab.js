import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "../../pages/home/home";
import About from "../../pages/about/about";
import Search from "../../pages/search/search";
import CartPage from "../../pages/carrinho/CartPage";
import Perfil from "../../pages/perfil/perfil";

const Tab = createMaterialBottomTabNavigator();

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
                    component={Perfil}
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