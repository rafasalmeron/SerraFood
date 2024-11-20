import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './style';

const SearchTabs = ({ selectedTab, onSelectTab }) => {
    return (
        <View style={styles.tabsContainer}>
            <TouchableOpacity
                style={[styles.tab, selectedTab === 'stores' && styles.activeTab]}
                onPress={() => onSelectTab('stores')}
            >
                <Text style={styles.tabText}>Lojas</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.tab, selectedTab === 'products' && styles.activeTab]}
                onPress={() => onSelectTab('products')}
            >
                <Text style={styles.tabText}>Produtos</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SearchTabs;