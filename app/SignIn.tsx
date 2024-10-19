import { Button, Icon, useTheme } from "react-native-paper";
import { PrimaryText } from "@/components/PrimaryText";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: `https://github.com/login/oauth/authorize?client_id=${process.env.EXPO_PUBLIC_GITHUB_CLIENT_ID}`,
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint: `https://github.com/settings/connections/applications/${process.env.EXPO_PUBLIC_GITHUB_CLIENT_ID}`,
};

const SignIn = () => {
  const theme = useTheme();

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: process.env.EXPO_PUBLIC_GITHUB_CLIENT_ID!,
      scopes: [],
      redirectUri: makeRedirectUri(),
    },
    discovery,
  );

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
      onPress={() => promptAsync()}
    >
      <PrimaryText style={{ color: theme.colors.background }}>
        Sign in with github
      </PrimaryText>
    </Button>
  );
};

export default SignIn;
