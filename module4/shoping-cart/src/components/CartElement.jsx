import "./cartElement.css"

export const CartElement = () => {
    return (
        <>
            <li className="list-group-item">
                <div className="flex">
                    <div className="left">
                        <img className="prd-img" src="https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70" alt="" />
                    </div>
                    <div className="middle-detail">

                        <ul className="list-group list-group-flush">
                            <b className="card-text">APPLE iPhone 13 (Midnight, 128 GB)</b>
                            <li className="list-brand-name">Apple</li>
                            <li className="list-prd-seller" >Seller : Dhe.inc</li>
                            <li className="list-prd-price">₹69,000</li>
                        </ul>
                    </div>
                </div>
                <div className="control">
                    <div className="control">
                        <button className="btn-my">-</button>
                        <div className="display-qt">1</div>
                        <button className="btn-my">+</button>
                    </div>
                    <div className="btn-remove ">REMOVE</div>
                </div>
            </li>

        </>
    )
}