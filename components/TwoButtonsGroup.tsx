import { Href, Link } from "expo-router";
import { Button, useTheme } from "react-native-paper";
import { Dimensions, View } from "react-native";

const MARGIN_BETWEEN_BUTTONS = 20;

type TwoButtonsGroupProps = {
  linkForLeftButton: Href<string | object>;
  linkForRightButton: Href<string | object>;
  textLeftButton: string;
  textRightButton: string;
};

export const TwoButtonsGroup = ({
  linkForLeftButton,
  linkForRightButton,
  textLeftButton,
  textRightButton,
}: TwoButtonsGroupProps) => {
  const theme = useTheme();
  const windowWidth = Dimensions.get("window").width;

  const buttonWidth = windowWidth / 2 - MARGIN_BETWEEN_BUTTONS - 5;

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 50,
      }}
    >
      <Link href={linkForLeftButton}>
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
          {textLeftButton}
        </Button>
      </Link>
      <Link href={linkForRightButton}>
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
          {textRightButton}
        </Button>
      </Link>
    </View>
  );
};
