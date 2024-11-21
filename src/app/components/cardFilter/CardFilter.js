import {FlatList, TouchableOpacity, View} from "react-native";
import CardLoja from "../cardLoja/CardLoja";
import { styles } from "./style";

const CardFilter = ({ data, onPress, type }) => {
    const renderItem = ({ item }) => {
        if (type === 'store') {
            return (
                <TouchableOpacity style={styles.resultItem} onPress={() => onPress(item.id)}>
                    <CardLoja item={item} />
                </TouchableOpacity>
            );
        } else if (type === 'product') {
            return (
                <View style={styles.storeContainer}>
                    <Text style={styles.storeName}>{item.name}</Text>
                    {item.produtos.map(product => (
                        <TouchableOpacity
                            key={product.id}
                            style={styles.productItem}
                            onPress={() => onPress(product.id)}
                        >
                            <Image source={{ uri: product.image }} style={styles.productImage} />
                            <Text style={styles.productName}>{product.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            );
        }
    };

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    );
};
export default CardFilter;