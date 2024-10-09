import { View } from "react-native";
import { Link } from 'expo-router';
import {PrimaryText} from "@/components/PrimaryText";

export default function Index() {
  return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PrimaryText>Edit app/index.tsx to edit this screen.</PrimaryText>
        <Link href="/SetGoal">
          Go to About screen
        </Link>
      </View>
  );
}
