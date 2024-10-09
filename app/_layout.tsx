import { Stack } from "expo-router";
import {
  MD3LightTheme as DefaultLightTheme,
  MD3DarkTheme as DefaultDarkTheme,
  PaperProvider,
} from "react-native-paper";
import { Header } from "@/components/Header";
import { useColorScheme } from "react-native";
import { useMemo, useState } from "react";
import { ColorSchemeProvider } from "@/provider/ColorSchemeProvider";

const themes = {
  light: {
    ...DefaultLightTheme,
    colors: {
      primary: "rgb(163, 62, 21)",
      onPrimary: "rgb(255, 255, 255)",
      primaryContainer: "rgb(255, 219, 207)",
      onPrimaryContainer: "rgb(56, 12, 0)",
      secondary: "rgb(146, 66, 117)",
      onSecondary: "rgb(255, 255, 255)",
      secondaryContainer: "rgb(255, 216, 235)",
      onSecondaryContainer: "rgb(60, 0, 44)",
      tertiary: "rgb(131, 84, 0)",
      onTertiary: "rgb(255, 255, 255)",
      tertiaryContainer: "rgb(255, 221, 181)",
      onTertiaryContainer: "rgb(42, 24, 0)",
      error: "rgb(186, 26, 26)",
      onError: "rgb(255, 255, 255)",
      errorContainer: "rgb(255, 218, 214)",
      onErrorContainer: "rgb(65, 0, 2)",
      background: "rgb(255, 251, 255)",
      onBackground: "rgb(32, 26, 24)",
      surface: "rgb(255, 251, 255)",
      onSurface: "rgb(32, 26, 24)",
      surfaceVariant: "rgb(245, 222, 215)",
      onSurfaceVariant: "rgb(83, 67, 62)",
      outline: "rgb(133, 115, 109)",
      outlineVariant: "rgb(216, 194, 187)",
      shadow: "rgb(0, 0, 0)",
      scrim: "rgb(0, 0, 0)",
      inverseSurface: "rgb(54, 47, 45)",
      inverseOnSurface: "rgb(251, 238, 234)",
      inversePrimary: "rgb(255, 181, 156)",
      elevation: {
        level0: "transparent",
        level1: "rgb(250, 242, 243)",
        level2: "rgb(248, 236, 236)",
        level3: "rgb(245, 230, 229)",
        level4: "rgb(244, 228, 227)",
        level5: "rgb(242, 225, 222)",
      },
      surfaceDisabled: "rgba(32, 26, 24, 0.12)",
      onSurfaceDisabled: "rgba(32, 26, 24, 0.38)",
      backdrop: "rgba(59, 45, 41, 0.4)",
    },
    dark: false,
  },
  dark: {
    ...DefaultDarkTheme,
    colors: {
      primary: "rgb(255, 181, 156)",
      onPrimary: "rgb(92, 26, 0)",
      primaryContainer: "rgb(130, 40, 0)",
      onPrimaryContainer: "rgb(255, 219, 207)",
      secondary: "rgb(255, 174, 220)",
      onSecondary: "rgb(90, 17, 68)",
      secondaryContainer: "rgb(118, 42, 92)",
      onSecondaryContainer: "rgb(255, 216, 235)",
      tertiary: "rgb(255, 185, 86)",
      onTertiary: "rgb(70, 43, 0)",
      tertiaryContainer: "rgb(99, 63, 0)",
      onTertiaryContainer: "rgb(255, 221, 181)",
      error: "rgb(255, 180, 171)",
      onError: "rgb(105, 0, 5)",
      errorContainer: "rgb(147, 0, 10)",
      onErrorContainer: "rgb(255, 180, 171)",
      background: "rgb(32, 26, 24)",
      onBackground: "rgb(237, 224, 220)",
      surface: "rgb(32, 26, 24)",
      onSurface: "rgb(237, 224, 220)",
      surfaceVariant: "rgb(83, 67, 62)",
      onSurfaceVariant: "rgb(216, 194, 187)",
      outline: "rgb(160, 141, 134)",
      outlineVariant: "rgb(83, 67, 62)",
      shadow: "rgb(0, 0, 0)",
      scrim: "rgb(0, 0, 0)",
      inverseSurface: "rgb(237, 224, 220)",
      inverseOnSurface: "rgb(54, 47, 45)",
      inversePrimary: "rgb(163, 62, 21)",
      elevation: {
        level0: "transparent",
        level1: "rgb(43, 34, 31)",
        level2: "rgb(50, 38, 35)",
        level3: "rgb(57, 43, 39)",
        level4: "rgb(59, 45, 40)",
        level5: "rgb(63, 48, 43)",
      },
      surfaceDisabled: "rgba(237, 224, 220, 0.12)",
      onSurfaceDisabled: "rgba(237, 224, 220, 0.38)",
      backdrop: "rgba(59, 45, 41, 0.4)",
    },
    dark: true,
  },
};

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

  const theme = isDarkTheme ? themes.dark : themes.light;
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
