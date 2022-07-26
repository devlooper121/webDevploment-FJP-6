import { useContext } from "react"
import { themeContext } from "./ThemeChanger"



function Footer(){
    const theme = useContext(themeContext)
    return (
        <>
            <footer className={theme}>
            <hr/>Footer</footer>
        </>
    )
}

export default Footer