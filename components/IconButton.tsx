import { Button, Icon, useTheme } from "react-native-paper";
import { ImageSourcePropType } from "react-native";

type IconButtonProps = {
  source: ImageSourcePropType | string | undefined;
  onPress?: () => void;
  sizeMultiplier?: number;
  iconColor?: string;
};

export const IconButton = ({
  source,
  onPress,
  sizeMultiplier = 2,
  iconColor,
}: IconButtonProps) => {
  const theme = useTheme();

  return (
    <Button
      icon={({ size }) => (
        <Icon
          size={sizeMultiplier * size}
          source={source}
          color={iconColor || theme.colors.secondary}
        />
      )}
      onPress={onPress}
    >
      {""}
    </Button>
  );
};
