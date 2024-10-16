import { useContext } from "react";
import { GoalsContext } from "@/providers/GoalsProvider";
import type { Goal } from "@/data/goals";
import { Alert, Dimensions, Platform, ScrollView } from "react-native";
import { Card, useTheme } from "react-native-paper";
import { PrimaryText } from "@/components/PrimaryText";
import { IconButton } from "@/components/IconButton";
import { useRouter } from "expo-router";
import { MARGIN_HORIZONTAL, MARGIN_VERTICAL } from "@/constants/ConstantStyles";
import { calculateRemainingDays } from "@/dates/dates";

export const GoalsList = () => {
  const router = useRouter();
  const theme = useTheme();
  const { goals, setGoals } = useContext(GoalsContext)!;
  const reachedGoals = goals.filter((goal: Goal) => goal.reached);
  const unreachedGoals = goals.filter((goal: Goal) => !goal.reached);

  const handleGoalPress = (goalToShow: Goal) => {
    const updatedGoals = goals.map((goal: Goal) => {
      if (goal.id === goalToShow.id) {
        const remainingDays = calculateRemainingDays(goal);
        const reached = remainingDays <= 0;
        return {
          ...goal,
          selected: true,
          remainingDays,
          reached,
        };
      } else {
        return goal;
      }
    });
    setGoals(updatedGoals);
    router.push("/GoalDetail");
  };

  const handleDeletePress = (goal: Goal) => {
    if (Platform.OS === "web") {
      const confirmed = window.confirm(
        "Do you really want to delete this item?",
      );
      if (confirmed) {
        handleDelete(goal);
      }
    } else {
      Alert.alert(
        "Are you sure?",
        "Do you really want to delete this item?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel", // iOS specific, makes the button look bold
          },
          {
            text: "Delete",
            onPress: () => handleDelete(goal),
            style: "destructive", // iOS specific, makes the button red
          },
        ],
        { cancelable: false }, // Prevent dismissing the dialog by tapping outside
      );
    }
  };

  const handleDelete = (goalToDelete: Goal) => {
    const updatedGoals = goals.filter(
      (goal: Goal) => goal.id != goalToDelete.id,
    );
    setGoals(updatedGoals);
  };

  const UnreachedGoalsList = () => {
    return unreachedGoals.map((goal: Goal) => (
      <Card
        style={{
          marginVertical: MARGIN_VERTICAL,
          width: Dimensions.get("window").width - 2 * MARGIN_HORIZONTAL,
        }}
        mode={"contained"}
        key={goal.id}
        onPress={() => handleGoalPress(goal)}
      >
        <Card.Title
          title={<PrimaryText>{goal.content}</PrimaryText>}
          right={() => (
            <IconButton
              source={"delete"}
              onPress={() => {
                handleDeletePress(goal);
              }}
            />
          )}
        />
      </Card>
    ));
  };

  const ReachedGoalsList = () => {
    return reachedGoals.map((goal: Goal) => (
      <Card
        style={{
          marginVertical: MARGIN_VERTICAL,
          width: Dimensions.get("window").width - 2 * MARGIN_HORIZONTAL,
          backgroundColor: theme.colors.tertiary,
        }}
        mode={"contained"}
        key={goal.id}
        onPress={() => handleGoalPress(goal)}
      >
        <Card.Title
          title={
            <PrimaryText style={{ color: theme.colors.background }}>
              {goal.content}
            </PrimaryText>
          }
          left={() => (
            <IconButton source={"check"} iconColor={theme.colors.background} />
          )}
          right={() => (
            <IconButton
              source={"delete"}
              onPress={() => handleDeletePress(goal)}
              iconColor={theme.colors.background}
            />
          )}
        />
      </Card>
    ));
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={{ paddingTop: MARGIN_VERTICAL }}
    >
      <UnreachedGoalsList />
      <ReachedGoalsList />
    </ScrollView>
  );
};
