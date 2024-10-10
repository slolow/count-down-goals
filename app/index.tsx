import { Card } from "react-native-paper";
import { PrimaryText } from "@/components/PrimaryText";
import { IconButton } from "@/components/IconButton";
import { View } from "react-native";
import { Container } from "@/components/Container";
import { Link } from "expo-router";
import { SPACE_BETWEEN_SCREEN_BOTTOM_AND_LOWER_BUTTONS } from "@/assets/constants/ConstantStyles";
import { useContext } from "react";
import { GoalsContext } from "@/providers/GoalsProvider";
import { type Goals } from "@/app/_layout";

const Goals = () => {
  // @ts-ignore
  const { getGoals } = useContext(GoalsContext);
  const goals: Goals = getGoals();

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
    <Container mode={"overview"}>
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
