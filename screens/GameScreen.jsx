import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

let minBoundary = 1;
let maxBoundary = 100;

function generateRanNumBetween(min, max, exclude) {
    const randnum = Math.floor(Math.random() * (max - min)) + min

    if (randnum == exclude) {
        return generateRanNumBetween(min, max, exclude)
    } else {
        return randnum
    }
}


export default function GameScreen({userNumber}) {

    const initialGuess =generateRanNumBetween(minBoundary, maxBoundary, userNumber)
    const [currGuess, setCurrGuess] = useState(initialGuess);

    function nextGuessHandler(direction) {
        if (direction === 'lower' && currGuess < userNumber ||
            direction === 'higher' && currGuess > userNumber) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }
        
        if(direction === 'lower' ) {
            maxBoundary = currGuess;
        } else {
            minBoundary = currGuess +1;
        }
        const newRndNum = generateRanNumBetween(minBoundary, maxBoundary, currGuess)
        setCurrGuess(newRndNum)
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower?</Text>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
            </View>
            <View>
                <Text>Your Number</Text>
            </View>
            <View>
                {/* LOG ROUNDS */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    }
})