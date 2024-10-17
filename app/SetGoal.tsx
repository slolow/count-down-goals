import { Container } from "@/components/Container";
import { useContext, useState } from "react";
import { TextInput } from "@/components/TextInput";
import { TwoButtonsGroup } from "@/components/TwoButtonsGroup";
import { GoalsContext } from "@/providers/GoalsProvider";
import { v4 as uuidv4 } from "uuid";
import { Goal } from "@/data/goals";
import { getTodaysTimeStamp } from "@/dates/dates";

const SetGoal = () => {
  const { goals, setGoals } = useContext(GoalsContext)!;
  const pendingGoal = goals.find((goal: Goal) => goal.status === "pending");
  const [text, setText] = useState("");
  const isNextButtonDisabled = text.trimEnd().length < 3;

  const handlePressNext = () => {
    if (!pendingGoal) {
      const goal: Goal = {
        id: uuidv4(),
        content: text.trimEnd(),
        days: 0,
        status: "pending",
        selected: false,
        createdAt: getTodaysTimeStamp(),
        remainingDays: 0,
        reached: false,
      };
      setGoals([goal, ...goals]);
    } else {
      const updatedGoals = goals.map((goal: Goal) => {
        if (goal.id === pendingGoal.id) {
          return {
            ...goal,
            content: text.trimEnd(),
          };
        } else {
          return goal;
        }
      });
      setGoals(updatedGoals);
    }
  };

  const handlePressCancel = () => {
    const updatedGoals = goals.filter(
      (goal: Goal) => goal.status !== "pending",
    );
    setGoals(updatedGoals);
  };

  return (
    <>
      <Container>
        <TextInput
          label={"goal"}
          value={text}
          onChangeText={(text) => setText(text.trimStart())}
        />
      </Container>
      <Container>
        <TwoButtonsGroup
          linkForLeftButton={"/"}
          linkForRightButton={"/SetDays"}
          textLeftButton={"cancel"}
          textRightButton={"next"}
          rightButtonDisabled={isNextButtonDisabled}
          onPressNext={handlePressNext}
          onPressBack={handlePressCancel}
        />
      </Container>
    </>
  );
};

export default SetGoal;
