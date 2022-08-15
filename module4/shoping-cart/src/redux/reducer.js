
let initialState = [
    {
        id:0,
        name:'IPhone',
        img:"https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
        price:40000,
        qty:0,
        dis:5,
        deliveryCharge:100,
        brandName:"Apple",
        sellerInfo:"abc technology park"
    },
    {
        id:1,
        name:"acer Predator Helios 300 Core i7 11th Gen - (16 GB/1 TB HDD/512 GB SSD/Windows 10 Home/6 GB Graphics/NVIDIA GeForce RTX 3060/165 Hz) PH315-54 Gaming Laptop  (15.6 inch, Abyssal Black, 2.3 kg)",
        img:"https://rukminim1.flixcart.com/image/416/416/ksgehzk0/computer/r/c/k/predator-helios-300-gaming-laptop-acer-original-imag6yjdmwdrksyn.jpeg?q=70",
        price:112990,
        qty:0,
        dis:5,
        deliveryCharge:100,
        brandName:"Acer",
        sellerInfo:"MTAILMODEECOM"
    },
    {
        id:2,
        name:"PS 5",
        img:"https://rukminim1.flixcart.com/image/416/416/kj7gwi80/gamingconsole/t/v/v/cfi-1008a01r-825-sony-no-original-imafytxe7twjskbx.jpeg?q=70",
        price:50000,
        qty:0,
        dis:5,
        deliveryCharge:100,
        brandName:"Sony",
        sellerInfo:"abc technology park"
    },
    {
        id:3,
        name:"APPLE iPad",
        img:"https://rukminim1.flixcart.com/image/416/416/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
        price:30900,
        qty:0,
        dis:5,
        deliveryCharge:100,
        brandName:"Apple",
        sellerInfo:"HydtelRETAILSsales"
    },
    {
        id:4,
        name:"SONY WH-XB910N Active Noise Cancellation enabled Bluetooth Headset",
        img:"https://rukminim1.flixcart.com/image/416/416/kzx1a4w0/headphone/8/m/v/-original-imagbt474adquhhz.jpeg?q=70",
        price:12900,
        qty:0,
        dis:5,
        deliveryCharge:100,
        brandName:"Sony",
        sellerInfo:"BUZZINDIA"
    },
    {
        id:5,
        name:"Lord Shiva  Smoke Backflow",
        img:"https://rukminim1.flixcart.com/image/416/416/jxgflow0/showpiece-figurine/h/s/e/kcbfnew001-kunti-craft-original-imaf9z6vdxefgwuz.jpeg?q=70",
        price:299,
        qty:0,
        dis:5,
        deliveryCharge:100,
        brandName:"N/A",
        sellerInfo:"MISS PEACH"
    }
    ,
    {
        id:6,
        name:"Computer Awareness  (English, Paperback, Arihant Experts)",
        img:"https://rukminim1.flixcart.com/image/416/416/l3vxbbk0/book/q/e/v/objective-computer-awareness-original-imagewkcs7jk4df2.jpeg?q=70",
        price:121,
        qty:0,
        dis:0,
        deliveryCharge:40,
        brandName:"Arihant Experts",
        sellerInfo:"TrueComRetail"
    }
]

export const reducer = (state=initialState, action) =>{
    let cp = state.map((el)=>el);
    let id = action.payload;
    switch(action.type){
        case "ADD_TO_CART":
            
            cp[id].qty = cp[id].qty+1;
            console.log(state)
            return cp;
        case "REMOVE_FROM_CART":
            
            if(cp[id].qty>0)
                cp[id].qty = cp[id].qty-1;
            return cp;
        case "DELETE_FROM_CART":
            
            cp[id].qty=0
            return cp 
        default:
            return state
    }
}