import { Container } from "@/components/Container";
import { useState } from "react";
import { TextInput } from "@/components/TextInput";
import { TwoButtonsGroup } from "@/components/TwoButtonsGroup";

const SetTime = () => {
  const [text, setText] = useState("");

  return (
    <>
      <Container mode={"centered"}>
        <TextInput
          label={"time"}
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </Container>
      <TwoButtonsGroup
        linkForLeftButton={"/SetGoal"}
        linkForRightButton={"/"}
        textLeftButton={"back"}
        textRightButton={"start"}
      />
    </>
  );
};

export default SetTime;
