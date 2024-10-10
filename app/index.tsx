import { Card } from "react-native-paper";
import { PrimaryText } from "@/components/PrimaryText";
import { IconButton } from "@/components/IconButton";
import { View } from "react-native";
import { Container } from "@/components/Container";
import { Link } from "expo-router";
import { SPACE_BETWEEN_SCREEN_BOTTOM_AND_LOWER_BUTTONS } from "@/assets/constants/ConstantStyles";

const goals = [
  { id: 0, content: "live sugar free", days: 30 },
  { id: 1, content: "play guitar for 10 minutes every day", days: 90 },
  {
    id: 2,
    content: "think about a moment in your day that you are grateful for",
    days: 10,
  },
];

const Goals = () => {
  return goals.map((goal) => (
    <Card key={goal.id} style={{ marginVertical: 10 }}>
      <Card.Content>
        <PrimaryText>{goal.content}</PrimaryText>
      </Card.Content>
    </Card>
  ));
};

const Index = () => {
  return (
    <Container>
      <Goals />
      <View
        style={{
          position: "absolute",
          bottom: SPACE_BETWEEN_SCREEN_BOTTOM_AND_LOWER_BUTTONS,
          right: 0,
        }}
      >
        <Link href={"/SetGoal"}>
          <IconButton source={"plus-circle-outline"} sizeMultiplier={3} />
        </Link>
      </View>
    </Container>
  );
};

export default Index;
