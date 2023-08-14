import { Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";

import { styles } from "./styles";

interface PlantCardProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

export function PlantCard({ data, ...rest }: PlantCardProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <SvgFromUri uri={data.photo} width={100} height={100} />
      <Text style={styles.text}>{data.name}</Text>
    </RectButton>
  );
}
