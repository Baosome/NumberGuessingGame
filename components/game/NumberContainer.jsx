import { StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';

export default function NumberContainer({ children }) {
    return (
        <View style={style.container}>
            <Text style={style.numberText}>
                {children}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: colors.Accent,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'

    },
    numberText: {
        color: colors.Accent,
        fontSize: 36,
        fontWeight: 'bold'
    }
})