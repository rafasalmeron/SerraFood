import { useState } from 'react';
import { stores } from "../api/lojas";

export const useSearch = () => {
    const [query, setQuery] = useState('');
    const [filteredStores, setFilteredStores] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearch = (text) => {
        setQuery(text);

        const filteredStoresResults = stores.filter(store =>
            store.name.toLowerCase().includes(text.toLowerCase()) ||
            store.category.toLowerCase().includes(text.toLowerCase())
        );

        const filteredProductsResults = stores
            .map(store => {
                const filteredItems = store.produtos.filter(product =>
                    product.name.toLowerCase().includes(text.toLowerCase()) ||
                    product.description.toLowerCase().includes(text.toLowerCase())
                );

                if (filteredItems.length > 0) {
                    return { ...store, produtos: filteredItems };
                }

                return null;
            })
            .filter(store => store !== null);

        setFilteredStores(filteredStoresResults);
        setFilteredProducts(filteredProductsResults);
    };

    return { query, handleSearch, filteredStores, filteredProducts };
};
