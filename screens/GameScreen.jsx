import { StyleSheet, Text, View } from "react-native";
import Title from '../components/Title';

export default function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <View>
                <Text>Higher or Lower?</Text>
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
        alignItems: 'center',
    },
})