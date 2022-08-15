import "./cartElement.css"

import { useDispatch } from "react-redux";
import {addToCart, removeFromCart, deleteFromCart} from "../redux/Action"

export const CartElement = (props) => {
    const {el} = props;
    let dispatch = useDispatch()
    return (
        <>
            <li className="list-group-item">
                <div className="flex">
                    <div className="left">
                        <img className="prd-img" src={el.img} alt="" />
                    </div>
                    <div className="middle-detail">

                        <ul className="list-group">
                            <b className="card-text">{el.name.substring(0,40)}</b>
                            <li className="list-brand-name">{el.brandName}</li>
                            <li className="list-prd-seller" >Seller : {el.sellerInfo}</li>
                            <li className="list-prd-price">₹{el.price}</li>
                        </ul>
                    </div>
                </div>
                <div className="control">
                    <div className="control">
                        <button className="btn-my" onClick={()=>dispatch(removeFromCart(el.id))}>-</button>
                        <div className="display-qt">{el.qty}</div>
                        <button className="btn-my" onClick={()=> dispatch(addToCart(el.id))} >+</button>
                    </div>
                    <div className="btn-remove btn" onClick={()=>dispatch(deleteFromCart(el.id))}>REMOVE</div>
                </div>
            </li>

        </>
    )
}