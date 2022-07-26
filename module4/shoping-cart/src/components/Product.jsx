import "./product.css"


export const Product = () => {
    return (
        <>
            <div className="card custom-card" style={{width:"18rem"}}>
                <img className="card-img-top" src="https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70" alt="Card image cap"/>
                    <div className="card-body">
                        <b className="card-text">APPLE iPhone 13 (Midnight, 128 GB)</b>
                    </div>
                    <div className="row">
                        <div className="column col-6">
                            <ul className="list-group list-group-flush">
                                <li className="list-brand-name">Apple</li>
                                <li className="list-prd-price">₹69,000</li>
                            </ul>
                        </div>
                        <div className="column-4" style={{paddingTop:"15px"}}>
                            <button className="btn btn-primary" >Add to cart</button>
                        </div>
                    </div>
            </div>
        </>
    )
}