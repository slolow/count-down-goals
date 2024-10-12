import { View } from "react-native";
import { ReactNode } from "react";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type ContainerProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  mode?: "input" | "overview";
};

export const Container = ({
  children,
  style,
  mode = "input",
}: ContainerProps) => {
  const styles = {
    ...(style as object),
    flex: mode === "overview" ? 1 : undefined,
    marginVertical: mode === "overview" ? 0 : 80,
    marginHorizontal: 20,
  };

  return <View style={styles}>{children}</View>;
};
