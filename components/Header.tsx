import { SafeAreaView, View } from "react-native";
import { useTheme } from "react-native-paper";
import { IconButton } from "@/components/IconButton";

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
        <IconButton source={require("../assets/github/github-mark.png")} />
        <IconButton source={require("../assets/github/github-mark.png")} />
      </View>
    </SafeAreaView>
  );
};
