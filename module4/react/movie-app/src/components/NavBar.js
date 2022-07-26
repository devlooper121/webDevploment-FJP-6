import {Component} from 'react'
import {Link} from "react-router-dom"

class NavBar extends Component {
    render(){
        return(
            <nav style={{display:"flex", alignItems:"center", padding:"15px"}}>
                <Link style={{textDecoration:"none"}} to="/">
                    <h1 style={{marginRight:"20px"}}>Movies app</h1>
                </Link>
                <Link style={{textDecoration:"none"}} to="/favourites">
                    <h2>Favorite</h2>
                </Link>
                
            </nav>
        )
    }
}

export default NavBar;