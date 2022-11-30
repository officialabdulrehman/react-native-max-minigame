import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 20,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 10,
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 4,
    marginBottom: 20,
    borderRadius: 4,
    fontSize: 26,
    fontWeight: "bold",
    color: "rgba(83, 196, 247, 1)",
    letterSpacing: 1,
    textAlign: "center",
    width: "25%"
  },
  buttonsContainer: {
    flexDirection: "row"
  },
  buttonContainer: {
    flex: 1
  }
})