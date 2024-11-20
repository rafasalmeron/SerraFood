import React, { useState } from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';
import { styles } from './style';
import CardFilter from '../../components/cardFilter/CardFilter';
import {useSearch} from "../../hooks/useSearch";
import SearchTabs from "../../components/searchTab/SearchTab";

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

            <SearchTabs
                selectedTab={selectedTab}
                onSelectTab={setSelectedTab}
            />

            <CardFilter
                data={selectedTab === 'stores' ? filteredStores : filteredProducts}
                onPress={selectedTab === 'stores' ? navigateToStore : navigateToProduct}
                type={selectedTab === 'stores' ? 'store' : 'product'}
            />
        </SafeAreaView>
    );
};

export default Search;