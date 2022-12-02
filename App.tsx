import { useState } from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { styles } from "./App.styles";
import { GameScreen } from "./screens/Game/Game.screen";
import { StartGameScreen } from "./screens/StartGame/StartGame.screen";

export default function App() {
  const [number, setNumber] = useState<number | null>(null);

  const handleInputSubmission = (input: number) => {
    setNumber(input);
  };

  let screen = number ? (
    <GameScreen secretNumber={1} />
  ) : (
    <StartGameScreen onSubmit={handleInputSubmission} />
  );

  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground
        source={require("./assets/images/rin_01.jpg")}
        resizeMode="cover"
        style={styles.root}
        imageStyle={styles.backgroundImage}
        blurRadius={0}
      >
        {screen}
      </ImageBackground>
    </SafeAreaView>
  );
}
