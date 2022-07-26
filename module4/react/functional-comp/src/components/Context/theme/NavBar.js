import { useContext } from "react"
import { themeContext } from "./ThemeChanger"
// import css




function NavBar() {
    const theme = useContext(themeContext);
    return (
        <>
            <nav className={theme}>Nav bar hai</nav>
            <Page/>
            <Page/>
        </>
    )
}

function Page() {
    const theme = useContext(themeContext);
    return (
        <div className={theme}>
            jhjkghjg
        </div>
    )
}

export default NavBar