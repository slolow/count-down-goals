import { View } from "react-native";
import { PrimaryText } from "@/components/PrimaryText";
import { Link } from "expo-router";

const SetTime = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/Goal">
        <PrimaryText>See goal</PrimaryText>
      </Link>
    </View>
  );
};

export default SetTime;
