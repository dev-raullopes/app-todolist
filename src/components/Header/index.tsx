import { StyleSheet, Text, TouchableOpacity, View, TextProps } from "react-native";
import {Plus} from "lucide-react-native"
type Props = TextProps & {
  title: string;
  showButton?: boolean;
};
export function Header({ title, showButton, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} {...rest}>{title}</Text>
      {showButton && <TouchableOpacity>
        <Plus size={32} color="#333" />
      </TouchableOpacity>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    flex: 1, // Ensures the title takes available space
  },
});
