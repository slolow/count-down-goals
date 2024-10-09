import { SafeAreaView, View } from "react-native";
import { Button, useTheme } from "react-native-paper";

export const Header = () => {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.background }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: theme.colors.background,
          height: 60,
          paddingHorizontal: 10,
        }}
      >
        <Button>Press me</Button>
        <Button>Press me</Button>
      </View>
    </SafeAreaView>
  );
};
