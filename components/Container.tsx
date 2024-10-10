import { View } from "react-native";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  style?: Object;
  mode?: "input" | "overview";
};

export const Container = ({
  children,
  style,
  mode = "input",
}: ContainerProps) => {
  const styles = {
    ...style,
    flex: mode === "overview" ? 1 : null,
    marginVertical: mode === "overview" ? 0 : 80,
    marginHorizontal: 20,
  };

  return <View style={styles}>{children}</View>;
};
