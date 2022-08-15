import { Product } from "./Product"
import "./home.css"
import { useSelector } from "react-redux"

function Home() {
    const state = useSelector((state)=> state)
    return (
        <div className="container-fluid flex">
            {state.map(el=>{
                return(
                    <Product data={el} />
                )
            })}

        </div>
    )
}

export default Home