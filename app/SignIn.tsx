import { Button, Icon, useTheme } from "react-native-paper";
import { PrimaryText } from "@/components/PrimaryText";

const SignIn = () => {
  const theme = useTheme();
  return (
    <Button
      mode={"contained"}
      style={{ backgroundColor: theme.colors.tertiary }}
      icon={({ size }) => (
        <Icon
          size={2 * size}
          source={"github"}
          color={theme.colors.background}
        />
      )}
    >
      <PrimaryText style={{ color: theme.colors.background }}>
        Sign in with github
      </PrimaryText>
    </Button>
  );
};

export default SignIn;
