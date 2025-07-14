import { TouchableOpacity, View, Text, SectionList } from "react-native";
import { styles } from "./styles";
import { Header } from "@/components/Header";
import { SearchInput } from "@/components/Search";
import { FilterStatus } from "@/types/FilterStatus";
import { Filter } from "@/components/Filter";
import { Card } from "@/components/Card";
import { useState } from "react";
// Aqui definimos os status de filtro disponíveis
const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

const sections = [
  {
    dataCreate: "13/10/2025",
    data: [
      {
        id: "1",
        status: FilterStatus.PENDING,
        description: "Example Task 1",
      }
    ],
  },
];
export function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDING);
  return (
    <View style={styles.container}>
      <Header title="ToDo List" showButton />
      <SearchInput />
      <View style={styles.filterContainer}>
        {FILTER_STATUS.map((status) => (
          <Filter 
          key={status}
           status={status} 
           isActive={status == filter}
           onPress={() => setFilter(status)}
           />
        ))}
        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <SectionList
        style={styles.sectionList}
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Card
              data={{ status: item.status, description: item.description }}
              onDelete={() => console.log("Delete item", item.id)}
            />
          </View>
        )}
        renderSectionHeader={({ section: { dataCreate } }) => (
          <Text style={styles.sectionHeader}>{dataCreate}</Text>
        )}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.sectionContent}
        ListEmptyComponent={() => (
            <Text style={styles.emptyText}>Nada encontrado aqui..</Text>
        )}
      />
    </View>
  );
}
