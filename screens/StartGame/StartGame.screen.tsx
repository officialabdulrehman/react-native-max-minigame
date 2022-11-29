import { TextInput, View } from "react-native";
import { CustomButton } from "../../components/CustomButton/CustomButton";

type Props = {};

export const StartGameScreen = (props: Props) => {
  return (
    <View>
      <TextInput />
      <CustomButton title="Reset" />
      <CustomButton title="Confirm" />
    </View>
  );
};
