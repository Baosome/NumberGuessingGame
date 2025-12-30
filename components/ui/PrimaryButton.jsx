import { Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';

export default function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={(
                { pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                onPress={onPress} android_ripple={{ color: colors.Primary2 }} >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        overflow: 'hidden',
        margin: 4,
        elevation: 2,
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.3,
    },
    buttonInnerContainer: {
        backgroundColor: colors.Primary,
        paddingVertical: 8,
        paddingHorizontal: 16,

    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }

});