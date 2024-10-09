import { Stack } from "expo-router";
import { MD3LightTheme as DefaultTheme, PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    "primary": "rgb(163, 62, 21)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(255, 219, 207)",
    "onPrimaryContainer": "rgb(56, 12, 0)",
    "secondary": "rgb(146, 66, 117)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(255, 216, 235)",
    "onSecondaryContainer": "rgb(60, 0, 44)",
    "tertiary": "rgb(131, 84, 0)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(255, 221, 181)",
    "onTertiaryContainer": "rgb(42, 24, 0)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(255, 251, 255)",
    "onBackground": "rgb(32, 26, 24)",
    "surface": "rgb(255, 251, 255)",
    "onSurface": "rgb(32, 26, 24)",
    "surfaceVariant": "rgb(245, 222, 215)",
    "onSurfaceVariant": "rgb(83, 67, 62)",
    "outline": "rgb(133, 115, 109)",
    "outlineVariant": "rgb(216, 194, 187)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(54, 47, 45)",
    "inverseOnSurface": "rgb(251, 238, 234)",
    "inversePrimary": "rgb(255, 181, 156)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(250, 242, 243)",
      "level2": "rgb(248, 236, 236)",
      "level3": "rgb(245, 230, 229)",
      "level4": "rgb(244, 228, 227)",
      "level5": "rgb(242, 225, 222)"
    },
    "surfaceDisabled": "rgba(32, 26, 24, 0.12)",
    "onSurfaceDisabled": "rgba(32, 26, 24, 0.38)",
    "backdrop": "rgba(59, 45, 41, 0.4)"
  }
}

export default function RootLayout() {
  return (
    <PaperProvider theme={theme} >
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Overview' }} />
        <Stack.Screen name="SetGoal" options={{ title: 'set your goal' }} />
        <Stack.Screen name="SetTime" options={{ title: 'set your time' }} />
        <Stack.Screen name="Goal" options={{ title: 'your goal' }} />
      </Stack>
    </PaperProvider>
  );
}
