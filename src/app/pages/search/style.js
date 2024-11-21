import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        width: '100%',
        backgroundColor: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    tabsContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    tab: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    activeTab: {
        backgroundColor: '#ddd',
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    searchMessage: {
        padding: 16,
        fontSize: 28,
        color: '#333',
        fontWeight: 'bold',
    },
    highlight: {
        color: 'red',
        fontWeight: 'bold',
    },
});