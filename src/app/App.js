import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from "react-native";
import {RootNavigator} from "./components/footerTabs/FooterTabs";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";
import {CartProvider} from './hooks/CartContext';
import 'react-native-get-random-values';
import {NavigationContainer} from "@react-navigation/native";
import CustomNavigator from "./components/navigation/CustomNavigator";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2100);
    }, []);

    return (
        <CartProvider>
            <SafeAreaView style={styles.container}>
                {
                    loading ? <LoadingScreen /> :

                    <NavigationContainer>
                        <CustomNavigator />
                    </NavigationContainer>
                }
            </SafeAreaView>
        </CartProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingTop: 20,
    },
});

export default App;