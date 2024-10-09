import { Link, Stack } from "expo-router";
import { PrimaryText } from "@/components/PrimaryText";
import { Container } from "@/components/Container";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <Container>
        <PrimaryText>Oops! Not Found</PrimaryText>
        <Link href="/">
          <PrimaryText>Go back to Home screen!</PrimaryText>
        </Link>
      </Container>
    </>
  );
};

export default NotFoundScreen;
