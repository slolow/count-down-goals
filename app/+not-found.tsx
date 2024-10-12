import { Stack } from "expo-router";
import { PrimaryText } from "@/components/PrimaryText";
import { Container } from "@/components/Container";
import { LinkButton } from "@/components/LinkButton";
import { MARGIN_VERTICAL } from "@/constants/ConstantStyles";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen />
      <Container mode={"centered"}>
        <PrimaryText style={{ marginBottom: MARGIN_VERTICAL }}>
          Oops! Not Found
        </PrimaryText>
        <LinkButton link={"/"} mode={"contained"} text={"Home"} />
      </Container>
    </>
  );
};

export default NotFoundScreen;
