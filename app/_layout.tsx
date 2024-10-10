import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { Header } from "@/components/Header";
import { useColorScheme } from "react-native";
import { useMemo, useState } from "react";
import { ColorSchemeProvider } from "@/providers/ColorSchemeProvider";
import { darkTheme } from "@/assets/themes/darkTheme";
import { lightTheme } from "@/assets/themes/lightTheme";

const RootLayout = () => {
  const systemColorScheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(systemColorScheme === "dark");
  const colorSchemeContext = useMemo(
    () => ({
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    [],
  );

  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <ColorSchemeProvider value={colorSchemeContext}>
      <PaperProvider theme={theme}>
        <Stack
          screenOptions={{
            header: () => <Header />,
            contentStyle: { backgroundColor: theme.colors.background },
          }}
        >
          <Stack.Screen name="index" options={{ title: "Overview" }} />
          <Stack.Screen name="SetGoal" options={{ title: "set your goal" }} />
          <Stack.Screen name="SetTime" options={{ title: "set your time" }} />
          <Stack.Screen name="Goal" options={{ title: "your goal" }} />
        </Stack>
      </PaperProvider>
    </ColorSchemeProvider>
  );
};

export default RootLayout;
