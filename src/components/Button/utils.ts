import { StyleProp, TextStyle, ViewStyle } from "react-native";

import { styles } from "./styles";

export function getStyles(
  variant: "primary" | "secondary",
  buttonStyles: ViewStyle[] | StyleProp<ViewStyle>[],
  textStyles: TextStyle[],
  disabled?: boolean
) {
  if (disabled) {
    buttonStyles.push(styles.disabledButton);
  }

  if (variant === "secondary") {
    buttonStyles.push(styles.secondaryButton);
    textStyles.push(styles.secondaryButtonText);
  } else {
    buttonStyles.push(styles.primaryButton);
  }

  return {
    button: buttonStyles,
    text: textStyles,
  };
}
