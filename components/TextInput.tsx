import { TextInput as RNPTextInput, useTheme } from "react-native-paper";

type TextInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
};

export const TextInput = ({ label, value, onChangeText }: TextInputProps) => {
  const theme = useTheme();

  return (
    <RNPTextInput
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
