import { Text, View } from "react-native";

type Props = {
  title: string;
};

export const CustomButton = (props: Props) => {
  const { title } = props;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
