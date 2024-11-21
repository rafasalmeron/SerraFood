import React from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import ProductCard from '../../components/cardProduto/CardProduto';
import {styles} from './style';
import icon from "../../../../assets/icons8-discount-40.png";
import * as navigation from "expo-router/build/global-state/routing";

const handleNavigate = (item) => {
    navigation.navigate("DetalhesLoja", {loja: item});
};
const CardLojaProduto = ({store, onPressProduct}) => {
    console.log('Store Teste:', store);
    return (
        <View style={styles.storeCard}>
            <Pressable
                onPress={() => handleNavigate(store)}
                style={styles.storeInfo}
            >
                <Image
                    source={{ uri: store.logo }}
                    style={styles.logoLojas}
                />
                <View style={styles.content}>
                    <View style={styles.content2}>
                        <Text style={styles.storeText}>{store.name}</Text>
                        {store.lojaSuper && (
                            <Image
                                source={store.lojaSuper}
                                style={styles.super}
                            />
                        )}
                    </View>

                    <View style={styles.content2}>
                        <Text style={styles.text2}>★ {store.star} </Text>
                        <Text style={styles.text3}> ⦁ </Text>
                        <Text style={styles.text3}> {store.category} </Text>
                        <Text style={styles.text3}> ⦁ </Text>
                        <Text style={styles.text3}> {store.tempoPreparo} </Text>
                        <Text style={styles.text3}> ⦁ </Text>
                        <Text style={styles.text4}> {store.frete}</Text>
                    </View>
                </View>

            </Pressable>
            <View style={styles.content3}>
                {store.cupom && (
                    <Text style={styles.text5}>
                        <Image
                            source={icon}
                            style={styles.iconDiscount}
                        />
                        {store.cupom}
                    </Text>
                )}
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productsContainer}>
                {store.produtos.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onPress={() => onPressProduct(product.id)}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default CardLojaProduto;