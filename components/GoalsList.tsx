import { useContext } from "react";
import { GoalsContext } from "@/providers/GoalsProvider";
import type { Goal } from "@/data/goals";
import { Alert } from "react-native";
import { Card } from "react-native-paper";
import { PrimaryText } from "@/components/PrimaryText";
import { IconButton } from "@/components/IconButton";

export const GoalsList = () => {
  const { goals, setGoals } = useContext(GoalsContext)!;

  const handleDeletePress = (goal: Goal) => {
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
  };

  const handleDelete = (goalToDelete: Goal) => {
    const updatedGoals = goals.filter(
      (goal: Goal) => goal.id != goalToDelete.id,
    );
    setGoals(updatedGoals);
  };

  return goals.map((goal: Goal) => (
    <Card
      key={goal.id}
      style={{
        marginVertical: 10,
      }}
    >
      <Card.Title
        title={<PrimaryText>{goal.content}</PrimaryText>}
        right={() => (
          <IconButton
            source={"delete"}
            onPress={() => handleDeletePress(goal)}
          />
        )}
      />
    </Card>
  ));
};
