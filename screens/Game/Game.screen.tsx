import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { Card } from "../../components/Card/Card";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { GuessBubble } from "../../components/Game/GuessBubble/GuessBubble";
import { NumberBubble } from "../../components/Game/NumberBubble/NumberBubble";
import { generateRandomNumber } from "../../util/common";
import { styles } from "./Game.screen.styles";

type Props = {
  secretNumber: number;
  handleGameOver: (number: number) => void;
};

enum Direction {
  LOWER,
  HIGHER,
}

let min = 1;
let max = 100;

const isLying = (direction: Direction, guess: number, secretNumber: number) => {
  if (direction === Direction.LOWER && guess < secretNumber) {
    return true;
  }
  if (direction === Direction.HIGHER && guess > secretNumber) {
    return true;
  }
  return false;
};

export const GameScreen = (props: Props) => {
  const { secretNumber, handleGameOver } = props;
  const initialGuess = generateRandomNumber(1, 100, secretNumber);
  const [guess, setGuess] = useState(initialGuess);
  const [guesses, setGuesses] = useState([initialGuess]);

  useEffect(() => {
    if (guess === secretNumber) {
      handleGameOver(guesses.length);
    }
  }, [guess, secretNumber, handleGameOver]);

  useEffect(() => {
    min = 1;
    max = 100;
  }, []);

  const handleNextGuess = (direction: Direction) => {
    if (isLying(direction, guess, secretNumber)) {
      Alert.alert("Baka! You lier!", "You know this is wrong direction!", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === Direction.LOWER) {
      max = guess;
    } else {
      min = guess + 1;
    }

    const newGuess = generateRandomNumber(min, max, guess);

    setGuess(newGuess);
    setGuesses((prevGuesses) => [newGuess, ...prevGuesses]);
  };

  const guessRoundListLength = guesses.length;

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
      <View style={styles.guessList}>
        <FlatList
          data={guesses}
          renderItem={(itemData) => (
            <GuessBubble
              guess={itemData.item}
              round={guessRoundListLength - itemData.index}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};
