import { Button, Icon } from "react-native-paper";
import { ImageSourcePropType } from "react-native";

type IconButtonProps = {
  source: ImageSourcePropType | string | undefined;
  onPress: () => void;
};

export const IconButton = ({ source, onPress }: IconButtonProps) => {
  return (
    <Button
      icon={({ size, color }) => (
        <Icon size={2 * size} source={source} color={color}></Icon>
      )}
      onPress={onPress}
    >
      {""}
    </Button>
  );
};
