import { Container } from "@/components/Container";
import { useState } from "react";
import { TextInput } from "@/components/TextInput";
import { TwoButtonsGroup } from "@/components/TwoButtonsGroup";

const SetGoal = () => {
  const [text, setText] = useState("");

  const isNextButtonDisabled = text.length < 3;

  return (
    <>
      <Container mode={"centered"}>
        <TextInput
          label={"goal"}
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </Container>
      <TwoButtonsGroup
        linkForLeftButton={"/"}
        linkForRightButton={"/SetTime"}
        textLeftButton={"cancel"}
        textRightButton={"next"}
        rightButtonDisabled={isNextButtonDisabled}
      />
    </>
  );
};

export default SetGoal;
