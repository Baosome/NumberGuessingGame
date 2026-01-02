import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground, StyleSheet, } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/colors';
import GameOverScreen from '../screens/GameOverScreen';
import GameScreen from '../screens/GameScreen';
import StartGameScreen from "../screens/StartGameScreen";

export default function index() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber = {userNumber} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }


  return (
    <LinearGradient colors={[colors.Primary3, colors.Accent]} style={style.rootScreen}>
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