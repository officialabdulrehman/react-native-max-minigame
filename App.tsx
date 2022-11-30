import { ImageBackground, View } from "react-native";
import { styles } from "./App.styles";
import { StartGameScreen } from "./screens/StartGame/StartGame.screen";

export default function App() {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("./assets/images/rin_01.jpg")}
        resizeMode="cover"
        style={styles.root}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </View>
  );
}
