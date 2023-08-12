import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
}

export function Button({ title, style, children, ...rest }: ButtonProps) {
  const buttonStyles = [styles.button, style];

  if (rest.disabled) {
    buttonStyles.push(styles.disabledButton);
  }

  return (
    <TouchableOpacity style={buttonStyles} activeOpacity={0.7} {...rest}>
      {title ? <Text style={styles.text}>{title}</Text> : null}
      {children}
    </TouchableOpacity>
  );
}
