import { IconButton } from "@/components/IconButton";
import { View } from "react-native";
import { Container } from "@/components/Container";
import { Link } from "expo-router";
import { VERTICAL_SPACE_BETWEEN_SCREEN_BOTTOM_AND_LOWER_BUTTONS } from "@/assets/constants/ConstantStyles";
import { GoalsList } from "@/components/GoalsList";

const Index = () => {
  return (
    <Container mode={"overview"}>
      <GoalsList />
      <View
        style={{
          position: "absolute",
          bottom: VERTICAL_SPACE_BETWEEN_SCREEN_BOTTOM_AND_LOWER_BUTTONS,
          right: 0,
        }}
      >
        <Link href={"/SetGoal"}>
          <IconButton source={"plus-circle-outline"} sizeMultiplier={3} />
        </Link>
      </View>
    </Container>
  );
};

export default Index;
