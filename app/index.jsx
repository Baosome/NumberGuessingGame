import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground, StyleSheet, } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import GameScreen from '../screens/GameScreen';
import StartGameScreen from "../screens/StartGameScreen";

export default function index() {

  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={style.rootScreen}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        resizeMode='cover' style={style.rootScreen} imageStyle={{ opacity: .15 }}>
        <SafeAreaView style={style.rootScreen}>
          {screen}
        </SafeAreaView>

      </ImageBackground>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  rootScreen: {
    flex: 1,
  }
})