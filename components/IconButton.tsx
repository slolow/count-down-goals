import { Button } from "react-native-paper";
import { Image, ImageSourcePropType } from "react-native";

type IconButtonProps = {
  source: ImageSourcePropType | undefined;
};

export const IconButton = ({ source }: IconButtonProps) => {
  return (
    <Button
      icon={({ size, color }) => (
        <Image
          source={source}
          style={{ width: 2 * size, height: 2 * size, tintColor: color }}
        />
      )}
    >
      {""}
    </Button>
  );
};
