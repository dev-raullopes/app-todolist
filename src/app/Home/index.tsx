import { TouchableOpacity, View, Text, SectionList } from "react-native";
import { styles } from "./styles";
import { Header } from "@/components/Header";
import { SearchInput } from "@/components/Search";
import { FilterStatus } from "@/types/FilterStatus";
import { Filter } from "@/components/Filter";
import { Card } from "@/components/Card";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

const sections = [
  {
    dataCreate: "13/10/2025",
    data: [
      {
        id: "1",
        status: FilterStatus.PENDING,
        description: "Example Task 1",
      },
      {
        id: "2",
        status: FilterStatus.DONE,
        description: "Example Task 2",
      },
      {
        id: "3",
        status: FilterStatus.PENDING,
        description: "Example Task 3",
      },
    ],
  },
  {
    dataCreate: "14/10/2025",
    data: [
      {
        id: "4",
        status: FilterStatus.DONE,
        description: "Example Task 4",
      },
      {
        id: "5",
        status: FilterStatus.PENDING,
        description: "Example Task 5",
      },
    ],
  },
  {
    dataCreate: "15/10/2025",
    data: [
      {
        id: "6",
        status: FilterStatus.DONE,
        description: "Example Task 6",
      },
      {
        id: "7",
        status: FilterStatus.PENDING,
        description: "Example Task 7",
      },
    ],
  },
  {
    dataCreate: "12/10/2025",
    data: [
      {
        id: "6",
        status: FilterStatus.DONE,
        description: "Example Task 6",
      },
      {
        id: "7",
        status: FilterStatus.PENDING,
        description: "Example Task 7",
      },
    ],
  },
  {
    dataCreate: "16/10/2025",
    data: [
      {
        id: "8",
        status: FilterStatus.DONE,
        description: "Example Task 8",
      },
      {
        id: "9",
        status: FilterStatus.PENDING,
        description: "Example Task 9",
      },
    ],
  },
];
export function Home() {
  return (
    <View style={styles.container}>
      <Header title="ToDo List" showButton />
      <SearchInput />
      <View style={styles.filterContainer}>
        {FILTER_STATUS.map((status) => (
          <Filter key={status} status={status} isActive />
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
