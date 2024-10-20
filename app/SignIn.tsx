import { Button, Icon, useTheme } from "react-native-paper";
import { PrimaryText } from "@/components/PrimaryText";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { useEffect } from "react";
import { useAuthContext } from "@/hook/useAuthContext";

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: `https://github.com/login/oauth/authorize?client_id=${process.env.EXPO_PUBLIC_GITHUB_CLIENT_ID}`,
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint: `https://github.com/settings/connections/applications/${process.env.EXPO_PUBLIC_GITHUB_CLIENT_ID}`,
};

const SignIn = () => {
  const theme = useTheme();
  const { setAccessToken } = useAuthContext()!;

  const [, response, promptAsync] = useAuthRequest(
    {
      clientId: process.env.EXPO_PUBLIC_GITHUB_CLIENT_ID!,
      scopes: [],
      redirectUri: makeRedirectUri(),
    },
    discovery,
  );

  const getAccessToken = async (code: string) => {
    const response = await fetch(
      "http://localhost:4000/accessToken?code=" + code,
      {
        method: "GET",
      },
    );

    return await response.json();
  };

  const handleOAuthResponse = async () => {
    if (response?.type === "success") {
      const { code } = response.params;
      const { access_token } = await getAccessToken(code);
      setAccessToken(access_token);
    }
  };

  useEffect(() => {
    handleOAuthResponse().catch((error) =>
      console.error("failed to get access token from proxy", error),
    );
  }, [response]);

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
