import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hi! React native is coming!</Text>
      <TouchableHighlight onPress={() => console.log("image tapped")}>
        <Image
          source={{
            height: 200,
            width: 300,
            uri: "https://picsum.photos/200/300.jpg",
          }}
        />
      </TouchableHighlight>
      <Button
        color="red"
        title="Click me"
        onPress={() => console.log("Click me button was pressed")}
      />
      <Button
        title="Clike me for alert"
        onPress={() => alert("Button was clikced!")}
      />
      <Button
        title="Clike me for alert with choice"
        onPress={() =>
          Alert.alert("Title", "Message", [
            { text: "Yes", onPress: () => console.log("Yes was pressed") },
            { text: "No", onPress: () => console.log("No was pressed") },
          ])
        }
      />
      <Button
        title="Clike me for prompt alert"
        onPress={() =>
          Alert.prompt("Title", "Message", (text) => console.log(text))
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
