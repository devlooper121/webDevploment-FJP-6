import "./feed.css"
import logo from "../image/logo.svg"

import { auth } from "../firebase"
import { signOut } from "firebase/auth"
import { useState } from "react"
import { VideoCard } from "./videocard"

const logOut = async () => {
    try {
        await signOut(auth);
    } catch (err) {

    }
}

function Feed() {
    return (
        <>
            <NavBar></NavBar>
            <div className="mainContainer">
                <div className="reelContainer-top">
                    <div className="reelContainer">
                        <VideoCard></VideoCard>
                    </div>
                </div>
                <div className="detailContainer">

                </div>
            </div>
        </>
    )
}

export const NavBar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [searching, setSearching] = useState(false)
    const changeVisibility = () => {
        if (menuVisible) {
            setMenuVisible(false)
        } else {
            setMenuVisible(true)
        }
    }

    return (
        <div className="headerContainer">
            <div className="header">
                <div className="brand-left">
                    <img className="brand-logo" src={logo} alt="" />
                </div>
                <div onClick={() => setSearching(true)} className="search-mid">
                    <div className="searchBox">
                        {searching === true ? <><input type="text" name="query" className="searchBox" placeholder="Search" /> <span onClick={(e) => { setSearching(false); e.stopPropagation() }} className="material-symbols-rounded small">
                            backspace
                        </span> </> :
                            <><span className="material-symbols-rounded low">
                                search
                            </span>
                                Search</>
                        }

                    </div>
                </div>
                <div className="nav-right">
                    <ul className="navBar">
                        <li className="navLink">
                            <span className="material-symbols-rounded">
                                home
                            </span>
                        </li>
                        <li className="navLink">
                            <span className="material-symbols-rounded">
                                movie
                            </span>
                        </li>
                        <li className="navLink"><span className="material-symbols-rounded">
                            add_box
                        </span></li>
                        <li className="navLink">
                            <span className="material-symbols-rounded">
                                favorite
                            </span>
                        </li>
                        <li onClick={changeVisibility} className="navLink menu-launch">
                            <span className="material-symbols-rounded">
                                account_circle

                            </span>
                            {menuVisible !== true ? "" :
                                <Menu></Menu>}
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

const Menu = () => {
    return (
        <div className="menu">
            <div className="square"></div>
            <div className="menu2">
                <div className="menu-list">
                    <span className="material-symbols-rounded">
                        manage_accounts
                    </span>
                    <div className="menu-name">Profile</div>
                </div>
                <div className="menu-list">
                    <span className="material-symbols-rounded">
                        bookmark
                    </span>
                    <div className="menu-name">Saved</div>
                </div>
                <div className="menu-list">
                    <span className="material-symbols-rounded">
                        settings
                    </span>
                    <div className="menu-name">Settings</div>
                </div>
                <div onClick={logOut} className="menu-list logout-menu">
                    logout
                </div>
            </div>
        </div>
    )
}

export default Feed