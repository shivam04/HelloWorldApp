import { View, Text } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

const Card = () => {
    const { colors, isDark } = useTheme();
    return (
        <View style={{ backgroundColor: colors.background }}>
            <Text style={{ color: colors.text }}>
                The current theme is {isDark ? 'dark' : 'light'}
            </Text>
        </View>
    );
};

export default Card;