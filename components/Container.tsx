import { View } from "react-native";
import { ReactNode } from "react";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { MARGIN_HORIZONTAL } from "@/assets/constants/ConstantStyles";

type ContainerProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  mode?: "input" | "overview" | "centered";
};

export const Container = ({
  children,
  style,
  mode = "input",
}: ContainerProps) => {
  const styles = {
    ...(style as object),
    flex: mode === "overview" || mode === "centered" ? 1 : undefined,
    marginVertical: mode === "overview" || mode === "centered" ? 0 : 80,
    marginHorizontal: MARGIN_HORIZONTAL,
    justifyContent: mode === "centered" ? "center" : undefined,
    alignItems: mode === "centered" ? "center" : undefined,
  } as ViewStyle;

  return <View style={styles}>{children}</View>;
};
