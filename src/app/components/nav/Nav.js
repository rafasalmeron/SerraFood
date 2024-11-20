import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { styles } from './style';

const categories = ['Início', 'Hambúrgueres', 'Pizzas', 'Japonesa', 'Massas', 'Doces'];

const Nav = ({ onCategorySelect }) => {
    const [selectedCategory, setSelectedCategory] = useState('Início');

    const handlePress = (category) => {
        setSelectedCategory(category);
        onCategorySelect(category);
    };

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            {categories.map((category, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.categoryButton}
                    onPress={() => handlePress(category)}
                >
                    <Text
                        style={[
                            styles.categoryText,
                            selectedCategory === category && styles.selectedCategoryText,
                        ]}
                    >
                        {category}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default Nav;