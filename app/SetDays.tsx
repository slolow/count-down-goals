import { Container } from "@/components/Container";
import { useContext, useState } from "react";
import { TextInput } from "@/components/TextInput";
import { TwoButtonsGroup } from "@/components/TwoButtonsGroup";
import { GoalsContext } from "@/providers/GoalsProvider";
import { type Goal } from "@/data/goals";

const SetDays = () => {
  const [days, setDays] = useState("");
  const isStartButtonDisabled = days === "";
  const { goals, setGoals } = useContext(GoalsContext)!;

  const handleChangeText = (daysInput: string) => {
    if (!Number.isNaN(Number(daysInput))) {
      setDays(daysInput);
    }
  };

  const onPressStart = () => {
    const updatedGoals = goals.map((goal: Goal) => {
      if (goal.status === "pending") {
        return {
          ...goal,
          days: Number(days),
          remainingDays: Number(days),
          status: "created",
        } as Goal;
      } else {
        return goal;
      }
    });
    setGoals(updatedGoals);
  };

  return (
    <>
      <Container>
        <TextInput
          label={"days"}
          value={days}
          onChangeText={handleChangeText}
          inputMode={"numeric"}
        />
      </Container>
      <Container>
        <TwoButtonsGroup
          linkForLeftButton={"/SetGoal"}
          linkForRightButton={"/"}
          textLeftButton={"back"}
          textRightButton={"start"}
          isSubmitButtonGroup={true}
          rightButtonDisabled={isStartButtonDisabled}
          onPressNext={onPressStart}
        />
      </Container>
    </>
  );
};

export default SetDays;
