import { View } from "react-native";
import { styles } from "./Card.styles";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Card = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};
