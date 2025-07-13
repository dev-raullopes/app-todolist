import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
        paddingTop: 64,
        paddingHorizontal: 24,
    },
    filterContainer: {
        width: "100%",
        flexDirection: "row",
        gap: 12,
        marginBottom: 42,
    },
    clearButton: {
        marginLeft: "auto",
    },
    clearButtonText: {
        fontSize: 16,
        color: "#828282",
        fontWeight: 600
    },
    sectionList: {
        flex: 1,
        
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 12,
    },
    sectionContent: {
        paddingBottom: 62,
    },
    itemContainer: {
        marginBottom: 16,
    },
    emptyText: {
        fontSize: 16,
        color: "#828282",
        textAlign: "center",
        marginTop: 32,
    }
})