import { createContext, ReactNode, useContext, useState } from "react";
import { useColorScheme } from "react-native";

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    isDark: boolean;
    colors: {
        background: string;
        text: string;
    };
    toggleTheme: () => void;
}


export const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderType {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderType) => {
    const systemTheme = useColorScheme();
    const [theme, setTheme] = useState<Theme>(
        systemTheme === 'dark' ? 'dark' : 'light',
    );

    const lightColors = {
        background: 'white',
        text: 'black',
    };

    const darkColors = {
        background: 'black',
        text: 'white',
    };

    const colors = theme === 'dark' ? darkColors : lightColors;


    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
    };

    const value: ThemeContextType = {
        theme,
        isDark: theme === 'dark',
        colors,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )

}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme can only be used within a ThemeProvider');
    }
    return context;
}