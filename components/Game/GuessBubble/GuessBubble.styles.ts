import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: "rgba(171,6,38,0.3)",
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "open-sans",

    borderRadius: 100,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginVertical: 5,
    textShadowColor: 'rgba(100, 100, 100, 0.6)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20,
  },
  round: {
    fontFamily: "open-sans",
    fontSize: 20,
    color: "rgba(171,6,38,1 )"
  },
  guess: {
    fontFamily: "open-sans",
    fontSize: 18,
    color: "rgba(171,6,38,1 )",
    textShadowColor: 'rgba(200, 200, 200, 0.6)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20,
  }
})