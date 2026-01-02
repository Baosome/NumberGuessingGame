import { StyleSheet, View } from "react-native";
import colors from "../../constants/colors";

export default function Card({ children }) {
    return (
        <View style={[style.card]}>
            {children}
        </View>
    );
}

const style = StyleSheet.create({
    card: {
        padding: 16,
        marginTop: 12,
        marginHorizontal: 24,
        backgroundColor: colors.Primary3,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        alignItems: 'center',
    }
});