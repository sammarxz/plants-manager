import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles, sharedStyles } from "./styles";

import { getStyles } from "./utils";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  variant?: "primary" | "secondary";
}

export function Button({
  title,
  variant = "primary",
  style,
  children,
  ...rest
}: ButtonProps) {
  const buttonStyles = [sharedStyles.button, style];
  const textStyles = [sharedStyles.text];

  const { button: modifiedButtonStyles, text: modifiedTextStyles } = getStyles(
    variant,
    buttonStyles,
    textStyles,
    rest.disabled
  );

  return (
    <TouchableOpacity
      style={modifiedButtonStyles}
      activeOpacity={0.7}
      {...rest}
    >
      {title && <Text style={modifiedTextStyles}>{title}</Text>}
      {children}
    </TouchableOpacity>
  );
}
