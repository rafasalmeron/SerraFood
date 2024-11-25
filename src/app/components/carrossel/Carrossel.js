import React, { useEffect, useState } from "react";
import { FlatList, Image, View } from "react-native";


const Carousel = ({ images, styles }) => {
    return (
        <FlatList
            style={styles.flat}
            data={images}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Image source={ item.url } style={styles.image} resizeMode="contain" />
            )}
            horizontal
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    );
};

export default Carousel;