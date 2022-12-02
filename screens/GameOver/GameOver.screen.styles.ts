import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 100,
  },
  title: {
    fontSize: 36,
    fontFamily: "open-sans",
    letterSpacing: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    color: "rgba(171,6,38, 0.9)",
    padding: 20,
    borderRadius: 10,
    textShadowColor: 'rgba(150, 150, 150, 1)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  imageContainer: {
    width: 200,
    height: 250,
    // borderRadius: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summary: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center"
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: "rgba(171,6,38, 0.9)",
  }
})