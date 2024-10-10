import { Button, Icon, useTheme } from "react-native-paper";
import { ImageSourcePropType } from "react-native";

type IconButtonProps = {
  source: ImageSourcePropType | string | undefined;
  onPress: () => void;
  sizeMultiplier?: number;
};

export const IconButton = ({
  source,
  onPress,
  sizeMultiplier = 2,
}: IconButtonProps) => {
  const theme = useTheme();

  return (
    <Button
      icon={({ size }) => (
        <Icon
          size={sizeMultiplier * size}
          source={source}
          color={theme.colors.secondary}
        ></Icon>
      )}
      onPress={onPress}
    >
      {""}
    </Button>
  );
};
