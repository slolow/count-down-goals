import { Button } from "react-native-paper";
import { Image, ImageSourcePropType } from "react-native";

type IconButtonProps = {
  source: ImageSourcePropType | undefined;
  onPress: () => void;
};

export const IconButton = ({ source, onPress }: IconButtonProps) => {
  return (
    <Button
      icon={({ size, color }) => (
        <Image
          source={source}
          style={{ width: 2 * size, height: 2 * size, tintColor: color }}
        />
      )}
      onPress={onPress}
    >
      {""}
    </Button>
  );
};
