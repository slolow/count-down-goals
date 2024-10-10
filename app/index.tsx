import { Card } from "react-native-paper";
import { PrimaryText } from "@/components/PrimaryText";

const goals = [
  "live sugar free",
  "play guitar for 10 minutes every day",
  "think about a moment in your day that you are grateful for",
];

const Index = () => {
  return goals.map((goal) => (
    <Card style={{ margin: 10 }}>
      <Card.Content>
        <PrimaryText>{goal}</PrimaryText>
      </Card.Content>
    </Card>
  ));
};

export default Index;
