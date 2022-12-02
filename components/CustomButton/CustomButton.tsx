import { Pressable, Text, View } from "react-native";
import { styles } from "./CustomButton.styles";

type Props = {
  children: string | JSX.Element;
  onPress: () => void;
};

export const CustomButton = (props: Props) => {
  const { children, onPress } = props;
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={onPress}
        android_ripple={{
          color: "rgba(0, 171, 250, 0.4)",
          borderless: true,
          radius: 200,
        }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};
