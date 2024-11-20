import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from "react-native";
import FooterTab from "./components/footerTab/FooterTab";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";

const  App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2100);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {loading ? <LoadingScreen /> : <FooterTab />}
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