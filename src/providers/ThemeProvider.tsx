import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react"

export interface ThemeContextType {
    themeMode: string,
    setTheme: Dispatch<SetStateAction<string>>
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

const ThemeProvider = ({children}: {children: React.ReactElement}) => {
    const themeExists = localStorage.getItem("appTheme") ? true : false;
    const [theme, setTheme] = useState(themeExists ? localStorage.getItem("appTheme") as string : "light");

    useEffect(() => {
        localStorage.setItem("appTheme", theme);
        setTheme(localStorage.getItem("appTheme") as string);
    }, [theme])

    return (
        <ThemeContext.Provider value={{themeMode: theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeProvider;