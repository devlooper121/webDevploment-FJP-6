

export const incrementCounter = (value)=>{
    // value can be passed and used as payload to actions modification

    return{
        type:"INCREMENT",
        paylode : value 
    }
} 

export const decrementCount = (value)=>{
    return{
        type:"DECREMENT",
        paylode: value
    }
}

export const login = ()=>{
    return{
        type: "LOGIN",
    }
}

export const logout = ()=>{
    return{
        type: "LOGOUT",
    }
}