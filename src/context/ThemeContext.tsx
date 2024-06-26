import { useState, createContext, useEffect, useContext } from 'react'

const initialValues = {
    darkMode: false,
    mainColors: {},
    handelDarkTheme: Function,
}

type ContextState = {
    darkMode: boolean | string
    handelDarkTheme: any
    mainColors: any
}

type Props = {
    children: React.ReactElement<any, any> & React.ReactNode
}

// create context for dark theme state
export const DarkThemeContext = createContext<ContextState>(initialValues)

export const DarkThemeProvider: React.FC<Props> = ({ children }) => {
    // The theme data that gets stored in context
    const [darkMode, setDarkMode] = useState<boolean | string>(false)

    // get the last selected theme
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.getItem('athena-theme') === 'true' && setDarkMode(true)
        }
    }, [])

    const mainColors: any = {
        primary: {
            main: darkMode ? '#E0EEFF' : '#3F72A4',
            light: darkMode ? '#ffd700' : '#ffd700',
            dark: darkMode ? '#B6D5F0' : '#1C364F',
            contrastText: darkMode ? '#1C364F' : '#E8F3FF',
        },
        secondary: {
            main: darkMode ? 'rgb(63 114 164 / 0%)' : '#E8F3FF',
            light: darkMode ? '#ffd700' : '#ffd700',
            dark: darkMode ? '#E0EEFF' : '#3F72A4',
            contrastText: darkMode ? '#E0EEFF' : '#3F72A4',
        },
        error: {
            main: '#9C1313',
            light: '#9C1313',
            dark: '#9C1313',
            contrastText: '#9C1313',
        },
        success: {
            main: '#29D277',
            light: '#29D277',
            dark: '#29D277',
            contrastText: '#29D277',
        },
        warning: {
            main: '#FFCC00',
            light: '#FFCC00',
            dark: '#FFCC00',
            contrastText: '#FFCC00',
        },
        info: {
            main: '#3F72A4',
            light: '#3F72A4',
            dark: '#3F72A4',
            contrastText: '#3F72A4',
        },
        title: {
            main: darkMode ? '#E0EEFF' : '#1C364F',
        },
        input: {
            main: darkMode ? '#B6D5F0' : '#3F72A4',
            background: darkMode ? 'rgb(63 114 164 / 0%)' : '#E8F3FF',
        },
        paper: {
            main: darkMode ? '#1C364F' : '#E8F3FF',
            border: darkMode ? '#3F72A4' : '#B6D5F0',
        },
        chips: {
            main: darkMode ? '#3F72A4' : '#B6D5F0',
            border: '#3F72A4',
            contrastText: darkMode ? '#E0EEFF' : '#3F72A4',
        },
        customButton: {
            main: darkMode ? '#162A3E' : '#E8F3FF',
        },
        dialog: {
            background: darkMode ? '#1C364F' : '#E8F3FF',
            titleShadow: darkMode ? 'none' : 'inset 0px 0px 57px 4px rgba(63, 114, 164, 0.25)',
        },
        backgroundColor: {
            main: darkMode ? '#162A3E' : '#E0EEFF',
            sideNav: darkMode ? '#1C364F' : '#B6D5F0',
        },
        linerGradient: {
            primary: darkMode
                ? 'linear-gradient(0deg, #4072A4 0%, #1D3750 100%)'
                : 'linear-gradient(180deg, #B6D5F0 0%, #DFEFFF 100%)',
            secondary: darkMode
                ? 'linear-gradient(180deg, #3F72A4 0%, #1C364F 100%)'
                : 'linear-gradient(180deg, #DFEFFF 0%, #B6D5F0 100%)',
            third: darkMode
                ? 'linear-gradient(270deg, #3F72A4 0%, #1C364F 100%)'
                : 'linear-gradient(270deg, #DFEFFF 0%, #B6D5F0 100%)',
        },
        shadow: {
            main: darkMode ? '' : '5px 5px 10px 0px #B6D5F080',
            secondary: darkMode ? '#3F72A4' : '#B6D5F0',
        },
        table: {
            main: darkMode ? '#1C364F' : '#E8F3FF',
            border: darkMode ? '#3F72A4' : '#B6D5F0',
            // header : darkMode ? 'linear-gradient(0deg, #4072A4 0%, #1D3750 100%)' : '#B6D5F0',
            contrastText: darkMode ? '#E0EEFF' : '#3F72A4',
        },
        studentCard: {
            border: darkMode ? '2px solid #1C364F' : '2px solid #3F72A4',
            hover: darkMode ? '2px solid #3F72A4' : '2px solid #1C364F',
            detailsCard: darkMode ? 'rgba(28, 54, 79, 0.6)' : 'rgba(63, 114, 164, 0.6)',
            detailsCardHover: darkMode ? 'rgba(63, 114, 164, 0.6)' : 'rgba(28, 54, 79, 0.6)',
        },
        icons: {
            roundedAdd: darkMode ? 'transparent' : '#B6D5F0',
        },
        loader: {
            main: darkMode ? 'rgba(28, 54, 79, .4)' : 'rgba(224, 238, 255, .4)',
        },
    }

    // handle change theme
    const handelDarkTheme = async () => {
        localStorage.setItem('athena-theme', JSON.stringify(!darkMode))
        setDarkMode(!darkMode)
    }

    return (
        <DarkThemeContext.Provider value={{ mainColors, darkMode, handelDarkTheme }}>
            {children}
        </DarkThemeContext.Provider>
    )
}

// Custom hook that shorthands the context!
export const useTheme = () => useContext(DarkThemeContext)
