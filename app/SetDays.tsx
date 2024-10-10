import { Container } from "@/components/Container";
import { useState } from "react";
import { TextInput } from "@/components/TextInput";
import { TwoButtonsGroup } from "@/components/TwoButtonsGroup";

const SetDays = () => {
  const [days, setDays] = useState("");

  const isStartButtonDisabled = days === "";

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
        />
      </Container>
    </>
  );
};

export default SetDays;
