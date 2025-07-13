import { StyleSheet, TextInput } from "react-native";


export function SearchInput(){
    return (
        <TextInput 
        style={styles.container}
        placeholder="Buscar tarefa..."
        placeholderTextColor="#616060"
        />
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#727171',
        fontSize: 16,
        paddingBottom: 8,
        marginBottom: 32
    }
})