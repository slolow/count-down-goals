import { Href, Link } from "expo-router";
import { Button, useTheme } from "react-native-paper";
import {
  Animated,
  Dimensions,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { MARGIN_HORIZONTAL_BETWEEN_BUTTONS } from "@/constants/ConstantStyles";
import { ReactNode } from "react";

type LinkButtonProps = {
  link: Href<string | object>;
  mode: "text" | "outlined" | "contained" | "elevated" | "contained-tonal";
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  labelStyle?: StyleProp<TextStyle>;
  text: string;
  disabled?: boolean;
  onPress?: () => void;
};

type LinkElementProps = {
  children: ReactNode;
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
  const buttonWidth = windowWidth / 2 - MARGIN_HORIZONTAL_BETWEEN_BUTTONS - 5;

  // workaround. The problem: when onPress is set as Link prop and is undefined the button will be disabled in the web.
  // It is not when the Link has no onPress prop
  const LinkElement = ({ children }: LinkElementProps) => {
    return onPress ? (
      <Link href={link} disabled={disabled} onPress={onPress} asChild>
        {children}
      </Link>
    ) : (
      <Link href={link} disabled={disabled} asChild>
        {children}
      </Link>
    );
  };

  return (
    <LinkElement>
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
      >
        {text}
      </Button>
    </LinkElement>
  );
};
