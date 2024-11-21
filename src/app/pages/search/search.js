import React, { useState } from 'react';
import {SafeAreaView, TextInput, View, Text, FlatList} from 'react-native';
import { styles } from './style';
import CardFilter from '../../components/cardFilter/CardFilter';
import { useSearch } from "../../hooks/useSearch";
import SearchTabs from "../../components/searchTab/SearchTab";
import CardLojaProduto from "../../components/carLojaProduto/CardLojaProduto";

const Search = () => {
    const { query, handleSearch, filteredStores, filteredProducts } = useSearch();
    const [selectedTab, setSelectedTab] = useState('stores');

    const navigateToStore = (storeId) => {
        console.log('Navegando para a loja:', storeId);
    };

    const navigateToProduct = (productId) => {
        console.log('Navegando para o produto:', productId);
    };

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Pesquisar por loja ou produto"
                    value={query}
                    onChangeText={handleSearch}
                />
            </View>

            {query ? (
                <Text style={styles.searchMessage}>
                    Buscando por <Text style={styles.highlight}>{query}</Text>
                </Text>
            ) : null}

            <SearchTabs
                selectedTab={selectedTab}
                onSelectTab={setSelectedTab}
            />

            {selectedTab === 'stores' ? (
                <CardFilter
                    data={filteredStores}
                    onPress={navigateToStore}
                    type="store"
                />
            ) : (
                <FlatList
                    data={filteredProducts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <CardLojaProduto
                            store={item}
                            products={item.produtos}
                            onPressProduct={navigateToProduct}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                />
            )}
        </SafeAreaView>
    );
};

export default Search;