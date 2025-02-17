import { Button, View } from "react-native";
import Animated, { withSpring, useSharedValue } from "react-native-reanimated";

export default function Index() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: "violet",
        }}
      ></Animated.View>
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}
