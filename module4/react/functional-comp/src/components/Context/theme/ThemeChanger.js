import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

import "./theme.css"

export const themeContext = React.createContext("")

function App2() {
    let [theme, setTheme] = useState("light")

    const handeltheme = () => {
        if(theme === "light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }

    return (
        <themeContext.Provider  value={theme}>
            <button onClick={handeltheme} >ChangeTheme</button>
            <NavBar/>
            
            <Footer/>
        </themeContext.Provider>
    )
}

export default App2