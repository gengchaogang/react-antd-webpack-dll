const ADD_TODO = "ADD_TODO";
export const addAction = (payload)=>{
    return {
        type:ADD_TODO,
        payload
    }
}