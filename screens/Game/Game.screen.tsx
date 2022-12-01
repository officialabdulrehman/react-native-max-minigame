import { Text, View } from "react-native";
import { styles } from "./Game.screen.styles";

type Props = {};

export const GameScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <View>
        <Text>Higher or Lower ?</Text>
      </View>
    </View>
  );
};
