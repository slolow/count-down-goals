import { PrimaryText } from "@/components/PrimaryText";
import { Container } from "@/components/Container";
import { useContext } from "react";
import { GoalsContext } from "@/providers/GoalsProvider";
import { type Goal } from "@/data/goals";
import { LinkButton } from "@/components/LinkButton";
import { View } from "react-native";
import { MARGIN_VERTICAL } from "@/assets/constants/ConstantStyles";

const GoalDetail = () => {
  const { goals, setGoals } = useContext(GoalsContext)!;
  const goal = goals.find((goal: Goal) => goal.selected);

  const handleBackPress = () => {
    const updatedGoals = goals.map((goal: Goal) => {
      if (goal.selected) {
        return {
          ...goal,
          selected: false,
        };
      } else {
        return goal;
      }
    });
    setGoals(updatedGoals);
  };

  return (
    <Container mode={"centered"}>
      <View style={{ marginBottom: MARGIN_VERTICAL }}>
        <PrimaryText>{goal?.content}</PrimaryText>
      </View>
      <LinkButton
        link="/"
        mode={"contained"}
        onPress={handleBackPress}
        text={"Back"}
      />
    </Container>
  );
};

export default GoalDetail;
