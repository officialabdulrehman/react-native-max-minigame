import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    color: "#fff",
    letterSpacing: 1,
    fontSize: 24,
    textAlign: "center",
    marginTop: 30,
    backgroundColor: "rgba(171,6,38,0.3)",
    borderRadius: 8,
    paddingHorizontal: 30,
    paddingVertical: 10,
    textShadowColor: 'rgba(100, 100, 100, 0.6)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20,
    fontFamily: "open-sans",
  },
  promptText: {
    fontSize: 24,
    fontFamily: "open-sans",
    letterSpacing: 0,
    color: "rgba(171,6,38, 0.9)",
    textShadowColor: 'rgba(210, 210, 210, 0.8)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 30,
    marginBottom: 20
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1
  },
  guessList: {
    marginTop: 50,
    flex: 1
  }
})