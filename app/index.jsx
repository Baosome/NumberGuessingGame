import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from "react-native";
import StartGameScreen from "../screens/StartGameScreen";

export default function index() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={style.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  rootScreen: {
    flex: 1,
  }
})