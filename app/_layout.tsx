import "react-native-get-random-values";
import { Stack } from "expo-router";
import { PaperProvider, ActivityIndicator } from "react-native-paper";
import { Header } from "@/components/Header";
import { useColorScheme } from "react-native";
import { useEffect, useMemo, useState } from "react";
import { ColorSchemeProvider } from "@/providers/ColorSchemeProvider";
import { darkTheme } from "@/assets/themes/darkTheme";
import { lightTheme } from "@/assets/themes/lightTheme";
import { useFonts } from "expo-font";
import { Container } from "@/components/Container";
import { GoalsProvider } from "@/providers/GoalsProvider";
import { type Goals } from "@/data/goals";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignIn from "@/app/SignIn";

const RootLayout = () => {
  const systemColorScheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    systemColorScheme === "dark",
  );
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [goals, setGoals] = useState<Goals>([]);
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

  useEffect(() => {
    const loadIsDarkTheme = async () => {
      const storedIsDarkTheme = await AsyncStorage.getItem("isDarkTheme");
      if (storedIsDarkTheme !== null) {
        setIsDarkTheme(JSON.parse(storedIsDarkTheme));
      }
    };
    const loadAccessToken = async () => {
      const storedAccessToken = await AsyncStorage.getItem("accessToken");
      if (storedAccessToken !== null) {
        setAccessToken(JSON.parse(storedAccessToken));
      }
    };
    const loadGoals = async () => {
      const storedGoals = await AsyncStorage.getItem("goals");
      if (storedGoals !== null) {
        setGoals(JSON.parse(storedGoals));
      }
    };
    loadIsDarkTheme().catch((error) =>
      console.error("Failed to load isDarkTheme from storage", error),
    );
    loadAccessToken().catch((error) =>
      console.error("Failed to load accessToken from storage", error),
    );
    loadGoals().catch((error) =>
      console.error("Failed to load goals from storage", error),
    );
  }, []);

  useEffect(() => {
    const saveIsDarkTheme = async () => {
      await AsyncStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
    };
    saveIsDarkTheme().catch((error) =>
      console.error("Failed to save isDarkTheme to storage", error),
    );
  }, [isDarkTheme]);

  useEffect(() => {
    const saveAccessToken = async () => {
      await AsyncStorage.setItem("accessToken", JSON.stringify(accessToken));
    };
    saveAccessToken().catch((error) =>
      console.error("Failed to save accessToken to storage", error),
    );
  }, [accessToken]);

  useEffect(() => {
    const saveGoals = async () => {
      await AsyncStorage.setItem("goals", JSON.stringify(goals));
    };
    saveGoals().catch((error) =>
      console.error("Failed to save goals to storage", error),
    );
  }, [goals]);

  const theme = isDarkTheme ? darkTheme : lightTheme;

  if (!loaded && !error) {
    return (
      <Container
        style={{
          marginHorizontal: 0,
          backgroundColor: theme.colors.background,
        }}
      >
        <ActivityIndicator animating={true} color={theme.colors.primary} />
      </Container>
    );
  }

  if (error) {
    console.error(error);
  }

  return (
    <ColorSchemeProvider value={colorSchemeContext}>
      <GoalsProvider
        value={{
          goals,
          setGoals,
        }}
      >
        <PaperProvider theme={theme}>
          {accessToken ? (
            <Stack
              screenOptions={{
                header: () => <Header />,
                contentStyle: { backgroundColor: theme.colors.background },
              }}
            >
              <Stack.Screen name="index" />
              <Stack.Screen name="SetGoal" />
              <Stack.Screen name="SetDays" />
              <Stack.Screen name="GoalDetail" />
              <Stack.Screen name="SignIn" />
            </Stack>
          ) : (
            <Container
              mode={"centered"}
              style={{
                marginHorizontal: 0,
                backgroundColor: theme.colors.background,
              }}
            >
              <SignIn />
            </Container>
          )}
        </PaperProvider>
      </GoalsProvider>
    </ColorSchemeProvider>
  );
};

export default RootLayout;
