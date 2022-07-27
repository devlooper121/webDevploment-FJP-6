import "./feed.css"
import logo from "../image/logo.svg"

function Feed() {
    return (
        <>
            <NavBar></NavBar>
            <div className="mainContainer">
                <div className="reelContainer-top">
                    <div className="reelContainer">reels</div>
                </div>
                <div className="detailContainer">

                </div>
            </div>
        </>
    )
}

export const NavBar = ()=>{
    return(
        <div className="headerContainer">
                <div className="header">
                    <div className="brand-left">
                        <img className="brand-logo" src={logo} alt="" />
                    </div>
                    <div className="search-mid">
                        <div className="searchBox">
                            {/* <input type="text" name="query" id="query_id" placeholder="search" />
                     */}
                            <span class="material-symbols-rounded low">
                                search
                            </span>
                            Search
                        </div>
                    </div>
                    <div className="nav-right">
                        <ul className="navBar">
                            <li className="navLink">
                                <span class="material-symbols-rounded">
                                    home
                                </span>
                            </li>
                            <li className="navLink"><span class="material-symbols-rounded">
                                add_box
                            </span></li>
                            <li className="navLink">
                                <span class="material-symbols-rounded">
                                    favorite
                                </span>
                            </li>
                            <li className="navLink">
                                <span class="material-symbols-rounded">
                                    account_circle
                                </span>
                            </li>

                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Feed