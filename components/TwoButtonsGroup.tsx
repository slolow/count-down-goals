import { Href } from "expo-router";
import { useTheme } from "react-native-paper";
import { View } from "react-native";
import {
  MARGIN_BETWEEN_BUTTONS,
  SPACE_BETWEEN_SCREEN_BOTTOM_AND_LOWER_BUTTONS,
} from "@/assets/constants/ConstantStyles";
import { LinkButton } from "@/components/LinkButton";

type TwoButtonsGroupProps = {
  linkForLeftButton: Href<string | object>;
  linkForRightButton: Href<string | object>;
  textLeftButton: string;
  textRightButton: string;
  lastInput?: boolean;
  rightButtonDisabled: boolean;
};

export const TwoButtonsGroup = ({
  linkForLeftButton,
  linkForRightButton,
  textLeftButton,
  textRightButton,
  lastInput = false,
  rightButtonDisabled,
}: TwoButtonsGroupProps) => {
  const theme = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: SPACE_BETWEEN_SCREEN_BOTTOM_AND_LOWER_BUTTONS,
      }}
    >
      <LinkButton
        link={linkForLeftButton}
        mode={"outlined"}
        style={{
          marginRight: MARGIN_BETWEEN_BUTTONS,
          borderColor: theme.colors.secondary,
        }}
        labelStyle={{ color: theme.colors.secondary }}
        text={textLeftButton}
      />
      <LinkButton
        link={linkForRightButton}
        mode={"contained"}
        style={{
          backgroundColor: lastInput
            ? theme.colors.tertiary
            : theme.colors.secondary,
        }}
        text={textRightButton}
        disabled={rightButtonDisabled}
      />
    </View>
  );
};
