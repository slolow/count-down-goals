import { Container } from "@/components/Container";
import { useState } from "react";
import { TextInput } from "@/components/TextInput";
import { TwoButtonsGroup } from "@/components/TwoButtonsGroup";

const SetGoal = () => {
  const [text, setText] = useState("");

  const isNextButtonDisabled = text.length < 3;

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
        />
      </Container>
    </>
  );
};

export default SetGoal;
