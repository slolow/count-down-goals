import { Href } from "expo-router";
import { useTheme } from "react-native-paper";
import { View } from "react-native";
import { MARGIN_HORIZONTAL_BETWEEN_BUTTONS } from "@/constants/ConstantStyles";
import { LinkButton } from "@/components/LinkButton";

type TwoButtonsGroupProps = {
  linkForLeftButton: Href<string | object>;
  linkForRightButton: Href<string | object>;
  textLeftButton: string;
  textRightButton: string;
  lastInput?: boolean;
  rightButtonDisabled: boolean;
  onPressNext: () => void;
  onPressBack?: () => void;
};

export const TwoButtonsGroup = ({
  linkForLeftButton,
  linkForRightButton,
  textLeftButton,
  textRightButton,
  lastInput = false,
  rightButtonDisabled,
  onPressNext,
  onPressBack,
}: TwoButtonsGroupProps) => {
  const theme = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <LinkButton
        link={linkForLeftButton}
        mode={"outlined"}
        style={{
          marginRight: MARGIN_HORIZONTAL_BETWEEN_BUTTONS,
          borderColor: theme.colors.secondary,
        }}
        labelStyle={{ color: theme.colors.secondary }}
        text={textLeftButton}
        onPress={onPressBack}
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
        onPress={onPressNext}
      />
    </View>
  );
};
