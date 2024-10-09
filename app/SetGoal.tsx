import { PrimaryText } from "@/components/PrimaryText";
import { Link } from "expo-router";
import { Container } from "@/components/Container";

const SetGoal = () => {
  return (
    <Container>
      <Link href="/SetTime">
        <PrimaryText>Set Time</PrimaryText>
      </Link>
    </Container>
  );
};

export default SetGoal;
