"use client"

const { createContext, useContext, useState, useEffect } = require("react")

const GlobalContext = createContext()
export const useGlobal = () => useContext(GlobalContext)

export const GlobalProvider = ({ children }) => {

    const [theme, setThemeState] = useState('light')

    useEffect(() => {
        const localTheme = localStorage.getItem('theme')
        setTheme(localTheme)
    }, [theme])

    function setTheme(data){
        localStorage.setItem('theme', data)
        setThemeState(data)        
    }

    return (
        <GlobalContext.Provider value={{ theme, setTheme }}>
            <div className={theme}>
                <div className="dark:text-white">
                    {children}
                </div>
            </div>
        </GlobalContext.Provider>
    )
}
