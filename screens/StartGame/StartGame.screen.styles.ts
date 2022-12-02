import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    letterSpacing: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    color: "rgba(171,6,38, 0.9)",
    padding: 20,
    borderRadius: 10,
    textShadowColor: 'rgba(150, 150, 150, 1)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#eee",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: 20,
    marginHorizontal: 24,
    borderRadius: 10,
    marginTop: "50%",
  },
  input: {
    // backgroundColor: "#fff",
    backgroundColor: "rgba(171,6,38,0.5)",
    paddingHorizontal: 20,
    paddingVertical: 4,
    marginBottom: 20,
    borderRadius: 4,
    fontSize: 26,
    fontWeight: "bold",
    // color: "rgba(83, 196, 247, 1)",
    // color: "rgba(164,13,40,1)",
    color: "#fff",
    letterSpacing: 1,
    textAlign: "center",
    width: 70
  },
  buttonsContainer: {
    flexDirection: "row"
  },
  buttonContainer: {
    flex: 1
  }
})