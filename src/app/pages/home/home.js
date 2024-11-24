import {View, Text, Image, ScrollView, FlatList} from "react-native";
import {useState} from "react";
import Nav from "../../components/nav/Nav";
import {styles} from "./style";
import {stores} from "../../api/lojas";
import CardLoja from "../../components/cardLoja/CardLoja";
import logoFood from "../../../../assets/LogoSerraFood3.png";
import Carousel from "../../components/carrossel/Carrossel";
import CheapProductsList from "../../components/produtosBaratos/ProdutosBaratos";
import StoreList from "../../components/storeList/StoreList";
import {LogBox} from "react-native";
import Banner1 from '../../../../assets/banner1.png';
import Banner2 from '../../../../assets/banner2.png';

LogBox.ignoreAllLogs();

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("Início");

    const imagens = [
        {id: 1, url: Banner1,},
        {id: 2, url: Banner2,},
    ];

    const filteredStores =
        selectedCategory === "Início"
            ? stores
            : stores.filter((lojas) => lojas.category === selectedCategory);

    const produtosBaratos = stores
        .flatMap((loja) => loja.produtos)
        .filter((produto) => produto.price < 30);

    const lojasSuper = stores.filter((loja) => loja.lojaSuper !== '');

    const freteGratis = stores.filter((loja) => loja.frete === 'Gratis');

    return (
        <ScrollView style={styles.mainContainer}>

            <View style={styles.header}>
                <Image source={logoFood} style={styles.logo}/>
                <Text style={styles.headerText}>Serra Food</Text>
            </View>

            <View style={styles.content}>
                <Nav onCategorySelect={(category) => setSelectedCategory(category)}/>
            </View>

            {selectedCategory === "Início" ? (
                <>
                    <Carousel images={imagens} styles={styles}/>

                    <CheapProductsList products={produtosBaratos} styles={styles}/>

                    <StoreList
                        stores={lojasSuper}
                        title="Lojas Super"
                        styles={styles}
                        horizontal={true}
                    />

                    <StoreList
                        stores={freteGratis}
                        title="Loja com Frete Grátis"
                        styles={styles}
                        horizontal={true}
                    />

                    <StoreList
                        stores={filteredStores}
                        title="Lojas"
                        styles={styles}
                        renderCustomItem={(item) => <CardLoja item={item}/>}
                        horizontal={false}
                    />

                </>
            ) : (
                <StoreList
                    stores={filteredStores}
                    title="Lojas"
                    styles={styles}
                    renderCustomItem={(item) => <CardLoja item={item}/>}
                    horizontal={false}
                />
            )}
        </ScrollView>
    );
}

export default Home;