import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react"

export interface ThemeContextType {
    theme: string,
    setTheme: Dispatch<SetStateAction<string>>
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

const ThemeProvider = ({children}: {children: React.ReactElement}) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        localStorage.setItem("appTheme", theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeProvider;