import {FlatList, Image, Pressable, Text, View} from "react-native";
import {styles} from "./style";
import * as navigation from "expo-router/build/global-state/routing";
import icon from '../../../../assets/icons8-discount-40.png'

const CardLoja = ({filtro}) => {

    const handleNavigate = (item) => {
        navigation.navigate("DetalhesLoja", {loja: item});
    };

    return (
        // <View style={styles.conteiner}>
            <FlatList
                data={filtro}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (

                    <Pressable
                        style={({pressed}) => [
                            styles.storeItem,
                            pressed && styles.storeItemPressed,
                        ]}
                        onPress={() => handleNavigate(item)}
                    >
                        <Image
                            source={item.logo}
                            style={styles.logoLojas}
                        />
                        <View style={styles.content}>

                            <View style={styles.content2}>
                                <Text style={styles.storeText}>{item.name}</Text>
                                {item.lojaSuper && (
                                    <Image
                                        source={item.lojaSuper}
                                        style={styles.super}
                                    />
                                )}
                            </View>

                            <View style={styles.content2}>
                                <Text style={styles.text2}>★ {item.star} </Text>
                                <Text style={styles.text3}> ⦁ </Text>
                                <Text style={styles.text3}> {item.category} </Text>
                                <Text style={styles.text3}> ⦁ </Text>
                                <Text style={styles.text3}> {item.distancia}</Text>
                            </View>

                            <View style={styles.content2}>
                                <Text style={styles.text3}> {item.tempoPreparo} </Text>
                                <Text style={styles.text3}> ⦁ </Text>
                                <Text style={styles.text4}> {item.frete}</Text>
                            </View>

                            <View style={styles.content3}>
                                {
                                    item.cupom && (
                                        <Text style={styles.text5}>
                                            <Image
                                                source={icon}
                                                style={styles.iconDiscount}
                                            />
                                            {item.cupom}
                                        </Text>
                                    )
                                }
                            </View>

                        </View>
                    </Pressable>

                )}
                contentContainerStyle={styles.storeList}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>Nenhuma loja encontrada.</Text>
                }
            />
       // </View>
    )
}

export default CardLoja;