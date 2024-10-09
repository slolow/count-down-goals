import { PrimaryText } from "@/components/PrimaryText";
import { Link } from "expo-router";
import { Container } from "@/components/Container";

const Goal = () => {
  return (
    <Container>
      <Link href="/">
        <PrimaryText>Go home</PrimaryText>
      </Link>
    </Container>
  );
};

export default Goal;
