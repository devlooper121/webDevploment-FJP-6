

export const countReducer = (state=0, action)=>{
    switch(action.type){
        case "INCREMENT":
            return state+action.paylode
        case "DECREMENT":
            return state-action.paylode;
        default:
            return state
    }
}

export const loginReducer = (state=false,action)=>{
    switch(action.type){
        case "LOGIN":
            return true;
        case "LOGOUT":
            return false;
        default:
            return state
    }
}