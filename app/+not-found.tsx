import { Stack } from "expo-router";
import { PrimaryText } from "@/components/PrimaryText";
import { Container } from "@/components/Container";
import { LinkButton } from "@/components/LinkButton";
import { View } from "react-native";
import { MARGIN_VERTICAL } from "@/assets/constants/ConstantStyles";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen />
      <Container mode={"centered"}>
        <View style={{ marginBottom: MARGIN_VERTICAL }}>
          <PrimaryText>Oops! Not Found</PrimaryText>
        </View>
        <LinkButton link={"/"} mode={"contained"} text={"Home"} />
      </Container>
    </>
  );
};

export default NotFoundScreen;
