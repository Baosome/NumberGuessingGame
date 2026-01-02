import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import colors from '../constants/colors';

export default function StartGameScreen({ onPickNumber }) {

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //show alert
            Alert.alert('Invalid number!', 'Please enter a number between 1 and 99.', 
                [{ text: 'Okay', style: 'destructive', onPress: () => setEnteredNumber('') }]);
            
            console.log('Invalid number!');
            return;
        } else {
            onPickNumber(chosenNumber);
        }
    }

    return (
        <View style={style.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <Text style={style.descriptionText}>Enter a number between 1 and 99</Text>
                <TextInput style={style.numberInput} maxLength={2} keyboardType="number-pad"
                    autoCapitalize="none" autoCorrect={false} value={enteredNumber}
                    onChangeText={numberInputHandler} />
            </Card>
            <View style={style.buttonsContainer}>
                <View style={style.buttonContainer}>
                    <PrimaryButton onPress={() => setEnteredNumber('')}>Reset</PrimaryButton>
                </View>
                <View style={style.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>

    )
};

const style = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
    },
    descriptionText: {
        fontSize: 18,
        color: colors.Accent,
        textAlign: 'center',
        marginBottom: 8,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: colors.Accent,
        borderBottomWidth: 2,
        color: colors.Accent,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        marginVertical: 8,
        marginHorizontal: 24,
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
})