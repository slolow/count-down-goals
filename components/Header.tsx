import { Linking, SafeAreaView, View } from "react-native";
import { useTheme } from "react-native-paper";
import { IconButton } from "@/components/IconButton";
import { useContext } from "react";
import { ColorSchemeContext } from "@/app/_layout";

export const Header = () => {
  const theme = useTheme();
  // @ts-ignore
  const { toggleTheme } = useContext(ColorSchemeContext);

  const iconLightOrDark = theme.dark ? "weather-night" : "weather-sunny";

  const handleGithubPress = () => {
    Linking.openURL("https://github.com/slolow/count-down-goals").catch(
      (error) => console.error("Failed to open URL:", error),
    );
  };

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
        <IconButton
          source={require("../assets/github/github-mark.png")}
          onPress={handleGithubPress}
        />
        <IconButton source={iconLightOrDark} onPress={toggleTheme} />
      </View>
    </SafeAreaView>
  );
};
