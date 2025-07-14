import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { SearchInput as InputApp } from "@/components/Search";

export function New() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Tarefa</Text>
      <InputApp placeholder="Qual a tarefa?" />
      <InputApp placeholder="Data: Exemplo 14/07/2025" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
}
