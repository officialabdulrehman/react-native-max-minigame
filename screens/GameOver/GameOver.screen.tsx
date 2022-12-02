import { Image, Text, View } from "react-native";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { styles } from "./GameOver.screen.styles";

type Props = {
  secretNumber: number;
  guesses: number;
  startNewGame: () => void;
};

export const GameOverScreen = (props: Props) => {
  const { secretNumber, guesses, startNewGame } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/game-over.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summary}>
        Your phone needed <Text style={styles.highlight}>{secretNumber}</Text>{" "}
        rounds to guess your <Text style={styles.highlight}>{guesses}</Text>
      </Text>
      <CustomButton onPress={startNewGame}>Start New Game</CustomButton>
    </View>
  );
};
