import { Link } from "expo-router";
import { Container } from "@/components/Container";
import { Button, TextInput, useTheme } from "react-native-paper";
import { useState } from "react";
import { Dimensions, View } from "react-native";

const SetGoal = () => {
  const theme = useTheme();
  const windowWidth = Dimensions.get("window").width;
  const [text, setText] = useState("");

  const MARGIN_BETWEEN_BUTTONS = 20;
  const buttonWidth = windowWidth / 2 - MARGIN_BETWEEN_BUTTONS - 5;

  return (
    <>
      <Container mode={"centered"}>
        <TextInput
          label={"goal"}
          value={text}
          mode={"outlined"}
          autoFocus={true}
          onChangeText={(text) => setText(text)}
        />
      </Container>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 50,
        }}
      >
        <Link href="/">
          <Button
            mode={"outlined"}
            style={{
              marginRight: MARGIN_BETWEEN_BUTTONS,
              width: buttonWidth,
              height: 50,
              borderColor: theme.colors.secondary,
            }}
            theme={{ roundness: 10 }}
            labelStyle={{
              fontSize: theme.fonts.titleLarge.fontSize,
              color: theme.colors.secondary,
              padding: 8,
            }}
            uppercase={true}
          >
            Cancel
          </Button>
        </Link>
        <Link href="/SetTime">
          <Button
            mode={"contained"}
            style={{
              width: buttonWidth,
              height: 50,
              backgroundColor: theme.colors.secondary,
            }}
            theme={{ roundness: 10 }}
            labelStyle={{
              fontSize: theme.fonts.titleLarge.fontSize,
              padding: 8,
            }}
            uppercase={true}
          >
            Next
          </Button>
        </Link>
      </View>
    </>
  );
};

export default SetGoal;
