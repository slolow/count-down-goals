import { Stack } from "expo-router";
import { PaperProvider, ActivityIndicator } from "react-native-paper";
import { Header } from "@/components/Header";
import { useColorScheme } from "react-native";
import { useMemo, useState } from "react";
import { ColorSchemeProvider } from "@/providers/ColorSchemeProvider";
import { darkTheme } from "@/assets/themes/darkTheme";
import { lightTheme } from "@/assets/themes/lightTheme";
import { useFonts } from "expo-font";
import { Container } from "@/components/Container";

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
  const [loaded, error] = useFonts({
    Anton: require("../assets/fonts/Anton-Regular.ttf"),
  });

  const theme = isDarkTheme ? darkTheme : lightTheme;

  if (!loaded && !error) {
    return (
      <Container style={{ backgroundColor: theme.colors.background }}>
        <ActivityIndicator animating={true} color={theme.colors.primary} />
      </Container>
    );
  }
  if (error) {
    console.error(error);
  }

  return (
    <ColorSchemeProvider value={colorSchemeContext}>
      <PaperProvider theme={theme}>
        <Stack
          screenOptions={{
            header: () => <Header />,
            contentStyle: { backgroundColor: theme.colors.background },
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="SetGoal" />
          <Stack.Screen name="SetDays" />
          <Stack.Screen name="Goal" />
        </Stack>
      </PaperProvider>
    </ColorSchemeProvider>
  );
};

export default RootLayout;
