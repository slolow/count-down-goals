import { View } from "react-native";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  style?: Object;
};

export const Container = ({ children, style }: ContainerProps) => {
  return (
    <View
      style={{
        ...style,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
};
