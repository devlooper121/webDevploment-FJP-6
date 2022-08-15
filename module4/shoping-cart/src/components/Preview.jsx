import "./Preview.css"


const Preview = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-5">
                    <div className="img-container">
                        <img className="img" src="https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70" alt="" />

                    </div>
                </div>
                <div className="col-7">
                    <div className="details-container">
                        <h2 className="prd-name">{props.name}</h2>
                        <p className="description">{props.amount}</p>
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Preview