import { useSelector } from "react-redux"
import style from "./cartHolder.module.css"
import { Link } from "react-router-dom"
function NavBar() {
    return (
        <>
            <nav className={`navbar navbar-dark bg-primary ${style.navC}`}>
                <Link to="/"><div className="text-white">Shopping Cart</div></Link>
                <CartHolder />
            </nav>
        </>
    )
}

export default NavBar

const CartHolder = () => {
    const prdQty = useSelector((state) => {
        let prdQty = 0
        for (let prd of state) {
            prdQty += prd.qty;
        }
        return prdQty
    })
    return (

        <div className={style["cartHolder"]}>
            <Link to="/cart">
                <span className="material-symbols-rounded">
                    shopping_cart
                </span>
                <div className={style["cartCounter"]}>{prdQty}</div>
            </Link>
        </div>
    )
}