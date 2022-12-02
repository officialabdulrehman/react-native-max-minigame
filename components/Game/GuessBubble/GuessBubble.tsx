import { Text, View } from "react-native";
import { styles } from "./GuessBubble.styles";

type Props = {
  round: number;
  guess: number;
};

export const GuessBubble = (props: Props) => {
  const { round, guess } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.round}>#{round}</Text>
      <Text style={styles.guess}>Opponent's Guess {guess}</Text>
    </View>
  );
};
