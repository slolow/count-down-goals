import { Link } from "expo-router";
import { PrimaryText } from "@/components/PrimaryText";
import { Container } from "@/components/Container";

const Index = () => {
  return (
    <Container>
      <Link href="/SetGoal">
        <PrimaryText>Set Goal</PrimaryText>
      </Link>
    </Container>
  );
};

export default Index;
