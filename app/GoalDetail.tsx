import { PrimaryText } from "@/components/PrimaryText";
import { Container } from "@/components/Container";
import { useContext } from "react";
import { GoalsContext } from "@/providers/GoalsProvider";
import { type Goal } from "@/data/goals";
import { LinkButton } from "@/components/LinkButton";
import { MARGIN_VERTICAL } from "@/constants/ConstantStyles";
import { getTodaysTimeStamp } from "@/dates/dates";

const GoalDetail = () => {
  const { goals, setGoals } = useContext(GoalsContext)!;
  const goal = goals.find((goal: Goal) => goal.selected)!;

  const calculateRemainingDays = (): number => {
    const today = getTodaysTimeStamp();

    const differenceInMs = today - goal.createdAt;
    const differenceInDays = Math.round(differenceInMs / (1000 * 60 * 60 * 24));

    return goal.days - differenceInDays;
  };

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
      <PrimaryText style={{ marginBottom: MARGIN_VERTICAL }}>
        {goal.content}
      </PrimaryText>
      <PrimaryText style={{ marginBottom: MARGIN_VERTICAL }}>
        {`${calculateRemainingDays()} days left`}
      </PrimaryText>
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
