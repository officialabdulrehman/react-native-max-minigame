import { useState } from "react";
import { Text, View } from "react-native";
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
      <View>
        <Text>Higher or Lower ?</Text>
      </View>
    </View>
  );
};
