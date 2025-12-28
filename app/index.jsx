import { StyleSheet, View } from "react-native";
import StartGameScreen from "../screens/StartGameScreen";

export default function index() {
  return (
    <View style={style.rootScreen}>
      <StartGameScreen />
    </View>
  );
}

const style = StyleSheet.create({
  rootScreen: {
    backgroundColor: '#ddb52f',
    flex: 1,
  }
})