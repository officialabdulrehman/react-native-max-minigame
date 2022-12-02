import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    // color: "rgba(83, 196, 247, 1)",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 40,
    marginHorizontal: 80,
  },
  title: {
    // color: "rgba(164,13,40,0.9)",
    color: "rgba(230,7,59,255)",
    fontSize: 36,
    fontFamily: "open-sans",
    letterSpacing: 1,
    textShadowColor: 'rgba(150, 150, 150, 1)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20,
  }
})