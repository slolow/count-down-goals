import { Container } from "@/components/Container";
import { useContext, useState } from "react";
import { TextInput } from "@/components/TextInput";
import { TwoButtonsGroup } from "@/components/TwoButtonsGroup";
import { GoalsContext } from "@/providers/GoalsProvider";
import { type Goal } from "@/data/goals";

const SetDays = () => {
  const [days, setDays] = useState("");
  const isStartButtonDisabled = days === "";
  // @ts-ignore
  const { getGoals, updateGoals } = useContext(GoalsContext);
  const goals = getGoals();

  const onPressStart = () => {
    const pendingGoal = goals.find((goal: Goal) => goal.status === "pending");
    pendingGoal.days = days;
    pendingGoal.status = "created";
    updateGoals(goals);
  };

  return (
    <>
      <Container>
        <TextInput
          label={"days"}
          value={days}
          onChangeText={(days) => setDays(days)}
          inputMode={"numeric"}
        />
      </Container>
      <Container>
        <TwoButtonsGroup
          linkForLeftButton={"/SetGoal"}
          linkForRightButton={"/"}
          textLeftButton={"back"}
          textRightButton={"start"}
          lastInput={true}
          rightButtonDisabled={isStartButtonDisabled}
          onPressNext={onPressStart}
        />
      </Container>
    </>
  );
};

export default SetDays;
