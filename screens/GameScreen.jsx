import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import NumberContainer from '../components/game/NumberContainer';
import Card from "../components/ui/Card";
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import colors from '../constants/colors';


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


export default function GameScreen({ userNumber, onGameOver }) {

    const initialGuess = generateRanNumBetween(1, 100, userNumber)
    const [currGuess, setCurrGuess] = useState(initialGuess);
    const [prevGuesses, setPrevGuesses] = useState([]);

    useEffect(() => {
        if (currGuess === userNumber) {
            Alert.alert('Game Over', 'The opponent guessed your number!', [{ text: 'OK', style: 'default' }])
            onGameOver();
            minBoundary = 1;
            maxBoundary = 100;
        }
    }, [currGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        if (direction === 'lower' && currGuess < userNumber ||
            direction === 'higher' && currGuess > userNumber) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currGuess;
        } else {
            minBoundary = currGuess + 1;
        }
        const newRndNum = generateRanNumBetween(minBoundary, maxBoundary, currGuess)
        setCurrGuess(newRndNum)
        setPrevGuesses(currPrevGuesses => [newRndNum, ...currPrevGuesses]);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currGuess}</NumberContainer>
            <Card>
                <View>
                    <Text style={styles.descriptionText}>Higher or Lower?</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color="white" />
                    </PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                        <Ionicons name="md-add" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </Card>

            <View style={styles.logContainer}>
                <Text style={styles.logTitle}>Previous guesses: </Text>
                <FlatList data={prevGuesses} renderItem={({ item }) =>
                    <View style={styles.logBox}>
                        <Text style={styles.logText}>Round: {prevGuesses.indexOf(item) + 1} Guess: {item}</Text>
                    </View>} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 100,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',

    },
    descriptionText: {
        fontSize: 18,
        color: colors.Accent,
        textAlign: 'center',
        marginBottom: 8,
    },
    logTitle: {
        fontSize: 20,
        color: colors.Accent,
        marginVertical: 12,
        fontWeight: 'bold',
    },
    logText: {
        fontSize: 25,
        color: colors.Primary,
        textAlign: 'center',
    },
    logContainer: {
        alignItems: 'center',
        height: '20%',
        flex: 1,

    },
    logBox: {
        borderColor: colors.Primary,
        borderWidth: 2,
        borderRadius: 8,
        padding: 8,
        paddingHorizontal: 88,
        marginVertical: 3,
        backgroundColor: colors.Accent,
        alignItems: 'center',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
        shadowOpacity: 0.25,
    }
})