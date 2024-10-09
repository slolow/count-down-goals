import { Linking, SafeAreaView, View } from "react-native";
import { useTheme } from "react-native-paper";
import { IconButton } from "@/components/IconButton";
import { useState } from "react";

export const Header = () => {
  const theme = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const iconLightOrDark = isDarkMode ? "weather-night" : "weather-sunny";

  const handleGithubPress = () => {
    Linking.openURL("https://github.com/slolow/count-down-goals").catch(
      (error) => console.error("Failed to open URL:", error),
    );
  };

  const handleColorModePress = () => {
    setIsDarkMode(!isDarkMode);
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
        <IconButton source={iconLightOrDark} onPress={handleColorModePress} />
      </View>
    </SafeAreaView>
  );
};
