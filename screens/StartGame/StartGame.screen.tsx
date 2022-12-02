import { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { Card } from "../../components/Card/Card";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { styles } from "./StartGame.screen.styles";

type Props = {
  onSubmit: (number: number) => void;
};

export const StartGameScreen = (props: Props) => {
  const { onSubmit } = props;
  const [input, setInput] = useState("");

  const handleInputChange = (userInput: string) => {
    setInput(userInput);
  };

  const handleResetInput = () => {
    setInput("");
  };

  const handleSubmit = () => {
    const chosenNumber = parseInt(input);
    if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
      Alert.alert(
        `Invalid input: ${input}`,
        "Number must be between 1 and 99",
        [{ text: "Retry", style: "destructive", onPress: handleResetInput }]
      );
      return;
    }
    onSubmit(parseInt(input));
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Guess My Number</Text>
      <Card>
        <Text style={styles.promptText}>Enter the secret number!</Text>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={handleInputChange}
          maxLength={2}
          keyboardType="decimal-pad"
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton title="Reset" onPress={handleResetInput} />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton title="Confirm" onPress={handleSubmit} />
          </View>
        </View>
      </Card>
    </View>
  );
};
