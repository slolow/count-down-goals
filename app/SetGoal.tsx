import { View } from 'react-native';
import {PrimaryText} from "@/components/PrimaryText";

const SetGoal = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <PrimaryText>SetGoal</PrimaryText>
    </View>
  );
}

export default SetGoal;