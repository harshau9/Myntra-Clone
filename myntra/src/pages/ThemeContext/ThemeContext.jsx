import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};
export default ThemeContextProvider;