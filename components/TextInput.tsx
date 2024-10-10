import { TextInput as RNPTextInput, useTheme } from "react-native-paper";
import { InputModeOptions } from "react-native";

type TextInputProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  inputMode?: InputModeOptions | undefined;
};

export const TextInput = ({
  label,
  value,
  onChangeText,
  inputMode = "text",
}: TextInputProps) => {
  const theme = useTheme();

  return (
    <RNPTextInput
      inputMode={inputMode}
      label={label}
      value={value}
      mode={"outlined"}
      autoFocus={true}
      onChangeText={onChangeText}
      textColor={theme.colors.primary}
      style={{
        fontSize: theme.fonts.titleLarge.fontSize,
      }}
    />
  );
};
