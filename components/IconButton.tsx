import { Button, Icon, useTheme } from "react-native-paper";
import { ImageSourcePropType, type View } from "react-native";
import React, { forwardRef } from "react";

type IconButtonProps = {
  source: ImageSourcePropType | string | undefined;
  onPress?: () => void;
  sizeMultiplier?: number;
  iconColor?: string;
};

export const IconButton = forwardRef(
  (
    { source, onPress, sizeMultiplier = 2, iconColor }: IconButtonProps,
    ref: React.LegacyRef<View>,
  ) => {
    const theme = useTheme();

    return (
      <Button
        ref={ref}
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
  },
);
