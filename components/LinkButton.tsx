import { Href, Link } from "expo-router";
import { Button, useTheme } from "react-native-paper";
import {
  Animated,
  Dimensions,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import {
  MARGIN_HORIZONTAL,
  MARGIN_HORIZONTAL_BETWEEN_BUTTONS,
} from "@/constants/ConstantStyles";

type LinkButtonProps = {
  link: Href<string | object>;
  mode: "text" | "outlined" | "contained" | "elevated" | "contained-tonal";
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  labelStyle?: StyleProp<TextStyle>;
  text: string;
  disabled?: boolean;
  onPress?: () => void;
};

export const LinkButton = ({
  link,
  mode,
  style,
  labelStyle,
  text,
  disabled = false,
  onPress,
}: LinkButtonProps) => {
  const theme = useTheme();
  const windowWidth = Dimensions.get("window").width;
  const buttonWidth =
    (windowWidth - 2 * MARGIN_HORIZONTAL - MARGIN_HORIZONTAL_BETWEEN_BUTTONS) /
    2;

  return (
    <Link href={link} disabled={disabled} asChild>
      <Button
        mode={mode}
        style={{
          ...(style as object),
          width: buttonWidth,
          height: 50,
        }}
        theme={{ roundness: 10 }}
        labelStyle={{
          ...(labelStyle as object),
          fontSize: theme.fonts.titleLarge.fontSize,
          padding: 8,
        }}
        uppercase={true}
        onPress={onPress}
      >
        {text}
      </Button>
    </Link>
  );
};
