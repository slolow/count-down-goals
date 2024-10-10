import { Text } from "react-native-paper";
import { useTheme } from "react-native-paper";
import React, { ReactNode } from "react";

type PrimaryTextProps = {
  children: ReactNode;
};

export const PrimaryText = ({ children }: PrimaryTextProps) => {
  const theme = useTheme();

  return (
    <Text
      style={{
        fontFamily: "Anton",
        color: theme.colors.primary,
      }}
      variant={"titleLarge"}
    >
      {children}
    </Text>
  );
};
