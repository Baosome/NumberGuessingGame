import { StyleSheet, TextInput, View } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

export default function StartGameScreen() {
    return (
        <View style={style.inputContainer}>
            <TextInput style={style.numberInput} maxLength={2} keyboardType="number-pad" 
                autoCapitalize="none" autoCorrect={false} />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
};

const style = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#72063c',
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
    }

})