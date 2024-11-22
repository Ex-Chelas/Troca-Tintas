import React, { createContext, useState, useMemo, ReactNode } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

// Define the type for the context value
interface ThemeContextType {
    mode: "light" | "dark";
    toggleTheme: () => void;
}

// Create the context with a default value
export const ThemeContext = createContext<ThemeContextType>({
    mode: "light", // Default value
    toggleTheme: () => {}, // Default no-op function
});

// Define a provider component
interface ThemeContextProviderProps {
    children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [mode, setMode] = useState<"light" | "dark">("light");

    // Memoize the theme object to improve performance
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    // Function to toggle between light and dark mode
    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
