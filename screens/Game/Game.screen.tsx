import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, View } from "react-native";
import { Card } from "../../components/Card/Card";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { NumberBubble } from "../../components/Game/NumberBubble/NumberBubble";
import { generateRandomNumber } from "../../util/common";
import { styles } from "./Game.screen.styles";

type Props = {
  secretNumber: number;
};

export const GameScreen = (props: Props) => {
  const { secretNumber } = props;
  const [guess, setGuess] = useState(
    generateRandomNumber(1, 100, secretNumber)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <NumberBubble title={guess} />
      <Card>
        <Text style={styles.promptText}>Higher or Lower ?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={() => {}}>
              <Ionicons name="md-remove" size={24} color="white" />
            </CustomButton>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={() => {}}>
              <Ionicons name="md-remove" size={24} color="white" />
            </CustomButton>
          </View>
        </View>
      </Card>
    </View>
  );
};
