import { Text, View } from 'react-native';

export default function PrimaryFunction({ children }) {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    );
};