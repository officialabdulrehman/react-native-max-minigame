import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { useState } from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { styles } from "./App.styles";
import { GameScreen } from "./screens/Game/Game.screen";
import { GameOverScreen } from "./screens/GameOver/GameOver.screen";
import { StartGameScreen } from "./screens/StartGame/StartGame.screen";

export default function App() {
  const [number, setNumber] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(true);
  const [totalGuesses, setTotalGuesses] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleInputSubmission = (input: number) => {
    setNumber(input);
  };

  const handleGameOver = (guessCount: number) => {
    setGameOver(true);
    setTotalGuesses(guessCount);
  };

  const handleNewGame = () => {
    setNumber(null);
    setTotalGuesses(0);
    setGameOver(false);
  };

  let screen = number ? (
    <GameScreen secretNumber={number} handleGameOver={handleGameOver} />
  ) : (
    <StartGameScreen onSubmit={handleInputSubmission} />
  );

  if (gameOver && number) {
    screen = (
      <GameOverScreen
        secretNumber={number as number}
        startNewGame={handleNewGame}
        guesses={totalGuesses}
      />
    );
  }

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
