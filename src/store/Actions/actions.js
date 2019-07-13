export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

//action creator - create the action object

export const increment = () => {
    return {
        type: INCREMENT
    };
};
export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const subtract = val => {
    return { type: SUBTRACT, val: val };
};

export const add = () => {
    return { type: ADD, val: 5 };
};

export const saveResult = (res)=>{
    return { type: STORE_RESULT, result: res };
}

export const storeResult = res => {
    return function(dispatch){ // this function is executed by redux thunk
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 2000);
    }
    
    
};

export const deleteResult = id => {
    return { type: DELETE_RESULT, resultElId: id };
};
