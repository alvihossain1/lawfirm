"use client"

const { createContext, useContext, useState, useEffect } = require("react")

const GlobalContext = createContext()
export const useGlobal = () => useContext(GlobalContext)

export const GlobalProvider = ({ children }) => {

    const [theme, setThemeState] = useState('dark')
    const [bgImage, setBgImage] = useState(false)

    useEffect(() => {
        const localTheme = localStorage.getItem('theme') || 'dark'
        setTheme(localTheme)
    }, [theme])

     useEffect(() => {
        const image = localStorage.getItem('bgImage') || 'no'
        setBgImage(image)
    }, [bgImage])

    function setTheme(data){
        localStorage.setItem('theme', data)
        setThemeState(data)        
    }

    function swapImage(data){
        localStorage.setItem('bgImage', data)
        setBgImage(data)
    }

    return (
        <GlobalContext.Provider value={{ theme, setTheme, bgImage, swapImage }}>
            <div className={theme}>
                <div className="dark:text-white">
                    {children}
                </div>
            </div>
        </GlobalContext.Provider>
    )
}
