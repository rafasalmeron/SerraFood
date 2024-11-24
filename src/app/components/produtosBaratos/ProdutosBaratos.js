import { FlatList, Text, View } from "react-native";
import CardProduto from "../cardProduto/CardProduto";

const CheapProductsList = ({ products, styles }) => {
    return (
        <View>
            <Text style={styles.lojaText}>Bom e Barato</Text>
            <Text style={styles.subText}>Opções de até R$30</Text>
            <FlatList
                data={products}
                renderItem={({ item }) => <CardProduto product={item} />}
                horizontal
            />
        </View>
    );
};

export default CheapProductsList;