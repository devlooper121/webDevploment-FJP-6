import { useSelector } from "react-redux";
import { CartElement } from "./CartElement";

import "./cart.css";

import emptyCart from "../static/emptyCart.jpg"

import { useEffect } from "react";

function Cart() {
    let state = useSelector((state) => {console.log("state changed"); return state});
    let prdData = state.filter(el => el.qty > 0)
    let discountTotal = 0;
    let totalDeliveryCharge = 0
    let price = 0
    for (let i in prdData) {
        let prd = prdData[i]
        let itsPrice = prd.qty * prd.price
        price += itsPrice
        discountTotal += itsPrice * prd.dis / 100
        totalDeliveryCharge += prd.deliveryCharge
    }
    let totalPrice = price - discountTotal;
    useEffect(()=>{
        console.log("rendred");
    })

    return (
        <div className="container-fluid row mt-2">
            <div className="col-2"></div>
            <ul style={{ width: "18rem", marginTop: "1rem" }} className="list-group col-6">
                {prdData.length === 0?<li className="list-group-item flex justify-content-sm-between"> <img src={emptyCart} alt="img"/></li> : prdData.map(element => {
                    // console.log(element)
                    return (
                        <CartElement key={element.id} el={element} ></CartElement>
                    )
                })}

            </ul>
            
            <div className="col-4">
                <div className="card" style={{ width: "18rem", marginTop: "1rem" }}>
                    <div className="card-header">PRICE DETAILS</div>
                    <ul className="list-group">
                        <li className="list-group-item flex justify-content-sm-between">Price <span>₹{price}</span></li>
                        <li className="list-group-item flex justify-content-sm-between">Discount <span className=" text-success" >-₹{discountTotal}</span></li>
                        <li className="list-group-item flex justify-content-sm-between" >Dilivery Charge <span>₹{totalDeliveryCharge}</span></li>
                        <li className="list-group-item total flex justify-content-sm-between">Total <b>₹{totalPrice}</b></li>
                        <div className="list-group-item flex justify-content-sm-between text-success">Total saving<span>₹{price - totalPrice}</span></div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cart;
