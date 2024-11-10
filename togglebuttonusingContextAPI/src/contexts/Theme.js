import React, { useContext } from "react";

export const Theme = React.createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

// Use the created context for the provider
export const ThemeProvider = Theme.Provider;

export default function useTheme() {
    return useContext(Theme);
}
