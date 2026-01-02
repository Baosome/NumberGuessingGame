import { StyleSheet, Text, View } from "react-native";
import colors from '../constants/colors';

export default function GameOverScreen() {
    return (
        <View style={styles.screen}>
            <Text style={styles.descriptionText}>Game Over!</Text>
            <Text style={styles.summaryText}>
                Your Phone needed <Text style={styles.infoText}>X</Text> rounds to guess the 
                <Text style={styles.infoText}>Y</Text>.
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionText: {
        fontSize: 32,
        color: colors.Accent,
        textAlign: 'center',
        marginBottom: 8,
    },
    summaryText: {
        fontSize: 16,
        color: 'white',

    }, 
    infoText: {
        fontSize: 18,
        color: colors.Accent,

    },
})