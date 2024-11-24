import { FlatList, Text, View, Image } from "react-native";

const StoreList = ({ stores, title, styles, renderCustomItem, horizontal }) => {
    return (
        <View>
            <Text style={styles.lojaText}>{title}</Text>
            <FlatList
                data={stores}
                renderItem={({ item }) =>
                    renderCustomItem ? (
                        renderCustomItem(item)
                    ) : (
                        <View style={styles.content2}>
                            <Image source={{ uri: item.logo }} style={styles.logoSuper} />
                            <Text style={styles.lojaSuperText}>{item.name}</Text>
                        </View>
                    )
                }
                horizontal={horizontal}
            />
        </View>
    );
};

export default StoreList;