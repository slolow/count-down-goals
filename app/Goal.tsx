import { View } from 'react-native';
import {PrimaryText} from "@/components/PrimaryText";
import {Link} from "expo-router";

const Goal = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Link href="/">
        <PrimaryText>
          Go home
        </PrimaryText>
      </Link>
    </View>
  );
}

export default Goal;