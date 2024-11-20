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

        const filteredProductsResults = stores.flatMap(store =>
            store.produtos.filter(product =>
                product.name.toLowerCase().includes(text.toLowerCase()) ||
                product.description.toLowerCase().includes(text.toLowerCase())
            )
        );

        setFilteredStores(filteredStoresResults);
        setFilteredProducts(filteredProductsResults);
    };

    return { query, handleSearch, filteredStores, filteredProducts };
};
