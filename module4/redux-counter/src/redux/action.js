

export const incrementCounter = ()=>{
    return{
        type:"INCREMENT",
    }
} 

export const decrementCount = ()=>{
    return{
        type:"DECREMENT",
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