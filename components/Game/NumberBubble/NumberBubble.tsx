import { Text, View } from "react-native";
import { styles } from "./NumberBubble.styles";

type Props = {
  title: number;
};

export const NumberBubble = (props: Props) => {
  const { title } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
