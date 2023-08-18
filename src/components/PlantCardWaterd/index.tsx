import { Text, View, Animated } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { SvgFromUri } from "react-native-svg";
import { Feather } from "@expo/vector-icons";

import { Plant } from "@/libs/storage";

import { styles } from "./styles";
import { theme } from "@/styles";

interface PlantCardWaterdProps extends RectButtonProps {
  data: Plant;
  handleRemove: () => void;
}

export function PlantCardWaterd({
  data,
  handleRemove,
  ...rest
}: PlantCardWaterdProps) {
  function renderActions() {
    return (
      <Animated.View>
        <View>
          <RectButton style={styles.buttonRemove} onPress={handleRemove}>
            <Feather name="trash" size={24} color={theme.colors.red} />
          </RectButton>
        </View>
      </Animated.View>
    );
  }

  return (
    <Swipeable overshootRight={false} renderRightActions={renderActions}>
      <RectButton style={styles.container} {...rest}>
        <SvgFromUri uri={data.photo} width={50} height={50} />
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.details}>
          <Text style={styles.timeLabel}>Regar às</Text>
          <Text style={styles.time}>{data.hour}</Text>
        </View>
      </RectButton>
    </Swipeable>
  );
}
