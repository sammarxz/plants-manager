import { Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";

import { Plant } from "@/libs/storage";

import { styles } from "./styles";

interface PlantCardWaterdProps extends RectButtonProps {
  data: Plant;
}

export function PlantCardWaterd({ data, ...rest }: PlantCardWaterdProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <SvgFromUri uri={data.photo} width={50} height={50} />
      <Text style={styles.title}>{data.name}</Text>
      <View style={styles.details}>
        <Text style={styles.timeLabel}>Regar às</Text>
        <Text style={styles.time}>{data.hour}</Text>
      </View>
    </RectButton>
  );
}
