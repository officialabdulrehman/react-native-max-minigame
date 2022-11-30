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
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <CustomButton title="Reset" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="Confirm" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};
