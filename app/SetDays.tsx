import { Container } from "@/components/Container";
import { useState } from "react";
import { TextInput } from "@/components/TextInput";
import { TwoButtonsGroup } from "@/components/TwoButtonsGroup";

const SetDays = () => {
  const [days, setDays] = useState("");

  const isStartButtonDisabled = days === "";

  return (
    <>
      <Container mode={"centered"}>
        <TextInput
          label={"days"}
          value={days}
          onChangeText={(days) => setDays(days)}
          inputMode={"numeric"}
        />
      </Container>
      <TwoButtonsGroup
        linkForLeftButton={"/SetGoal"}
        linkForRightButton={"/"}
        textLeftButton={"back"}
        textRightButton={"start"}
        lastInput={true}
        rightButtonDisabled={isStartButtonDisabled}
      />
    </>
  );
};

export default SetDays;
