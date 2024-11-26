import { View, Text, Image, ScrollView, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import { styles } from "./style";
import { stores } from "../../api/lojas";
import CardLoja from "../../components/cardLoja/CardLoja";
import logoFood from "../../../../assets/LogoSerraFood3.png";
import Carousel from "../../components/carrossel/Carrossel";
import CheapProductsList from "../../components/produtosBaratos/ProdutosBaratos";
import { LogBox } from "react-native";
import Banner1 from '../../../../assets/banner1.png';
import Banner2 from '../../../../assets/banner2.png';
import AsyncStorage from "@react-native-async-storage/async-storage";

LogBox.ignoreAllLogs(true);

const Home = ({ user, setCurrentScreen }) => {
    const [selectedCategory, setSelectedCategory] = useState("Início");
    const [nomeUsuario, setNomeUsuario] = useState(null);
    const [carregando, setCarregando] = useState(true);
    console.log('Usuário logado:', user);

    const imagens = [
        { id: 1, url: Banner1 },
        { id: 2, url: Banner2 },
    ];

    const filteredStores =
        selectedCategory === "Início"
            ? stores
            : stores.filter((lojas) => lojas.category === selectedCategory);

    const produtosBaratos = stores
        .flatMap((loja) => loja.produtos)
        .filter((produto) => produto.price < 30);

    const carregarUsuario = async () => {
        try {
            const usuario = await AsyncStorage.getItem("@usuario");
            if (usuario) {
                const { name } = JSON.parse(usuario);
                setNomeUsuario(name);
            }
        } catch (error) {
            console.error("Erro ao carregar usuário:", error.message);
        } finally {
            setCarregando(false);
        }
    };

    useEffect(() => {
        carregarUsuario().then(r => r);
    }, []);

    if (carregando) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <>
            <ScrollView style={styles.mainContainer}>

                <View style={styles.header}>
                    <Image source={logoFood} style={styles.logo} />
                    <Text style={styles.headerText}>Serra Food</Text>
                </View>

                <View style={styles.content}>
                    <Nav onCategorySelect={(category) => setSelectedCategory(category)} />
                </View>

                {selectedCategory === "Início" ? (
                    <>
                        <Carousel images={imagens} styles={styles} />

                        <CheapProductsList products={produtosBaratos} styles={styles} />

                        <FlatList
                            data={filteredStores}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <CardLoja loja={item} setCurrentScreen={setCurrentScreen} />
                            )}
                            horizontal={false}
                        />
                    </>
                ) : (
                    <FlatList
                        data={filteredStores}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <CardLoja loja={item} setCurrentScreen={setCurrentScreen} />
                        )}
                        horizontal={false}
                    />
                )}
            </ScrollView>
        </>
    );
};

export default Home;