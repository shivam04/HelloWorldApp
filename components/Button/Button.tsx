import { Text } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

const Button = () => {
    const { colors, toggleTheme } = useTheme();
    return (
        <Text
            style={{ backgroundColor: colors.background, color: colors.text }}
            onPress={toggleTheme}
        >
            Switch the theme
        </Text>
    );
};

export default Button;