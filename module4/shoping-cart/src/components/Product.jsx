import { useDispatch } from "react-redux";
import "./product.css"
import { addToCart } from "../redux/Action";

export const Product = (props) => {
    // const {data} = props;

    const dispatch = useDispatch()
    return (
        <>
            <div className="card custom-card" style={{ width: "12rem" }}>
                <img className="card-img-top" src={props.data.img} alt="Card image cap" />
                <div className="card-body">
                    <div className="row-c">
                        <b className="card-text">{props.data.name.substring(0,12)}</b>
                        <ul className="list-group">
                            <li className="list-brand-name">{props.data.brandName.substring(0,12)}</li>
                            <li className="list-prd-price">₹{props.data.price}</li>
                        </ul>
                        <button className="btn btn-primary add-btn" onClick={() => dispatch(addToCart(props.data.id))}>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}