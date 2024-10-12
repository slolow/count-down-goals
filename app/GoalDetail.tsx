import { useTheme } from "react-native-paper";
import { PrimaryText } from "@/components/PrimaryText";
import { useContext } from "react";
import { GoalsContext } from "@/providers/GoalsProvider";
import { type Goal } from "@/data/goals";
import { LinkButton } from "@/components/LinkButton";
import { MARGIN_VERTICAL } from "@/constants/ConstantStyles";
import { View } from "react-native";

const GoalDetail = () => {
  const { goals, setGoals } = useContext(GoalsContext)!;
  const goal = goals.find((goal: Goal) => goal.selected)!;
  const theme = useTheme();

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
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}
    >
      <PrimaryText variant={"displaySmall"}>{goal.content}</PrimaryText>
      <PrimaryText style={{ marginBottom: MARGIN_VERTICAL }}>
        {goal.reached
          ? `🎉 You reached your goal of ${goal.days} days! 🎉`
          : `${goal.remainingDays} days left`}
      </PrimaryText>
      <LinkButton
        link="/"
        mode={"contained"}
        onPress={handleBackPress}
        text={"Back"}
        style={{
          backgroundColor: theme.colors.secondary,
        }}
      />
    </View>
  );
};

export default GoalDetail;
