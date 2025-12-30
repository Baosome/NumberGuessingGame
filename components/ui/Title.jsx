import { StyleSheet, Text } from "react-native";

export default function Title ({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: "white",
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        marginVertical: 12,
        marginHorizontal: 32,
        padding: 12,
    }
})