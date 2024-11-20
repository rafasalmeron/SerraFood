import {View, Text, Image, FlatList, TouchableOpacity} from "react-native";
import {useState} from "react";
import Nav from "../../components/nav/Nav";
import { styles } from './style';
import {lojas} from "../../api/lojas";
import CardLoja from "../../components/cardLoja/CardLoja";
import logoFood from '../../../../assets/LogoSerraFood3.png'
import logoFood2 from '../../../../assets/LogoSerraFood.png'

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('Início');

    const filteredStores =
        selectedCategory === 'Início'
            ? lojas
            : lojas.filter((lojas) => lojas.category === selectedCategory);

    return (
        <View style={styles.mainContainer}>
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

            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </View>
    )
}

export default Home;