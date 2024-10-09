import { PrimaryText } from "@/components/PrimaryText";
import { Link } from "expo-router";
import { Container } from "@/components/Container";

const SetTime = () => {
  return (
    <Container>
      <Link href="/Goal">
        <PrimaryText>See goal</PrimaryText>
      </Link>
    </Container>
  );
};

export default SetTime;
