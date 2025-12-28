import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

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
        <View>
            <View style={style.inputContainer}>
                <TextInput style={style.numberInput} maxLength={2} keyboardType="number-pad"
                    autoCapitalize="none" autoCorrect={false} value={enteredNumber}
                    onChangeText={numberInputHandler} />
            </View>
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
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        alignItems: 'center',
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
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