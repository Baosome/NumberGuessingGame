import PrimaryButton from "@/components/ui/PrimaryButton";
import { StyleSheet, Text, View } from "react-native";
import colors from '../constants/colors';

export default function GameOverScreen({userNumber, onStartNewGame}) {
    return (
        <View style={styles.screen}>
            <Text style={styles.descriptionText}>Game Over!</Text>
            <Text style={styles.summaryText}>
                Your Phone needed <Text style={styles.infoText}>{}</Text> rounds to guess the number:
                <Text style={styles.infoText}> {userNumber}</Text>
            </Text>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    descriptionText: {
        fontSize: 32,
        color: colors.Accent,
        textAlign: 'center',
        marginBottom: 32,
    },
    summaryText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    infoText: {
        fontSize: 24,
        color: colors.Accent,
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: 48,
    }
})