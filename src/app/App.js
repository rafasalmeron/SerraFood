import React from 'react';
import {SafeAreaView, StyleSheet} from "react-native";
import FooterTab from "./components/footerTab/FooterTab";

const  App = () => {
    return (
        <SafeAreaView style={styles.container}>
                <FooterTab />
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