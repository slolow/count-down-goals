import { Href, Link } from "expo-router";
import { Button, useTheme } from "react-native-paper";
import { Dimensions } from "react-native";
import { MARGIN_BETWEEN_BUTTONS } from "@/assets/constants/ConstantStyles";

type LinkButtonProps = {
  link: Href<string | object>;
  mode: "text" | "outlined" | "contained" | "elevated" | "contained-tonal";
  style?: object;
  labelStyle?: object;
  text: string;
  disabled?: boolean;
};

export const LinkButton = ({
  link,
  mode,
  style,
  labelStyle,
  text,
  disabled = false,
}: LinkButtonProps) => {
  const theme = useTheme();
  const windowWidth = Dimensions.get("window").width;
  const buttonWidth = windowWidth / 2 - MARGIN_BETWEEN_BUTTONS - 5;

  return (
    <Link href={link} disabled={disabled}>
      <Button
        mode={mode}
        style={{
          ...style,
          width: buttonWidth,
          height: 50,
        }}
        theme={{ roundness: 10 }}
        labelStyle={{
          ...labelStyle,
          fontSize: theme.fonts.titleLarge.fontSize,
          padding: 8,
        }}
        uppercase={true}
        disabled={disabled}
      >
        {text}
      </Button>
    </Link>
  );
};
