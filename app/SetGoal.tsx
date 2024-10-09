import { View } from "react-native";
import { PrimaryText } from "@/components/PrimaryText";
import { Link } from "expo-router";

const SetGoal = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/SetTime">
        <PrimaryText>Set Time</PrimaryText>
      </Link>
    </View>
  );
};

export default SetGoal;
