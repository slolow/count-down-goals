import { View } from "react-native";
import { Link } from "expo-router";
import { PrimaryText } from "@/components/PrimaryText";

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/SetGoal">
        <PrimaryText>Set Goal</PrimaryText>
      </Link>
    </View>
  );
};

export default Index;
