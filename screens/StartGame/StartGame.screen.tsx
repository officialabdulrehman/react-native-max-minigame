import { TextInput, View } from "react-native";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { styles } from "./StartGame.screen.styles";

type Props = {};

export const StartGameScreen = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="decimal-pad"
      />
      <CustomButton title="Reset" />
      <CustomButton title="Confirm" />
    </View>
  );
};
