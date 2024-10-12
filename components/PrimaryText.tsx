import { Text } from "react-native-paper";
import { useTheme } from "react-native-paper";
import React, { ReactNode } from "react";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type PrimaryTextProps = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
};

export const PrimaryText = ({ children, style }: PrimaryTextProps) => {
  const theme = useTheme();

  return (
    <Text
      style={{
        ...(style as object),
        fontFamily: "Anton",
        color: theme.colors.primary,
      }}
      variant={"titleLarge"}
    >
      {children}
    </Text>
  );
};
