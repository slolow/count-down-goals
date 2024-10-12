import { Text } from "react-native-paper";
import { useTheme } from "react-native-paper";
import React, { ReactNode } from "react";
import type { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import type { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type PrimaryTextProps = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  variant?:
    | "displayLarge"
    | "displayMedium"
    | "displaySmall"
    | "headlineLarge"
    | "headlineMedium"
    | "headlineSmall"
    | "titleLarge"
    | "titleMedium"
    | "titleSmall"
    | "labelLarge"
    | "labelMedium"
    | "labelSmall"
    | "bodyLarge"
    | "bodyMedium"
    | "bodySmall";
};

export const PrimaryText = ({
  children,
  style,
  variant = "titleLarge",
}: PrimaryTextProps) => {
  const theme = useTheme();

  return (
    <Text
      style={{
        fontFamily: "Anton",
        color: theme.colors.primary,
        ...(style as object),
      }}
      variant={variant}
    >
      {children}
    </Text>
  );
};
