import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 20,
    margin: 4,
    overflow: "hidden"
  },
  innerContainer: {
    // backgroundColor: "rgba(83, 196, 247, 1)",
    backgroundColor: "rgba(164,13,40,0.8)",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
    textAlign: "center"
  },
  pressed: {
    opacity: 0.75
  }
})