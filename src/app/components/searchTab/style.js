import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    tabsContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 16,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 14,
        marginHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'transparent',
    },
    activeTab: {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
    },
    tabText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    activeTabText: {
        color: 'red',
    },
});
