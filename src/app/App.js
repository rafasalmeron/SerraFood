import React from 'react';
import Home from "./pages/home/home";
import {SafeAreaView, StyleSheet} from "react-native";

const  App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Home />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
});

export default App;