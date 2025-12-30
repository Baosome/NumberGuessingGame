import { StyleSheet, Text } from "react-native";
import colors from '../constants/colors';

export default function Title ({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.Accent,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: colors.Accent,
        marginVertical: 12,
        padding: 12,
    }
})