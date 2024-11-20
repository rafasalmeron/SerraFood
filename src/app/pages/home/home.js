import {View, Text, Image, ScrollView} from "react-native";
import {useState} from "react";
import Nav from "../../components/nav/Nav";
import { styles } from './style';
import {stores} from "../../api/lojas";
import CardLoja from "../../components/cardLoja/CardLoja";
import logoFood from '../../../../assets/LogoSerraFood3.png'

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('Início');

    const filteredStores =
        selectedCategory === 'Início'
            ? stores
            : stores.filter((lojas) => lojas.category === selectedCategory);

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.header}>
                <Image
                    source={logoFood}
                    style={styles.logo}
                />
                <Text style={styles.headerText}>Serra Food</Text>
            </View>

            <View style={styles.content}>
                <Nav onCategorySelect={(category) => setSelectedCategory(category)}/>
            </View>

            <Text style={styles.lojaText}>Lojas</Text>

            <CardLoja
                filtro={filteredStores}
            />

        </ScrollView>
    )
}

export default Home;