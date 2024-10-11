import { Container } from "@/components/Container";
import { useContext, useState } from "react";
import { TextInput } from "@/components/TextInput";
import { TwoButtonsGroup } from "@/components/TwoButtonsGroup";
import { GoalsContext } from "@/providers/GoalsProvider";
import { v4 as uuidv4 } from "uuid";
import { Goal } from "@/data/goals";

const SetGoal = () => {
  const [text, setText] = useState("");
  const isNextButtonDisabled = text.length < 3;
  // @ts-ignore
  const { goals, setGoals } = useContext(GoalsContext);

  const handlePressNext = () => {
    const goal: Goal = {
      id: uuidv4(),
      content: text,
      days: 0,
      status: "pending",
    };
    setGoals([...goals, goal]);
  };

  return (
    <>
      <Container>
        <TextInput
          label={"goal"}
          value={text}
          onChangeText={(text) => setText(text)}
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
        />
      </Container>
    </>
  );
};

export default SetGoal;
