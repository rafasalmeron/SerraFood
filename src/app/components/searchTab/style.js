import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
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
});