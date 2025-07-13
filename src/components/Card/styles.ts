import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 48,
    gap: 8,
    borderLeftWidth: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  description: {
    flex: 1,
    fontSize: 16,
    fontWeight: 600,
  },
});
