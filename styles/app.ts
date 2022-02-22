import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
  },
  img: {
    width: "100%",
    aspectRatio: 6 / 2,
  },
  title: {
    color: "white",
    fontSize: 30,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    width: 250,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardName: {
    fontSize: 20,
    fontWeight: "700",
  },
  cardStats: {},
});
