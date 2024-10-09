import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import { PrimaryText } from "@/components/PrimaryText";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PrimaryText>Oops! Not Found</PrimaryText>
        <Link href="/">
          <PrimaryText>Go back to Home screen!</PrimaryText>
        </Link>
      </View>
    </>
  );
};

export default NotFoundScreen;
