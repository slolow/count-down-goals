import { Card } from "react-native-paper";
import { PrimaryText } from "@/components/PrimaryText";

const goals = [
  { id: 0, content: "live sugar free", days: 30 },
  { id: 1, content: "play guitar for 10 minutes every day", days: 90 },
  {
    id: 2,
    content: "think about a moment in your day that you are grateful for",
    days: 10,
  },
];

const Index = () => {
  return goals.map((goal) => (
    <Card key={goal.id} style={{ margin: 10 }}>
      <Card.Content>
        <PrimaryText>{goal.content}</PrimaryText>
      </Card.Content>
    </Card>
  ));
};

export default Index;
