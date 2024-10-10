import { Dimensions, View } from "react-native";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  style?: Object;
  mode?: "top" | "centered";
};

export const Container = ({
  children,
  style,
  mode = "top",
}: ContainerProps) => {
  const windowHeight = Dimensions.get("window").height;

  const styles = {
    ...style,
    flex: 1,
    marginHorizontal: 10,
    marginTop: mode === "top" ? 0 : (1 / 5) * windowHeight,
  };

  return <View style={styles}>{children}</View>;
};
