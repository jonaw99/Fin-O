import { createContext, useContext, useEffect, useState } from "react"

type ColorTheme = "default" | "red" | "rose" | "orange" | "green"| "blue"| "yellow"| "violet"

type ColorThemeContextType = {
    colorTheme: ColorTheme
    setColorTheme: (theme: ColorTheme) => void
}

const ColorThemeContext = createContext<ColorThemeContextType>({
    colorTheme: "default",
    setColorTheme: () => null,
})

export function ColorThemeProvider({ children }: { children: React.ReactNode }) {
    const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
        return (localStorage.getItem("accent-color-theme") as ColorTheme) || "default"
    })

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", colorTheme)
    }, [colorTheme])

    const setAndStore = (theme: ColorTheme) => {
        localStorage.setItem("accent-color-theme", theme)
        setColorTheme(theme)
    }

    return (
        <ColorThemeContext.Provider value={{ colorTheme, setColorTheme: setAndStore }}>
            {children}
        </ColorThemeContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useColorTheme = () => useContext(ColorThemeContext)