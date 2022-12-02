import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { Card } from "../../components/Card/Card";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { NumberBubble } from "../../components/Game/NumberBubble/NumberBubble";
import { generateRandomNumber } from "../../util/common";
import { styles } from "./Game.screen.styles";

type Props = {
  secretNumber: number;
  handleGameOver: () => void;
};

enum Direction {
  LOWER,
  HIGHER,
}

let min = 1;
let max = 1;

const isLying = (direction: Direction, guess: number, secretNumber: number) => {
  if (direction === Direction.LOWER && guess > secretNumber) {
    return true;
  }
  if (direction === Direction.LOWER && guess > secretNumber) {
    return true;
  }
  return false;
};

export const GameScreen = (props: Props) => {
  const { secretNumber, handleGameOver } = props;
  const [guess, setGuess] = useState(
    generateRandomNumber(1, 100, secretNumber)
  );

  useEffect(() => {
    if (guess === secretNumber) {
      handleGameOver();
    }
  }, [guess, secretNumber, handleGameOver]);

  const handleNextGuess = (direction: Direction) => {
    if (isLying(direction, guess, secretNumber)) {
      Alert.alert("Baka! You lier!", "You know this is wrong direction!", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    const newGuess = generateRandomNumber(min, max, secretNumber);
    if (direction === Direction.LOWER) {
      max = guess;
    } else {
      min = guess + 1;
    }
    setGuess(newGuess);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <NumberBubble title={guess} />
      <Card>
        <Text style={styles.promptText}>Higher or Lower ?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={() => handleNextGuess(Direction.LOWER)}>
              <Ionicons name="md-remove" size={24} color="white" />
            </CustomButton>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={() => handleNextGuess(Direction.HIGHER)}>
              <Ionicons name="md-add" size={24} color="white" />
            </CustomButton>
          </View>
        </View>
      </Card>
    </View>
  );
};
